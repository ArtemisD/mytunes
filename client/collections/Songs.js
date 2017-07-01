// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

/*  url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
  parse: function(response){
  	var context = this
  	response.results.forEach(x=>{
  		var y = new SongModel({artist:x.artist, title:x.title, url:x.url});
  		//console.log(y)
  		context.add(x)
  	})
  	context.trigger('update');
  	console.log(this);
  }*/
 // startIndex: 0,
 // numItems: 10

/* initialize: function () {
   this.fetch({
     success: function(data) {
       this.set(data.results);
     }
   }, this);
 }*/
initialize: function () {
  var context = this;
     $.ajax({
        url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
        type: "GET",
        contentType: 'application/json',
        success: function(data) {
          data.results.forEach(function(result) {
            context.add(result);
          })
          context.trigger('update');
        }
      });
  },

});
