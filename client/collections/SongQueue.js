// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
    //  console.log(this.models);
      if (this.models.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
    //  console.log(this);
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      this.remove(song);

    });
  },

  playFirst : function(){
    this.at(0).play();
  }

});
