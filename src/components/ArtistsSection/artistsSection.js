import {
  Artist,
  ArtistImage,
  ArtistName,
  Wrapper,
} from './artistsSection.styles'

const ArtistsSection = ({ artists }) => {
  if (!artists.length) return

  return (
    <Wrapper>
      {artists.map((artist) => (
        <Artist key={artist.id}>
          {artist.images.length ? (
            <ArtistImage
              src={artist.images[0].url}
              alt={`${artist.name}-logo`}
            />
          ) : (
            <div>No Image</div>
          )}
          <ArtistName>{artist.name}</ArtistName>
        </Artist>
      ))}
    </Wrapper>
  )
}

export { ArtistsSection }
