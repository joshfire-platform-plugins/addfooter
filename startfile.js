/**
 * @fileoverview Startfile hook that adds the HTML footer right before
 * the end of the HTML body.
 */
define([], function () {
  return function (runtime, params, callback) {
    callback(null, params.content
      .replace(/<\/body>/i,(params.options.footerhtml||"")
      .replace(/\$/g,"$$$$") + "</body>"));
  };
});