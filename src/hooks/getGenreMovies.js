import {useQuery} from "@tanstack/react-query";
import api from "../utils/api";


const getGenreMovieVideos = (param) => {
    if (!param.queryKey[1]) {
        throw new Error('No movie ID provided');
    }
    return api(`keyword/{keyword_id}/movies`)
}


export const useGenreVideos = (genreId) => {
    return useQuery({
        queryKey : ['movie-genre-video',genreId],
        queryFn : getGenreMovieVideos,
        select : (data) => {
            return data.data.results
        }
    })
}