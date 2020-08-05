import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
})
// new cat
export const insertCat = payload => api.post(`/items`, payload)
// all cats
export const getAllCats = () => api.get(`/items`)
  
// change cat
export const updateCatById = (id, payload) => api.put(`/items/${id}`, payload)
// get cat
export const getCatById = id => api.get(`/items/${id}`)

const apis = {
    insertCat,
    getAllCats,
    updateCatById,
    getCatById,
}

export default apis
