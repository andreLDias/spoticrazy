const TracksSection = ({ tracks }) => {
  if (!tracks || !tracks.length) return

  return tracks.map((track) => (
    <div key={track.id}>
      {track.album.images.length ? (
        <img width={'100%'} src={track.album.images[0].url} alt="" />
      ) : (
        <div>No Image</div>
      )}
      {track.name}
    </div>
  ))
}

export { TracksSection }
