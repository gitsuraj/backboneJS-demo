define(["jquery", "backbone","views/Demo2/detailView", "text!templates/Demo2/taskListItem.html"],

    function($, Backbone, TaskDetailView, ListItemTpl){

        var listView = Backbone.View.extend({
            className:'item',
            initialize: function(options) {
                var me = this;
                me.model = options.model;
                //compile the template to handlebar-template (js)
                me.template = Handlebars.compile(ListItemTpl);
                
                me.render();

            },
            events: {
                'click .task-item' : 'task_item_click'
            },
            render: function() {
                var me = this;
                //process the template & render the template
                me.$el.html(me.template(me.model.toJSON()));

                return me.el;
            },
            task_item_click : function(e){
                var me = this;
                var taskDetailView = new TaskDetailView({model:me.model});
                me.$el.parents('.ui.two').find('.right-container').html(taskDetailView.el);
                e.preventDefault();
            }

        });

        return listView;

    }

);