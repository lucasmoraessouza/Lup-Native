import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.lup.lionsoft.com.br/',
    // headers: {
    //     Authorization: localStorage.getItem("token")
    //         ? "Bearer " + localStorage.getItem("token")
    //         : "",
    // },
});


// api.interceptors.response.use((response) => {
//   if (response.message) {
//     throw response;
//   } else {
//     return response;
//   }
// });
