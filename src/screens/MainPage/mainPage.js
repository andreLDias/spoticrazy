import { getUserTopArtists, getUserTopTracks } from '../../services/api'
import { AUTH_PATH } from '../../constants'
import { ArtistsSection, TracksSection } from '../../components'
import {
  Anchor,
  Button,
  ButtonWrapper,
  Title,
  Wrapper,
} from './MainPage.styles'
import { useMainPage } from './MainPage.hooks'

const MainPage = () => {
  // todo stop using sets directly, create handlers
  const { artists, setArtists, tracks, setTracks, token, logout } =
    useMainPage()

  return (
    <Wrapper className="App">
      <header className="App-header">
        <Title>Spotify React</Title>
        {!token ? (
          <Anchor href={AUTH_PATH}>Login to Spotify</Anchor>
        ) : (
          <ButtonWrapper>
            <Button
              onClick={async () => setArtists(await getUserTopArtists(token))}
            >
              getTopArtists
            </Button>
            <Button
              onClick={async () => setTracks(await getUserTopTracks(token))}
            >
              getTopTracks
            </Button>
            <Button
              onClick={() => {
                setArtists([])
                setTracks([])
              }}
            >
              Clear
            </Button>
            <Button onClick={logout}>Logout</Button>
          </ButtonWrapper>
        )}
        <ArtistsSection artists={artists} />
        <TracksSection tracks={tracks} />
      </header>
    </Wrapper>
  )
}

export { MainPage }
