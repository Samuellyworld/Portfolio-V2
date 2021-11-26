module.exports = {
        "mode": "none",
        "entry" : "script.js",
        "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js",
   },
   devServer: {
   contentBase: path.join(__dirname, 'dist')
 }
 
}