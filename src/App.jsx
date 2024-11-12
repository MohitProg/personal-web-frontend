import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Blog from "./Pages/Blog";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import NewsLetter from "./Pages/NewsLetter";
import Navbar from "./components/Navbar";
import Singleblog from "./Pages/Singleblog";
import Fotter from "./components/Fotter";
import NewsLatter from "./components/NewsLatter";
import ScrollToTop from "./components/ScrollToTop";
import Filter from "./components/Filter";
import { Login } from "@mui/icons-material";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import Profilepage from "./Pages/Profilepage";
import AdminPage from "./Pages/AdminPage";
import Allblogpage from "./Pages/Allblogpage";
import AlluserPage from "./Pages/AlluserPage";
import ChartviewPage from "./Pages/ChartviewPage";
import Addblog from "./Pages/Addblog";

function App() {
  console.log(window);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        {["/login", "/signup"].includes(window.location.pathname) ? (
          ""
        ) : (
          <>
            <Navbar />
            <Filter />
          </>
        )}

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="blog/:id" element={<Singleblog />} />
            <Route path="projects" element={<Projects />} />
            {/* profile page routing  */}
            <Route path="profile">
              <Route index element={<Profilepage />} />
            </Route>

            {/* admin page routeing  */}
            <Route path="admin/" element={<AdminPage/>}>
             
              <Route index path="allblog"  element={<Allblogpage/>}/>
              <Route path="alluser" element={<AlluserPage/>}/>
              <Route path="chartview" element={<ChartviewPage/>}/>
            </Route>
            <Route path="/addblog" element={<Addblog/>}/>

            
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="newsletter" element={<NewsLetter />} />
          </Route>
        </Routes>

        {["/login", "/signup",].includes(window.location.pathname) ? (
          ""
        ) : (
          <>
            <NewsLatter />

            <Fotter />
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
