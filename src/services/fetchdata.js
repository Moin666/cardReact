import axios from "axios"

async function  getData(){  
           const{data:newData} =  await axios.get("https://jsonplaceholder.typicode.com/posts")
           return newData
           }
export default getData