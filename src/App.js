import React, { lazy, Suspense, useEffect, useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";
import UserContextData from "./utils/UserContextData";

const Grocery = lazy(() => import("./components/Grocery"));
const Contact = lazy(() => import("./components/Contact"));
const AppLayout = () => {
  const [loginName, setLoginName] = useState("");
  useEffect(() => {
    const data = {
      loginname: "Ravi",
    };
    setLoginName(data.loginname);
  }, []);
  return (
    <>
      <UserContextData.Provider value={{ name: loginName, setLoginName }}>
        <div className="app">
          <Header />

          <Outlet />
        </div>
      </UserContextData.Provider>
    </>
  );
};
export default AppLayout;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={"loading"}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

// import { useNavigate } from 'react-router-dom';

// function LoginButton() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // your login logic...
//     navigate('/dashboard');
//   };

//   return <button onClick={handleLogin}>Login</button>;
// }
