define(["jquery", "backbone", "models/Model", "text!templates/demo1_servicelist.html"],

    function($, Backbone, Model, template){

        var View = Backbone.View.extend({
            initialize: function(data) {
                this.data = data;
            },
            events: {

            },
            render: function() {
                var tpl = Handlebars.compile(template);
                var html    = tpl( this.model.toJSON());
                return this;
            }

        });
        return View;

    }

);