import axios from "axios";
const BASE_URL = "https://fakestoreapi.com/users"
class UserService {
    getAllUsers(){
        return axios.get(BASE_URL)
    }
    saveUser(userObj){
        return axios.post(BASE_URL,userObj)
    }
    tosort(){
        return axios.get(BASE_URL+"?sort=desc")
    }
    todelete(id){
        return axios.delete(BASE_URL+"/"+id)
    }
}

export default new UserService();