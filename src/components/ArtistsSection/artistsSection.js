import { ArtistImage, ArtistName, Wrapper } from './artistsSection.styles'

const ArtistsSection = ({ artists }) => {
  if (!artists.length) return

  return artists.map((artist) => (
    <Wrapper key={artist.id}>
      <ArtistName>{artist.name}</ArtistName>
      {artist.images.length ? (
        <ArtistImage src={artist.images[0].url} alt={`${artist.name}-logo`} />
      ) : (
        <div>No Image</div>
      )}
    </Wrapper>
  ))
}

export { ArtistsSection }
