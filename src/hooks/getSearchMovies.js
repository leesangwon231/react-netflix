import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";


    const getSearchMovies = (param) => {
        return param.queryKey[1].keyword === ""
             ? api.get(`/movie/popular?page=${param.queryKey[1].page}`)
             : api.get(`/search/movie?query=${param.queryKey[1].keyword}&page=${param.queryKey[1].page}`)
    }


export const useSearchMovies = (keyword,page) => {
    return useQuery({
        queryKey : ['search-movies',{keyword,page}],
        queryFn :getSearchMovies,
        select : (data) => {
            return data.data
        }
    })
}