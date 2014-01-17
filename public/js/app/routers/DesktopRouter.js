// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "views/PresentationView","views/Demo1/Demo1View","views/Demo2/Demo2View","views/Conclusion"],

    function($, Backbone, PresentationView,Demo1View,Demo2View,ConclusionView) {

        var DesktopRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index",
                "demo1" : "demo1",
                "demo2" : "demo2",
                "conclusion" : "conclusion"

            },

            index: function() {
                new PresentationView();
                prettyPrint();
            },
            demo1 : function(){
                new Demo1View();
            },
            demo2 : function(){
                new Demo2View();
            },
            conclusion : function(){
                new ConclusionView();
            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);