import React from 'react';
import './App.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import Detail from "./view/Detail";
import TallyPage from "./view/TallyPage";
import Analysis from "./view/Analysis";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div>
        <Routes>
            <Route path="/detail" element={<Detail />} />
            <Route path="/tallyPage" element={<TallyPage />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/" element={<Navigate to='/detail'/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>

    </div>
  );
}

export default App;
