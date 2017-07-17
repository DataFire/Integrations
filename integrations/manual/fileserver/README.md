# @datafire/fileserver

Serve static files as HTML, CSS, JavaScript, images, etc.

## Usage
```
npm install --save datafire @datafire/fileserver
```

Create DataFire.yml:

```yaml
paths:
  '/{filename}'
    get:
      extendPath: 5 // captures /baz.txt, /bar/baz.txt, /foo/bar/baz.txt, 5 levels deep
      action: fileserver/serve
      accounts:
        fileserver:
          baseDirectory: '.'
```

Start the server:

```bash
datafire serve --port 3000
```

You should see DataFire.yml returned at `localhost:3000/DataFire.yml`
