define(["jquery", "backbone", "models/taskModel", "views/Demo2/taskListItem", "text!templates/Demo2/detail.html"],

    function($, Backbone, Model, TaskListItemView, template){

        var DetailView = Backbone.View.extend({
            className:'task-detail',
            initialize: function(opt) {
                var me = this;
                me.isNewEntry = _.isUndefined(opt)?false:opt.isNewEntry;
                me.render();

            },
            events: {
                'click .save-task' : 'save_task_info',
                'click .cancle-task' : 'clear_task_info'
            },
            bindings :{
                ".txtId" :{
                    observe: "id"
                },
                ".txtTitle" : {
                    observe:"title"
                },
                ".txtDate" : {
                    observe:"date"
                },
                ".textDesc" : {
                    observe:"Description"
                }
            },
            render: function() {
                var me = this;
                if(_.isUndefined(me.model)){
                    me.model = new Model();
                }
                var tpl = Handlebars.compile(template);
                me.html    = tpl(me.model.toJSON());
                me.$el.html(me.html);
                me.$el.find('.ui.checkbox').checkbox();
                me.stickit();
                return me;

            },
            clear_task_info : function(e){
                this.model.set(new Model().toJSON());
            },
            save_task_info : function(e){
                var me = this;
                if(_.isEmpty(me.model.get('id').toString())){
                    alert("You can't Insert Empty Id");
                    return;
                }
                if(me.isNewEntry){
                     if(!_.isUndefined(amplify.store("task-"+me.model.get('id')))){
                        alert("Record Already Exist in Storage");
                        return;
                     }
                }
                amplify.store("task-"+me.model.get('id'),me.model.toJSON());
                var taskItem = new TaskListItemView({model:me.model});
                me.$el.parents('.ui.two').find('.left-container tbody').append(taskItem.el);
                
                e.preventDefault();
            }

        });
        return DetailView;

    }

);