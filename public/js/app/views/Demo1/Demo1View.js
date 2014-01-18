define(["jquery", "backbone", "views/Demo1/serviceListItem","models/serviceModel", "collections/serviceCollection","views/Demo1/serviceList", "text!templates/Demo1.html"],

    function($, Backbone, ServiceView,serviceModel, serviceCollection,ServiceListView, template){

        var View = Backbone.View.extend({
            el: ".container",
            initialize: function() {
                var me = this;
                me.on('afterRender', me.afterRender);
                me.render();

            },
            events: {
            },
            render: function() {
                var me = this;
                me.template = _.template(template, {});
                me.$el.html(me.template);
                me.trigger('afterRender', me);
                return me;

            },
            listRender: function(){
                var me = this;
                var total = 0;
                _.each(me.services.getChecked(), function(elem){
                    total += elem.get('price');
                });
                me.$el.find('#total a').html(total);
                return me;
            },
            saveServices : function(e){
                e.preventDefault();
                var displayList = new ServiceListView({model:this.services}).render();
                this.$el.find('#showContent').html(displayList.el);
                //amplify.store("services",this.services);
                //alert("Storage Successful");
            },
            afterRender: function(view){
                view.services = new serviceCollection([
                    new serviceModel({ title: 'web development', price: 200}),
                    new serviceModel({ title: 'web design', price: 250}),
                    new serviceModel({ title: 'photography', price: 100}),
                    new serviceModel({ title: 'coffee drinking', price: 10})
                    // Add more here
                ]);
                view.listenTo(view.services, 'change', view.listRender);

                view.services.each(function(service){
                    var listView = new ServiceView({ model: service });
                    view.$el.find('#services').append(listView.render().el);

                }, view);
                prettyPrint(); 
            }

        });
        return View;

    }

);