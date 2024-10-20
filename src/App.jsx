import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRef, useState, } from 'react';
import './index.css';
import Authentication from './Routes/Authentication';
import Login2 from './Layout/Login/Login2';
import RootSignUp from './Layout/SignUp/RootSignUp';
import BrandSignUp from './Layout/SignUp/BrandSignUp';
import InfluencerSignUp from './Layout/SignUp/InfluencerSignUp';
import UserSignUp from './Layout/SignUp/UserSignUp';
import EmailVerify from './Layout/Authentication/EmailVerify';
import Cookies from 'js-cookie';
import BrandDashBoard from './Layout/Brand/BrandDashBoard';
import VerifyEmail from './Layout/Login/VerifyEmail';
import ForgotPassword from './Layout/Login/ForgetPassword';
import PasswordReset from './Layout/Login/PasswordReset';
import PasswordInput from './Components/Input/PasswordInput';
import BrandRoutes from './Layout/Brand/BrandRoutes';
import CustomerRoutes from './Layout/CustomerService/CustomerRoutes';
import IssueProfile from './Components/Model/IssueProfile';
import InfluencerRoutes from './Layout/Influencer/InfluencerRoutes';
import FetchData from './Components/Table/FetchData';
import UserIssue from './Layout/CustomerService/DashBoard/Pages/UserPage/UserIssue';
import Test from './Test';

const App = () => /* const TimeOutAnimation = useRef()*/ /* const [AnimationState, setAnimationState] = useState(true)*/ /* useEffect(() => {*/ /*    let  TimeOutAnimation=setTimeout(() => {*/ /*     setAnimationState(false)*/ /*    },8000)*/ /* })*/(

  <>
    <div className=" ">

      {/* <IssueProfile/> */}

      <BrowserRouter>
        {/* <Routes>
          <Route path="/users/:id/reset-password/:token" element={<PasswordReset />} />
        </Routes> */}
        {/* <Routes>
          <Route path="/*" element={<CustomerRoutes />} />
        </Routes> */}
        <Routes>
          <Route path="/*" element={< UserIssue/>} />
        </Routes>

        {/* <Routes>
          <Route path="/*" element={<InfluencerRoutes />} />
        </Routes> */}


        {/* <PasswordInput/> */}
        {/* <ForgotPassword/> */}

        {/* <Routes>

          <Route path="/users/:id/reset-password/:token" element={<PasswordReset />} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/Login" element={<Login2 />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgetPassword" element={<ForgotPassword />} />
      
          <Route path="/SignUp/*" element={<RootSignUp />}>
            <Route index element={<RootSignUp />} />
            <Route path="Brand" element={<BrandSignUp />} />
            <Route path="Influencer" element={<InfluencerSignUp />} />
            <Route path="User" element={<UserSignUp />} />
          </Route>

          <Route path="/*" element={<Authentication />} />
      
        </Routes> */}





      </BrowserRouter>

    </div>

  </>

)

export default App