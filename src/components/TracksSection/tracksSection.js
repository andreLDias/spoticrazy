import { AlbumImage, TrackName, Wrapper } from './tracksSection.styles'

const TracksSection = ({ tracks }) => {
  if (!tracks || !tracks.length) return

  return tracks.map((track) => (
    <Wrapper key={track.id}>
      <TrackName>{track.name}</TrackName>
      {track.album.images.length ? (
        <AlbumImage src={track.album.images[0].url} alt="" />
      ) : (
        <div>No Image</div>
      )}
    </Wrapper>
  ))
}

export { TracksSection }
