import axios from "axios";

export const getServices = async() => {
    const {data} = await axios(`http://localhost:3000/services/api/get-all`)
    return data;
  };

  export const getServicesDetails = async(id)=>{
    const {data} = await axios(`http://localhost:3000/services/api/${id}`)
    return data;
  }