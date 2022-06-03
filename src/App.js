import React, { useEffect, useState } from 'react'
import './App.css'
import {
  getUserTopArtists,
  getUserTopTracks,
  searchArtists,
} from './services/api'

function App() {
  const [searchKey, setSearchKey] = useState('')
  const [artists, setArtists] = useState([])
  const [token, setToken] = useState('')

  const CLIENT_ID = '325a9c1d578b4da3b5b0af1c15325ba2'
  const REDIRECT_URI = 'http://localhost:3000/callback'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'
  const SCOPES = [
    'user-top-read',
    'user-read-currently-playing',
    'user-read-playback-state',
  ]

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1]

      window.location.hash = ''
      window.localStorage.setItem('token', token)
    }

    setToken(token)
  }, [])

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  const renderArtists = () => {
    if (!artists || !artists.length) return

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
            <button onClick={async () => await getUserTopArtists(token)}>
              getTopArtists
            </button>
            <button onClick={async () => await getUserTopTracks(token)}>
              getTopTracks
            </button>
            <button onClick={logout}>Logout</button>
          </>
        )}
        {renderArtists()}
      </header>
    </div>
  )
}

export default App
