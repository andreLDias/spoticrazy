export const ROOT_URL = {
  spotifyAPI: 'https://api.spotify.com/v1/',
}

export const CLIENT_ID = '325a9c1d578b4da3b5b0af1c15325ba2'
export const REDIRECT_URI = 'http://localhost:3000/callback'
export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
export const RESPONSE_TYPE = 'token'
export const SCOPES = [
  'user-top-read',
  'user-read-currently-playing',
  'user-read-playback-state',
]

export const AUTH_PATH = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join(
  '%20'
)}`
