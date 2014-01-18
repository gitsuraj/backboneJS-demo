// DesktopInit.js
// --------------

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery", "backbone", "routers/main_router", "jqueryui", "backbone.validateAll", "prettify", "Amplify","handlebars", "semantic", "backbone.stickit", "alertify"],
  function($, Backbone, mainRouter) {
    // Instantiates a new Desktop Router instance
    new mainRouter();

  }

);