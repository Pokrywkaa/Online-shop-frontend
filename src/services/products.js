import axios from 'axios'
import { useParams } from 'react-router-dom'
const baseUrl = 'http://127.0.0.1:8000'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getByCategory = (category) => {
    const request = axios.get(`${baseUrl}/${category}`)
    return request.then(response => response.data)
}


const exportedObject = { getAll, getByCategory}

export default exportedObject