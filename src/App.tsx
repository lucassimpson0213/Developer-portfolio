import "./index.css";
import Home from "./components/Home";
import BlogDashboard from "./components/BlogDashboard";
import { ChakraProvider } from "@chakra-ui/react";
import Contact from "./components/Contact";
import LoginForm from "./components/Loginform";
import TaskApp from "./components/TaskApp";
import SkillsGrid from "./components/SkillsGrid";
import MultiDrawer from "./components/MultiDrawer";
import { Pagination } from "antd";
import Page from "./components/Pagination";

function App() {
  return (
    <>
      <Home />

      <BlogDashboard />

      <LoginForm />
      <SkillsGrid />
      <Page/>
      {/* <div className="App">
     <BrowserRouter>
       <Routes>
         <Route element={<Home />} >
           <Route path="/" element={<App />} />
           <Route path="about" element={<Contact />} />
           <Route path="contact" element={<Contact />} />
         </Route>
       </Routes>
     </BrowserRouter>
   </div> */}
    </>
  );
}

export default App;
