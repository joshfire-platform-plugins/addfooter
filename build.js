module.exports = {
  "startfile":function(runtime, params, callback) {
    callback(null, params["content"].replace(/<\/body>/i,(params.options.footerhtml||"").replace(/\$/g,"$$$$")+"</body>"));
  }
};