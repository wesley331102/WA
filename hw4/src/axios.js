import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:5000' })

const getUrl = async (type) => {
  try {
    const {
        data: {
           url
        }
    } = await instance.get('/get_url', { params: { 'type': type } })
    return url
  } catch (err) {
    return(err.message)
  }
}

export { getUrl }
