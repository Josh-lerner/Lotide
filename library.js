const library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       }
};

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {

       // loop over the object 
       for (let key in library.playlists) {
              console.log(library.playlists[key].id + ': ' + library.playlists[key].name + " -" + library.playlists[key].tracks.length + " tracks")
       }
       // find playlists
       // print the id, print the string in name and how many indexes in it's array

}
// printPlaylists()

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
       for (let key in library.tracks) {
              console.log(library.tracks[key].id + ": " + library.tracks[key].name + " by " + library.tracks[key].artist + " (" + library.tracks[key].album + ")"
              )
       }
}
// loop over the object for in 
// find tracks
// print each object for tracks into a string


 //  printTracks()

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
       const playlist = library.playlists[playlistId];
       console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");
       const trackIds = playlist.tracks;
       const allTracks = library.tracks;
       // console.log(allTracks)
       trackIds.forEach(trackId => {
              // console.log(allTracks[trackId])
              const track = allTracks[trackId]; // all the info
console.log(trackId + ": " + track.name + " by " + track.artist + " (" + track.album + ")")

       });
       //for (let key in library) {
       // const arr = library.playlists[key].tracks;

       // refactor string literal

}
  printPlaylist("p01")

// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
    const playlistTracks = library.playlists[playlistId].tracks;
    const trackToMove = library.tracks[trackId]
//       console.log(playlistTracks);
//       console.log(trackToMove);
//             console.log(trackId);
  playlistTracks.push(trackId);

// console.log(playlistTracks)

}
// addTrackToPlaylist ("t03", "p01")
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function (name, artist, album) {
library.tracks = {t04: {id: "t04", name, artist, album}}
 return library.tracks
}



console.log(addTrack("Power", "Kanye West", "My Beautiful Dark Twisted Fantasy"))
// adds a playlist to the library
const addPlaylist = function (name) {
library.playList = {p03: {id: "p03", name: name, tracks: ["t01", "t04"]}}
       return library.playList
}

 console.log(addPlaylist("My New Playlist"))

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

}
