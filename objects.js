var playlist = {}
function updatePlaylist(playlist, artist, song){
    playlist[artist] = 'you'
    return playlist
};

function removeFromPlaylist(playlist, artist){
  delete playlist.you
  return playlist
};
