var style = document.createElement('link');

style.type = 'text/css';
style.rel = 'stylesheet';
style.href = chrome.extension.getURL('style_improvements.css');

(document.head||document.documentElement).appendChild(style);