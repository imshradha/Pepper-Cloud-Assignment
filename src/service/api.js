import axios from 'axios';
const URL = 'http://localhost:8000';

export const createForm = async (data) => {
    try{
        return await axios.post(`${URL}/create`, data);

    }catch(error){
        console.log("Error while calling craete form api",error)
    }
}

export const getForms = async () => {
    try{
        return await axios.get(`${URL}/all`);
    }catch(error){
        console.log("Error while calling get forms api", error)
    }
}

export const viewForm = async (id) => {
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log("Error while calling view form api", error)
    }
}

export const editForm = async (form,id) => {
    try{
        return await axios.put(`${URL}/${id}`,form)
    }catch(error){
        console.log("Error while calling edit form api", error)
    }
}

export const deleteForm = async (id) => {
    try{
        return await axios.delete(`${URL}/${id}`)
    }catch(error){
        console.log("Error while calling delete form api", error)
    }
}