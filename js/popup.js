$(function () {
  chrome.runtime.getBackgroundPage(function(app){
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      var template = localStorage.getItem(app.templateKey);
      var title_and_urls = "";
      $.each(tabs, function(i, tab) {
        var buf1 = template.replace('{#title}', tab.title);
        var buf2 = buf1.replace('{#url}', tab.url);
        console.log(buf2);
        title_and_urls += buf2 + "\n";
      });
      $('#title_and_urls').val(title_and_urls);
    });
  });
});
