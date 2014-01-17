// DesktopInit.js
// --------------

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery", "backbone", "routers/DesktopRouter"
	
	//no need to have associated object in function
	, "jqueryui", "backbone.validateAll","prettify", "Amplify","handlebars","semantic","backbone.stickit","alertify"],
  function($, Backbone, DesktopRouter) {
    // Instantiates a new Desktop Router instance
    new DesktopRouter();

  }

);