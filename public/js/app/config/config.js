// Require.js Configurations
// -------------------------
require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js/app",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // --------------
      "jquery": "../libs/jquery",
      
      "json2": "../libs/plugins/json2",

      "jqueryui": "../libs/jqueryui",

      "underscore": "../libs/lodash",

      "backbone": "../libs/backbone",

      "Amplify": "../libs/amplify.min",

      "handlebars": "../libs/handlebars",

      "semantic": "../libs/semantic.min",

      "alertify" : "../libs/alertify.min",


      // Plugins
      // -------
      "views": "views",
      "backbone.validateAll": "../libs/plugins/Backbone.validateAll",

      "backbone.stickit" : "../libs/plugins/backbone.stickit.min",

      "text": "../libs/plugins/text",

      "prettify" : "../libs/prettify"

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      // jQueryUI
      "jqueryui": ["jquery"],

      // Backbone
      "backbone": {

        // Depends on underscore/lodash and jQuery
        "deps": ["underscore", "jquery"],

        // Exports the global window.Backbone object
        "exports": "Backbone"

      },

      "Amplify":{
        "deps" : ["json2", "jquery"],
        "exports" : "Amplify"
      },

      "backbone.validateAll": ["backbone"],
      "backbone.stickit" :["backbone"],

      "semantic": ["jquery"],

      "alertify" : {
          "deps" : ["jquery"]
      }

  }

});