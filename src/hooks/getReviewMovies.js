import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";


    const getReviewMovies = (param) => {
        return api.get(`/movie/${param.queryKey[1]}/reviews?language=en`)
    }


export const useReviewhMovies = (movieId) => {
    return useQuery({
        queryKey : ['search-movies',movieId],
        queryFn :getReviewMovies,
        select : (data) => {
            return data.data.results
        }
    })
}