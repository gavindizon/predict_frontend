import axios from "axios";

// NODE APP PORT

export const axiosInstance = axios.create({
    baseURL: "http://model-predictor-kmeans.herokuapp.com",
    headers: { "Access-Control-Allow-Origin": "*" },
});
