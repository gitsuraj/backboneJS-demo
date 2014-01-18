define(["jquery", "backbone","views/Demo2/detailView","views/Demo2/taskList", "text!templates/Demo2/container.html"],

    function($, Backbone, DetailView, ListView, ContainerTpl){

        var View = Backbone.View.extend({
            el: ".container",
            initialize: function() {
                var me = this;

                me.template = Handlebars.compile(ContainerTpl);

                me.render();
                //me.on('afterRender', me.afterRender);

            },
            events: {
                'click .add-new' : 'add_new_task_click'
            },
            render: function() {
                var me = this;
                me.$el.html(me.template());
                
                var listView = new ListView();
                var taskDetail = new DetailView();
                me.$el.find('.left-container tbody').html(listView.el);
                me.$el.find(".right-container").html(taskDetail.el);

            },
            add_new_task_click: function(events){
                var me = this;
                var taskDetail = new DetailView({"isNewEntry":true});
                me.$el.find(".right-container").html(taskDetail.el);
                events.preventDefault();
            }
        });
        return View;

    }

);