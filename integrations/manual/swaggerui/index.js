var fs       = require('fs')
var datafire = require('datafire')
var files    = {
	"index.html":                      fs.readFileSync( __dirname+"/index.html" ).toString(), 
	"swagger-ui.css":                  fs.readFileSync( process.cwd()+"/node_modules/swagger-ui-dist/swagger-ui.css" ).toString(), 
	"swagger-ui-bundle.js":            fs.readFileSync( process.cwd()+"/node_modules/swagger-ui-dist/swagger-ui-bundle.js" ).toString(), 
	"swagger-ui-standalone-preset.js": fs.readFileSync( process.cwd()+"/node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js" ).toString()
}

module.exports = new datafire.Action({
		handler: (input, context) => {
		var file  = context.request.query.file || ""
		var data  = files[ file ] || files['index.html'] 
		var ctype = "text/html"
		if( file.match(/\.js/)  != null )  ctype = "application/javascript"
		if( file.match(/\.css/) != null )  ctype = "text/css"

		return new datafire.Response({
			statusCode: 200,
			headers: {'Content-Type':ctype}, 
			body: data 
		})
  }, 
	inputs: [
		{
			type:"string", 
			title:"file", 
			default:"" 
		}
	]
});
