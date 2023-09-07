import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import GridHome from "./Routes/Home/GridHome";
import FormUpdate from "./Routes/FormUpdate";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<GridHome />} />
                <Route path="/GridHome" element={<GridHome />} />
            </Route>
            <Route path="/updatePost/:id" element={<FormUpdate />} />
        </Routes>
    )
}