import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import api from "../utils/api";


const getPopularMovies = () => {

    return api.get('/movie/popular');
}

export  const usePopularMovies = () => {
    return useQuery({
        queryKey : ['test'],
        queryFn : getPopularMovies,
        select : (data)=>{
            return data.data.results;
        }

    })
}