import Forgot from './pages/authentication/forgot';
import Login from './pages/authentication/login';
import Signup from './pages/authentication/signup';
import Update from './pages/authentication/update';
import Homepage from './pages/home/home';
import {createHashRouter,
  RouterProvider,
   } from 'react-router-dom';
import ProfilePic from './pages/authentication/profilepic';
import MainPage from './pages/mainPage/mainPage';
import View from './pages/view/view'
import Uploader from './pages/Upload/Upload';
import Search from './pages/Library/Search';
import ViewDept from './pages/Library/viewDept';

function App() {
 const router = createHashRouter(
[
{
  path: "/",
  element: <ProfilePic/>,
},
{path: "home", element: <Homepage/>},
{path: "signup", element: <Signup/>},
{path: "update", element: <Update/>},
{path: "login", element: <Login/>},
{path: "forgot", element: <Forgot/>},
{path: "profilepic", element: <ProfilePic/>},
{path: "mainpage", element: <MainPage/>},
{path: "view", element: <View/>},
{path: "upload", element: <Uploader/>},
{path: "search", element: <Search/>},
{path: "viewDept", element: <ViewDept/>},


])


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
