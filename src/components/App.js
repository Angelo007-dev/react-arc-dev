import Header from "../components/ui/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/ui/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<div className="route-content">home</div>} />
          <Route
            path="/sevices"
            element={<div className="route-content">Service</div>}
          />
          <Route
            path="/services/customSoctware"
            element={<div className="route-content">customSoctware</div>}
          />
          <Route
            path="/services/mobileapps"
            element={<div className="route-content">mobileapps</div>}
          />
          <Route
            path="/services/website"
            element={<div className="route-content">website</div>}
          />
          <Route
            path="/revolution"
            element={<div className="route-content">The Revolution</div>}
          />
          <Route
            path="/about"
            element={<div className="route-content">about</div>}
          />
          <Route
            path="/contact"
            element={<div className="route-content">contact</div>}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
