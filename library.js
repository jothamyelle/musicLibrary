var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
   // FUNCTIONS TO IMPLEMENT:
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists : function () {
    for (list in this.playlists) {
        console.log(this.playlists[list].id + ": " + this.playlists[list].name + " - " + this.playlists[list].tracks.length + " tracks");
    }
  },
  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks : function () {
    for (list in this.tracks) {
        console.log(this.tracks[list].id + ": " + this.tracks[list].name + " by " + this.tracks[list].artist + " (" + this.tracks[list].album + ")");
    }
  },
  // adds an existing track to an existing playlist
  addTrackToPlaylist : function (trackId, playlistId) {
      if(this.tracks.hasOwnProperty(trackId)) {
          this.playlists[playlistId].tracks.push(trackId);
      }
},
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
printPlaylist : function (playlistId) {
    if(this.playlists.hasOwnProperty(playlistId)) {
        console.log(this.playlists[playlistId].id + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");
        var tracksInPlaylist = [];
        for (track in this.playlists[playlistId].tracks) {
            tracksInPlaylist.push(this.playlists[playlistId].tracks[track]);
        }
        for (track in tracksInPlaylist) {
            console.log(this.tracks[tracksInPlaylist[track]].id + ": " + this.tracks[tracksInPlaylist[track]].name + " by " + this.tracks[tracksInPlaylist[track]].artist + " (" + this.tracks[tracksInPlaylist[track]].album + ")");
        }
    }
},
// adds a track to the this
addTrack : function (name, artist, album) {
  var newTrack = {
      id: uid(),
      name: name,
      artist: artist,
      album: album
  };
  this.tracks[newTrack.id] = newTrack;
  console.log(this.tracks);
},
// adds a playlist to the this
addPlaylist : function (name) {
  var newPlaylist = {
      id: uid(),
      name: name,
      tracks: []
  };
  this.playlists[newPlaylist.id] = newPlaylist;
},
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
printSearchResults : function(query) {
  query = query.toLowerCase();
  for (list in this.tracks) {
      if (this.tracks[list].name.toLowerCase().search(query) >= 0 || this.tracks[list].artist.toLowerCase().search(query) >= 0 || this.tracks[list].album.toLowerCase().search(query) >= 0) {
         console.log(this.tracks[list].id + ": " + this.tracks[list].name + " by " + this.tracks[list].artist + " (" + this.tracks[list].album + ")");
      }
  }
}
}
// generates a unique id
// (use this for addTrack and addPlaylist)
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t03','p01');
library.addTrack("Kanwal's Best Song", "Kanwal Gupta", "Kanwal's Love: Franklin");
library.addPlaylist("Our Brand New Playlist");
library.printSearchResults("james");
