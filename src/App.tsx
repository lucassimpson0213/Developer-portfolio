import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Utils/Header";
import LoginForm from "./components/Contact/Loginform";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.ts";
// Non-lazy loaded components
import Home from "./components/Utils/Home";
import HooksExample from "./components/Skills/Examples/HooksExample";
import SignUpv from "./components/Auth/SignUpv";
import Congrats from "./components/Auth/Congrats";
import HomePage from "./components/Home/HomePage.tsx";
import { ThemeProvider } from "./components/Utils/theme-provider.tsx";

// Lazy load the components
const BlogDashboard = lazy(() => import("./components/Blog/BlogDashboard"));
const SkillsGrid = lazy(() => import("./components/Skills/SkillsGrid"));
//const Pagination = lazy(() => import("./components/Utils/Pagination"));
const Contact = lazy(() => import("./components/Contact/Contact"));

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
              header="Things I'm Interested in"
              body="I love programming, hanging out with my girlfriend and working out!"
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
      <Route
        path="/skills/examples"
        element={
          <>
            <HooksExample />{" "}
          </>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUpv />} />
      <Route path="/congratulations" element={<Congrats />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ChakraProvider theme={theme}>
        <Router>
          <div className="App">
            <Home />
            <Suspense fallback={<div>Loading...</div>}>
              <AnimatedRoutes />
            </Suspense>
          </div>
        </Router>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
