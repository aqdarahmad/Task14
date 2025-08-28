import axios from "axios";


export async function fetchProducts() {
    try{
        const response = await axios.get("http://localhost:3000/products");
    return response.data;
    }
    catch(error){
        console.log("error")
         return [];
    }
   
}