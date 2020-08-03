import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/cats',
})
// new cat
export const insertCat = payload => api.post(`/add`, payload)
// all cats
export const getAllCats = () => api.get(`/`)
// change cat
export const updateCatById = (id, payload) => api.put(`/update/${id}`, payload)
// get cat
export const getCatById = id => api.get(`/${id}`)

const apis = {
    insertCat,
    getAllCats,
    updateCatById,
    getCatById,
}

export default apis
