import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LoginForm from "./components/Loginform";

// Non-lazy loaded components
import Home from "./components/Home";

// Lazy load the components
const BlogDashboard = lazy(() => import("./components/BlogDashboard"));
const SkillsGrid = lazy(() => import("./components/SkillsGrid"));
const Pagination = lazy(() => import("./components/Pagination"));
const Contact = lazy(() => import("./components/Contact"));
const HomePage = lazy(() => import("./components/HomePage"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/skills"
        element={
          <>
            <Header
              header="My Blog"
              body="These are my blog posts, Thank you for being here"
            />
            <SkillsGrid />
          </>
        }
      />
      <Route
        path="/blog"
        element={
          <>
            <Header
              header="These are my blog posts"
              body="I love to write and talk about technology and I want to share that with you."
            />
            <BlogDashboard />
          </>
        }
      />
      <Route path="/about" element={<LoginForm />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Home />
          <Suspense fallback={<div>Loading...</div>}>
            <AnimatedRoutes />
          </Suspense>
          <Pagination />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
