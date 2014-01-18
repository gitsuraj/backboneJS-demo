define(["jquery", "backbone"],

    function($, Backbone) {
        var ListModel = Backbone.Model.extend({
            initialize: function() {

            },
            defaults: {
                "id":"",
                "title":"",
                "date":"",
                "status":"",
                "Description":""
            },
            validate: function(attrs) {
                if(attrs.id !== null) {
                    console.log("you must pass id attribute");
                }
            },
            idAttribute:'id'

        });
        return ListModel;
    }
);
