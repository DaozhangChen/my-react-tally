import React from 'react';
import './App.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import Detail from "./view/Detail";
import TallyPage from "./view/TallyPage";
import Analysis from "./view/Analysis";
import BottomNav from "./components/BottomNav";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className='wrapper'>
        <Routes>
            <Route path="/detail" element={<Detail />} />
            <Route path="/tallyPage" element={<TallyPage />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/" element={<Navigate to='/detail'/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
        <BottomNav />
    </div>
  );
}

export default App;
