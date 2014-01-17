define(["jquery","backbone","models/serviceModel"],

  function($, Backbone, Service) {
	var ServiceList = Backbone.Collection.extend({

		model: Service,
		getChecked: function(){
			return this.where({checked:true});
		}
	});
    return ServiceList;


  });