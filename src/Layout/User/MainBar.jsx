import { Routes, Route } from 'react-router-dom';
import Home from './DashBoard/Pages/Home/Home';
import Search from './DashBoard/Pages/Search/Search';


import Saved from './DashBoard/Pages/Saved/Saved';
import Message from './DashBoard/Pages/Message/Message';
import Info from './DashBoard/Pages/Info/Info';
import ErrorPage from './DashBoard/Pages/ErrorPage/ErrorPage';

import OverView from './DashBoard/Pages/Home/OverView';


import Blog from './DashBoard/Pages/Blog/Blog';
import Main from './DashBoard/Pages/Blog/Main';

const MainBar = () => {
  return (
    <div className='w-full bg-gray-200/90 h-full'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Dashboard/*" element={<Home />}>
          <Route index element={< OverView />} />
          
        </Route>
        <Route path="Search" element={<Search />} />

        <Route path="Saved" element={<Saved />} />

        <Route path="Blog" element={<Main />} >

          <Route index element={< Blog />} />
        </Route>

        <Route path="Message" element={<Message />} />
        <Route path="Info" element={<Info />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};



export default MainBar;