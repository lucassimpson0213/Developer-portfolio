import Home from "./components/Home";
import BlogDashboard from "./components/BlogDashboard";
import LoginForm from "./components/Loginform";
import { Divider } from "antd";

import SkillsGrid from "./components/SkillsGrid";

import Page from "./components/Pagination";

function App() {
  return (
    <>
      <Home />
      <SkillsGrid />
      <BlogDashboard />

      <LoginForm />
      
      <Divider/>
      <Page />
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
