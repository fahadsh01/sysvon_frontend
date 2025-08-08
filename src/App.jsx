import "./App.css";
import Headeer from "./Header/Header";
import WhoWeAre from "./Whoweare/Who";
import Home from "./HomePage/Home";
import ServiceDetail from "./Servicesdetails";
import ServiceDetailUIUX from "./ServicePage/Serviceuiux";
import BlogPage from "./InsightsPage/Blog";
import ContactUs from "./ContactUsPage/Contactus";
import Industries from "./IndustryPage/Industries";
import EngageDetailPage from "./ServicePage/EngageDetailPage";
import Insight from "./InsightsPage/Insight";
import CaseStudyPage from "./InsightsPage/CaseStudyPage";
import BlogCreate from "./How";
import AllServices from "./HomePage/AllServicespage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./Animation";
function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Headeer />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/all-services" element={<AllServices />} />
        <Route path="/slug" element={<BlogPage key={location.pathname} />} />
        <Route path="/Company/:slug" element={<WhoWeAre />} />
        <Route path="/contactUS" element={<ContactUs />} />
        <Route
          path="/case-study/:slug"
          element={<CaseStudyPage key={location.pathname} />}
        />
        <Route path="/blog/:slug" element={<BlogPage />} />

        <Route
          path="/insights/:slug"
          element={<Insight key={location.pathname} />}
        />
        <Route
          path="/engage/:slug"
          element={<EngageDetailPage key={location.pathname} />}
        />
        <Route
          path="/industries/:slug"
          element={<Industries key={location.pathname} />}
        />

        <Route
          path="/services/:slug"
          element={<ServiceDetailUIUX key={location.pathname} />}
        />

        <Route path="/Create-blog" element={<BlogCreate />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}
