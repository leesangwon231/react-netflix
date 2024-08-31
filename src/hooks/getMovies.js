import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import api from "../utils/api";


const getMovies = (param) => {
    let keyword = param.queryKey[1];
    return api.get(`/movie/${keyword}`);
}

export  const  useGetMovies = (keyword) => {
    return useQuery({
        queryKey : ['popular-Movies',keyword],
        queryFn : getMovies,
        select : (data)=>{
            return data.data.results;
        }

    })
}