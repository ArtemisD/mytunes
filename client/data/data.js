// data.js - Defines an array of data regarding song files and their accompanying details.
var songData = [
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
    title: 'One In A Million',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
    title: 'Age Ain\'t Nothing But A Number',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3',
    title: 'Hot Like Fire',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3',
    title: 'If Your Girl Only Knew',
    artist: 'Aaliyah',
  }
];

/*$(document).ready(function(){
   $.ajax({
      url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
      type: "GET",
  //    data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(data){
        songData = data;
        console.log(songData);
      },
      error: function(data) { console.error('Songs error:', data)}
    });
})
*/
//http://parse.CAMPUS.hackreactor.com/mytunes/classes/songs
// make a get request to parse.
// populate the data
