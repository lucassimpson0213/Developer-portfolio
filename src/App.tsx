import Home from "./components/Home";
import BlogDashboard from "./components/BlogDashboard";
import LoginForm from "./components/Loginform";

import SkillsGrid from "./components/SkillsGrid";

import Page from "./components/Pagination";

function App() {
  return (
    <>
      <Home />

      <BlogDashboard />

      <LoginForm />
      <SkillsGrid />
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
