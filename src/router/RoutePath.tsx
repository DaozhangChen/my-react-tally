import Detail from "../view/Detail";
import TallyPage from "../view/TallyPage";
import {Navigate, Route, Routes} from "react-router-dom";
import NotFound from "../components/NotFound";
import React from "react";
import TagEdit from "../view/TagEdit";
import TagAdd from "../view/TagAdd";

const RoutePath=()=>{
    return(
        <Routes>
            <Route path="/detail" element={<Detail />} />
            <Route path="/tallyPage" element={<TallyPage />} />
            <Route path="/tagAdd" element={<TagAdd />} />
            <Route path='/tagEdit/:id' element={<TagEdit />}/>
            <Route path="/" element={<Navigate to='/detail'/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}
export default RoutePath