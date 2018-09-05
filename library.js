class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlistName) {
    let newPlaylist = new Playlist(playlistName);
    this.playlists.push(newPlaylist);
    return newPlaylist;
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(title, rating, duration) {
    let newTrack = new Track(title, rating, duration);
    this.tracks.push(newTrack);
  }

  get overallRating() {
    let sum = 0;
    this.tracks.forEach(track => {
      sum += track.rating;
    });
    let average = sum / tracks.length;
    return average;
  }

  get totalDuration() {
    let sum = 0;
    this.tracks.forEach(track => {
      sum += track.duration;
    });
    return sum;
  }
}

class Track {
  constructor(title, rating, duration) {
    this.title = title;         // string
    this.rating = rating;       // int 1-5
    this.duration =  duration;  // int in seconds
  }
}

var jothamsLibrary = new Library("Jotham's Music Library","Jotham");
var jothamsCoolPlaylist = jothamsLibrary.addPlaylist("Jotham's Awesome Funky Playlist");
jothamsCoolPlaylist.addTrack("Cool Song Bro", 5, 198);
jothamsCoolPlaylist.addTrack("Cooler Song", 4, 135);
jothamsCoolPlaylist.addTrack("One Song", 2, 18);
jothamsCoolPlaylist.addTrack("Still Dre", 5, 402);
jothamsCoolPlaylist.addTrack("Still Dre, But Twice", 3, 98);
jothamsCoolPlaylist.addTrack("Pingu In Da Club", 5, 127);
jothamsCoolPlaylist.addTrack("One More Night", 5, 188);
jothamsCoolPlaylist.addTrack("Call Me Maybe", 1, 244);
var jothamsOtherPlaylist = jothamsLibrary.addPlaylist("Jotham's Second, Less Funky Playlist");
jothamsOtherPlaylist.addTrack("Worst Song Ever", 1, 8);
jothamsOtherPlaylist.addTrack("Coolest Song Ever", 3, 108);
jothamsOtherPlaylist.addTrack("Africa", 5, 199);
jothamsOtherPlaylist.addTrack("Not Dre Anymore", 4, 258);

console.log("jothamsLibrary", jothamsLibrary);
console.log("jothamsCoolPlaylist", jothamsCoolPlaylist);
console.log("jothamsOtherPlaylist", jothamsOtherPlaylist);
console.log("jothamsOtherPlaylist total duration", jothamsOtherPlaylist.totalDuration);
console.log("jothamsOtherPlaylist over all", jothamsOtherPlaylist.overallRating);
