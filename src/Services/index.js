import axios from "axios"

const URL = 'https://ecommerce-exercise-backend.herokuapp.com'


const getConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

export const loginUser = async(data) => { 
    const req = await axios.post(`${URL}/login/`, data)
    return req.data
}

export const getProducts = async () => {
    const req = await axios.get(`${URL}/products/`, getConfig())
    return req.data
}

export const getProductById = async (id) => {
    const req = await axios.get(`${URL}/products/${id}`)
}