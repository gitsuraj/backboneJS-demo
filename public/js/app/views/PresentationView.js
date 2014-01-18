// View.js
// -------
define(["jquery", "backbone", "models/Model","collections/Collection", "text!templates/Presentation.html"],

    function($, Backbone, Model, Collection, template){

        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".container",
            no : 0,
            current:0,

            // View constructor
            initialize: function() {
                var me = this;
                me.on('afterRender', me.afterRender);
                me.template = _.template(template, {});
                me.collection = new Collection();
                 $(document).bind('keydown', $.proxy(me.keyPress,me));
               // _.bindAll(this, "render","keyPress","move");
                me.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {
                var me = this;
                // Setting the view's template property using the Underscore template method
                me.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                me.$el.html(me.template);
                me.trigger('afterRender', me);
                // Maintains chainability
                return me;

            },
            renderPresentation : function(slide,forward){
                var me = this;
                me.$el.empty();
                me.$el.fadeOut(250,function(){
                    me.$el.append(slide.get('elements'));
                });
                me.$el.fadeIn(500);
            },
            keyPress : function(e){
                var me = this;
                  switch (e.keyCode) {
                    case 32: // space
                    case 39: // arrow-right
                      me.move(+1);
                      break;
                    case  8: // delete
                    case 37: // arrow-left
                      me.move(-1);
                      break;
                    default:
                      break;
                  }
            },
            move : function(direction){
                var me = this;
                if (me.lock) return;
                  me.lock = true;
                  me.model = me.collection.at(me.current+direction);
                  if (this.model) {
                    me.current +=direction;
                    me.renderPresentation(me.model,direction);
                  }
                  me.lock = false;
            },
            afterRender : function(view){
                  _(view.$el.find('section')).each(function(section){
                    var slide = new Model({
                      elements:$(section).children(),
                      no:view.no
                    });
                    prettyPrint();
                    if(Number(view.no) === 0){
                       view.renderPresentation(slide);
                    }
                    view.collection.add(slide);
                    view.no++;
                  });
            }

        });
        // Returns the View class
        return View;

    }

);