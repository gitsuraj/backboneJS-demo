
define(["jquery","backbone","models/taskModel"],

  function($, Backbone, TaskModel) {
    var TaskCollection = Backbone.Collection.extend({

      model: TaskModel,
      url : 'js/json/tasklist.json'

    });
    return TaskCollection;

  }
);