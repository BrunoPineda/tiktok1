import axios from 'axios'

const instance = axios.create({
    baseURL:"https://tiktok-clone-mern123.herokuapp.com"
})

export default instance;