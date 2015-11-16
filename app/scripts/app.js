
(function(document) {
  'use strict';


  var app = document.querySelector('#app');


  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });


  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });


  app.onDataRouteClick = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };


  app.scrollPageToTop = function() {
    document.getElementById('mainContainer').scrollTop = 0;
  };

  app._equal = function(value1, value2) {
    return value1 === value2;
  };

  app.handleResponse = function(event, element) {
    console.log(event.detail.response);

  };

})(document);
