import axios from "axios";

export default axios.create({
  baseURL: "https://api.admin.nextcart.com/nextcart_Web_V1/public/api/admin/v1/"
});
