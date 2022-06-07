const ArtistsSection = ({ artists }) => {
  if (!artists.length) return

  return artists.map((artist) => (
    <div key={artist.id}>
      {artist.images.length ? (
        <img width={'100%'} src={artist.images[0].url} alt="" />
      ) : (
        <div>No Image</div>
      )}
      {artist.name}
    </div>
  ))
}

export { ArtistsSection }
