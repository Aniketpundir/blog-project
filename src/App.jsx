import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Article from "./components/Article/Article";
import About from "./components/About/About"
import Skills from "./components/Skills/Skills";
import My_work from "./components/Mywork/My_work";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<My_work />} />
      <Route path="/education" element={<Skills />} />
      <Route path="/article" element={<Article />} />
      <Route path="/article/:id" element={<Article />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
