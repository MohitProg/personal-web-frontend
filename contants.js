import axios from "axios";


const ApiClient=axios.create({
    baseURL:`https://personalwebbackend-4cb2.onrender.com/api/v1`,
    headers:{
        "Content-Type":"application/json"
    }
})

ApiClient.interceptors.request.use(
    (config) => {
      try {
        // Attempt to retrieve the token
        const token = localStorage.getItem('token');
        
        // If a token exists, add it to the headers
        if (token) {
          config.headers['auth-token'] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Error retrieving token:", error);
        // Optionally handle token retrieval error (e.g., redirect to login)
      }
  
      return config;
    },
    (error) => {
      // Handle the request error
      return Promise.reject(error);
    }
  );
  
  export default ApiClient;



  