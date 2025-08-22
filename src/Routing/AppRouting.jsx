import Fisrt_Page from "../Pages/Fisrt-Page";
import Second_Page from "../Pages/Second-Page";
import { Route, Routes } from "react-router-dom";

export default function AppRouting() {
  return (
    <div>

        <Routes>
            <Route path = "/" element={<Fisrt_Page/>}/>
             <Route path = "/create" element={<Second_Page/>}/>
        </Routes>
    </div>
  )
}
