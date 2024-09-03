import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";


    const getSearchMovies = (param) => {
        return api(`/search/movie?query=${param.queryKey[1]}`)
    }


export const useSearchMovies = (keyword) => {
    return useQuery({
        queryKey : ['search-movies',keyword],
        queryFn :getSearchMovies,
        select : (data) => {
            return data.data.results
        }
    })
}