const fs = require('fs');
const bodyParser = require('body-parser');
const iterateIntegs = require('./iterate-integrations');
const OVERRIDE_FILE = __dirname + '/../overrides.json';
const overrides = require(OVERRIDE_FILE);
const app = require('express')();

const list = {};
iterateIntegs((dir, name, integ) => {
  console.log(name);
  list[name] = Object.assign({}, {
    title: integ.title,
    description: integ.description,
    logo: integ.logo,
  }, overrides[name] || {});
})

function getHTML() {
return `
  <html>
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <style>
        img {
          height: 50px;
        }
        .submit-button {
          position: fixed;
          top: 50px;
          right: 50px;
        }
        .integration {
          padding: 15px;
          margin-bottom: 15px;
          border: 1px solid black;
          border-radius: 4px;
        }
        .changed {
          border-color: red;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <form method="POST" action="/">
          <div class="row">
            <div class="col-xs-9">
              ${Object.keys(list).map(name => {
                let o = overrides[name] || {};
                let l = list[name];
                let logo = (o.logo && o.logo.url) || (l.logo && l.logo.url) || '';
                return `
                <div class="integration">
                  <div class="row">
                    <div class="col-xs-6">
                      <h4>${name}</h4>
                    </div>
                    <div class="col-xs-6" style="background-color: ${(l.logo && l.logo.backgroundColor) || '#fff'}">
                      <img src="${logo}">
                    </div>
                  </div>
                  <label>Title</label>
                  <input class="form-control ${overrides[name] && overrides[name].title ? 'changed' : ''}"
                        type="text" name="${name}.title" value="${o.title || l.title}">
                  <br>

                  <label>Description</label>
                  <textarea class="form-control ${overrides[name] && overrides[name].description ? 'changed' : ''}"
                        name="${name}.description" rows="3">${o.description || l.description}</textarea>
                  <br>

                  <label>Logo</label>
                  <input class="form-control ${overrides[name] && overrides[name].logo ? 'changed' : ''}"
                        type="text" name="${name}.logo" value="${logo}">
                </div>
              `}).join('\n')}
            </div>
          </div>
          <div class="col-xs-3">
            <button class="btn btn-lg btn-success submit-button" type="submit">Update</button>
          </div>
        </form>
      </div>
    </body>
  </html>
`
}
app.get('/', (req, res) => {
  res.send(getHTML())
});

app.post('/', bodyParser.urlencoded({limit: '100mb', parameterLimit: 1000000}), (req, res) => {
  for (let key in req.body) {
    let [name, field] = key.split('.');
    let l = list[name];
    let o = overrides[name] || {};
    let val = req.body[key];
    if (!val) {
      delete o[field];
      continue;
    }
    val = val.replace(new RegExp(String.fromCharCode(13), 'g'), '');
    if (field === 'logo') {
      if ((!l.logo || l.logo.url !== val) && (!o.logo || o.logo.url !== val)) {
        console.log('changing', name, field);
        overrides[name] = overrides[name] || {};
        overrides[name].logo = {url: val};
      }
    } else if ((l[field] || '').trim() !== val.trim() && (o[field] || '').trim() !== val.trim()) {
      console.log('changing', name, field);
      overrides[name] = overrides[name] || {};
      overrides[name][field] = val;
    }
  }
  fs.writeFileSync(OVERRIDE_FILE, JSON.stringify(overrides, null, 2))
  res.send(getHTML());
})

app.listen(3000, () => console.log("Listening on 3000"));
