import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:5000' })

const getUrl = async (type) => {
  try {
    const {
        data: { url }
    } = await instance.get('/get_url', { params: { 'type': type } })
    return url
  } catch (err) {
    return(err)
  }
}

const guess = async (number) => {
    try {
      const {
        data
      } = await instance.post('/guess', { data: { number } })
      return data
    } catch (err) {
      return(err)
    }
  }

export { getUrl, guess }
