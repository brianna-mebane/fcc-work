const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  const tracks = [];

  for (const playlist of playlists) {
    for (const track of playlist) {
      const playlistIndex = playlists.indexOf(playlist);
      const trackIndex = playlist.indexOf(track);

      track.source = [playlistIndex, trackIndex];
      tracks.push(track);
    }
  }

  return tracks;
}

function scoreTracks(tracks) {
  for (const track of tracks) {
    track.score = track.votes * 10 - Math.abs(track.bpm - 120);
  }

  return tracks;
}
