import axios from 'axios'
import { ROOT_URL } from '../constants'
import { history } from '../navigation/history'

const api = axios.create({
  baseURL: ROOT_URL.spotifyAPI,
})

api.interceptors.request.use(
  async (config) => config,
  (error) => {
    if (error.response.status === 401) {
      history.push('/')
    } else {
      return Promise.reject(error)
    }
  }
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      history.push('/')
    }
    return Promise.reject(error)
  }
)

// todo add jsdoc
export const searchArtists = async (token, searchKey) => {
  try {
    const response = await api.get('search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: 'artist',
      },
    })

    return response.data.artists.items
  } catch (err) {
    history.push('/')
    throw err
  }
}

// todo add jsdoc
export const getUserTopArtists = async (token) => {
  try {
    const response = await api.get('me/top/artists', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 10,
      },
    })

    return response.data
  } catch (err) {
    history.push('/')
    throw err
  }
}

// todo add jsdoc
export const getUserTopTracks = async (token) => {
  try {
    const response = await api.get('me/top/tracks', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 10,
      },
    })

    return response.data
  } catch (err) {
    history.push('/')
    throw err
  }
}
