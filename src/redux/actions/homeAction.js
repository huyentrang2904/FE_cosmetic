import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";
import { HomePage1 } from "../variables";
import { toast } from "react-toastify";
export const getDataHomepage1 =() => async(dispatch) => {
    try {

        const {data} = await axios.get(`${API_BASE_URL}/home/`); 
        console.log(data)
        dispatch({type: HomePage1.SET_FILTER_PRODUCT_HOMEPAGE1, payload: data})
        toast.success("Tai du lieu thanh coong")
        
    } catch (error) {
        dispatch({type: HomePage1.SET_FILTER_PRODUCT_HOMEPAGE1, error: error})
        toast.error("ko thanh cong")
        
    }
    
};