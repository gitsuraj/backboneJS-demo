
define(["jquery","backbone","models/taskModel"],

  function($, Backbone, TaskModel) {
    var TaskCollection = Backbone.Collection.extend({

      model: TaskModel,
      url : 'http://localhost:8001/js/json/tasklist.json'

    });
    return TaskCollection;

  }
);