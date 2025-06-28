import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import TeachersPage from "./pages/TeachersPage";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CoursePage from "./pages/CoursePage";

// Main App Layout Component
const AppLayout = () => {
  const location = useLocation();

  // Routes where Footer should NOT be displayed
  const routesWithoutFooter = ["/login", "/signup"];

  // Check if current route should hide footer
  const shouldHideFooter = routesWithoutFooter.includes(location.pathname);

  return (
    <div className="font-inter overflow-x-hidden scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/teach-on-byway" element={<TeachersPage />} />
        <Route path="/course/:id" element={<CoursePage />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
