$(function () {
  chrome.runtime.getBackgroundPage(function(app){
    var key= app.templateKey;
    var default_t = app.defaultTemplate;
    $('#save').click(function() {
      var tandu_t = $('#tau_template').val();
      localStorage.setItem(key, tandu_t);
      alert("template save ok.");
    });
    $('#reset').click(function() {
      $('#tau_template').val(default_t);
    });
    var tandu_t = localStorage.getItem(key);
    $('#tau_template').val(tandu_t);
  });
});
