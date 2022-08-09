import axios from "axios";
const apiUrl = "https://localhost:3000/api/tasks";

/********
 * CRUD *
 ********/

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) { 
    return axios.post(apiUrl, task); 
}

export function updateTask(id,task) {
    return axios.put(apiUrl + "/" + id, task); 
}   

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id); 
}   