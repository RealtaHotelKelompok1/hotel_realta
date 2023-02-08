import axios from "axios";

// const token:any = localStorage.getItem('token')
export default axios.create({
    baseURL: "http://localhost:3020",
    headers:{
        "Content-type" : "application/json",
        // 'Authorization' : token,
    },

});