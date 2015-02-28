var templateKey = "tandu_template";
var defaultTemplate = "- {#title}\n-- {#url}";

chrome.runtime.onInstalled.addListener(function(details){
  if (details.reason == "install"){
    // initialize template (install time only, NOT update time.)
    localStorage.setItem(templateKey, defaultTemplate);
  }
});
