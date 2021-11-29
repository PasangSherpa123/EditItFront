import axios from "axios"
import URL from "./url.js"
// console.log(URL)
const axiosURL=axios.create({
    baseURL:URL
})

export default axiosURL