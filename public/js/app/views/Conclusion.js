define(["jquery", "backbone", "models/Model", "text!templates/Conclusion.html"],

    function($, Backbone, Model, template){

        var View = Backbone.View.extend({
            el: ".container",
            initialize: function() {
                this.render();

            },
            events: {

            },
            render: function() {
                this.template = _.template(template, {});
                this.$el.html(this.template);
                return this;

            }

        });
        return View;

    }

);