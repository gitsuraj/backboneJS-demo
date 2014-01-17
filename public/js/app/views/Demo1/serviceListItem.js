define(["jquery", "backbone", "text!templates/Demo1.html"],

    function($, Backbone, template){

        var ServiceVIew = Backbone.View.extend({
            initialize: function() {
                this.listenTo(this.model, 'change', this.render);
            },
            events: {
                'click': 'toggleService'
            },
            render: function() {
                var me = this;

                me.$el.html(' <div class="checkbox"><label><input type="checkbox" value="1" name="' + this.model.get('title') + '" /> ' + this.model.get('title') + 'Nrs.' + this.model.get('price') + '</label></div>');
                me.$el.find('input').prop('checked', this.model.get('checked'));
                return me;
            },
            toggleService: function(){
                this.model.toggle();
            }

        });
        return ServiceVIew;

    }

);