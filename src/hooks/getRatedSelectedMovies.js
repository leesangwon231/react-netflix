import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";


const getLatedSelectMovies = (param) => {
    return api.get(`/movie/${param.queryKey[1].id}/recommendations?language=en-US&page=1`)
}

export  const useReLatedSelectedMovies =(id) => {
    return useQuery({
        queryKey : ['related-select-movies',{id}],
        queryFn : getLatedSelectMovies,
        select : (data) => {
            return data.data.results;
        }
    })
}