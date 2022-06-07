import {
  getUserTopArtists,
  getUserTopTracks,
  searchArtists,
} from '../../services/api'
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPES,
} from '../../constants'
import { ArtistsSection, TracksSection } from '../../components'
import { useMainPage } from './mainPage.hooks'

const MainPage = () => {
  const {
    searchKey,
    setSearchKey,
    artists,
    setArtists,
    tracks,
    setTracks,
    token,
    logout,
  } = useMainPage()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join(
              '%20'
            )}`}
          >
            Login to Spotify
          </a>
        ) : (
          <>
            <form
              onSubmit={async () =>
                setArtists(await searchArtists(token, searchKey))
              }
            >
              <input
                type="text"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <button type={'submit'}>Search</button>
            </form>
            <button
              onClick={async () => setArtists(await getUserTopArtists(token))}
            >
              getTopArtists
            </button>
            <button
              onClick={async () => setTracks(await getUserTopTracks(token))}
            >
              getTopTracks
            </button>
            <button onClick={logout}>Logout</button>
          </>
        )}
        <ArtistsSection artists={artists} />
        <TracksSection tracks={tracks} />
      </header>
    </div>
  )
}

export { MainPage }
