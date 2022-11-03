import Detail from "../view/Detail";
import TallyPage from "../view/TallyPage";
import Analysis from "../view/Analysis";
import {Navigate, Route, Routes} from "react-router-dom";
import NotFound from "../components/NotFound";
import React from "react";
import TagEdit from "../view/TagEdit";

const RoutePath=()=>{
    return(
        <Routes>
            <Route path="/detail" element={<Detail />} />
            <Route path="/tallyPage" element={<TallyPage />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path='/tagEdit/:id' element={<TagEdit />}/>
            <Route path="/" element={<Navigate to='/detail'/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}
export default RoutePath