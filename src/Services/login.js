import axios from "axios"

const URL = 'https://ecommerce-exercise-backend.herokuapp.com/'

export const loginUser = async(data) => { 
    const req = axios.post(`${URL}/login/`, data)
    return req.data
}