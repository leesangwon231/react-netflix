import {useQuery} from "@tanstack/react-query";
import {get} from "axios";
import api from "../utils/api";

const getGenres = () => {
    return api('/genre/movie/list?language=ko');
}



export const useMoviesGenres = () => {
    return useQuery({
        queryKey : ['movie-genre'],
        queryFn : getGenres,
        select : data => data.data.genres,
        staleTime : 300000
    })
}