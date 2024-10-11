import { Routes, Route } from 'react-router-dom';
import Home from './DashBoard/Pages/Home/Home';
import OverView from './DashBoard/Pages/Home/OverView';
import ErrorPage from './DashBoard/Pages/ErrorPage/ErrorPage';
import Compaign from './DashBoard/Pages/Compaign/Compaign';

const MainBar = () => {
  return (
    <div className='w-full bg-gray-200/90 h-full'>
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route path='Dashboard/*' element={<OverView />} />
          <Route path='OverView' element={<OverView />} />
         


        </Route>
        <Route path='Queries' element={<Compaign />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};



export default MainBar;