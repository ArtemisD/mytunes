MyModel = Backbone.Model.extend({
    urlRoot: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs'
});

Follower = Backbone.Model.extend();


Followers = Backbone.Collection.extend({
   model: Follower
});



this.model = new MyModel();

var that = this;

this.model.fetch({
    success: function(model, response){
        Follwersthat.collection = new Followers(model.get('artists') )
    }
})
console.log(this.model)