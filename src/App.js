import './App.css';
import {Route, Routes} from "react-router";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/Movies/MoviePage";
import ReLatedMovies from "./pages/ReLatedMovies/ReLatedMovies";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    //홈페이지
    // 영화디테일 /movies
    // 영화 디테일 화면 /movies/:id

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/movies">
                        <Route index element={<MoviePage/>}/>
                        <Route path={":id"} element={<ReLatedMovies/>}/>
                    </Route>
                </Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>

        </div>
    );
}

export default App;
