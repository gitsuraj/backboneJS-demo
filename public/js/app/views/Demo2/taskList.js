define(["jquery", "backbone", "collections/taskCollection", "views/Demo2/taskListItem", "text!templates/Demo2/listContainer.html"],

    function($, Backbone, TaskCollection, ListItemView, ListContainerTpl){

        var CollectionView = Backbone.View.extend({
            // el: ".right_container",
            // tagName : 'div',
            initialize: function() {
                var me = this;
                //compile the template to handlebar-template (js)
                // me.template = Handlebars.compile(ListContainerTpl);
                me.loadData();
            },
            events: {

            },
            collection : null,
            showData : function(){

            },
            loadData : function(){
                var me = this;
                var taskColl = new TaskCollection();

                taskColl.fetch({
                    success:function(collection){
                        me.collection = collection;
                        me.render();
                    }
                });
            },
            render: function() {
                var me = this;
                //process the template & render the template
                // me.$el.html(me.template());
                _.each(me.collection.models,function(task,index){
                    var listItem = new ListItemView({model: task});
                    amplify.store("task-"+task.get('id'),task.toJSON());
                    me.$el.append(listItem.el);
                });
                return me.el;
            }
            
        });
        return CollectionView;

    }

);