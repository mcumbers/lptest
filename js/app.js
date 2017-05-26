(function() {
  var app = angular.module('site', []);

  app.controller('SiteController', function() {
    this.title = "Site Title";
    this.subtitle = "Site Subtitle";
    this.loaded = true;
  });

app.controller('NavbarController', function() {
    this.navs = [
    	{
    		label: 'nav1',
    		link: '#',
    	}, {
    		label: 'nav2',
    		link: '#',
    	}, {
    		label: 'nav3',
    		link: '#',
    	}, {
    		label: 'nav4',
    		link: '#',
    	},

    ];
  });

})();