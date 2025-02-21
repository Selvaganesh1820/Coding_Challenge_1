import axios from "axios";
const BASE_URI="https://fakestoreapi.com/products"
class ProductService{
    getAllProducts(){
        return axios.get(BASE_URI)

    }
    saveProduct(productobj){
        return axios.post(BASE_URI, productobj)
    }
    getProductById(id){
        return axios.get(BASE_URI+"/"+id)
    }
    updateProductById(productId,productobj){
        return axios.put(BASE_URI+"/"+productId,productobj)
    }
    deleteProductById(productId){
        return axios.delete(BASE_URI+"/"+productId)
    }
    loginAPI(loginobj){
        return axios.post("https://fakestoreapi.com/auth/login"+loginobj)
    }
}
export default new ProductService();