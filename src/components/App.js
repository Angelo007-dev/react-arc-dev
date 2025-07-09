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
          <Route
            path="/"
            element={<div className="route-content">home page</div>}
          />
          <Route
            path="/sevices"
            element={<div className="route-content">Service page</div>}
          />
          <Route
            path="/services/customSoctware"
            element={<div className="route-content">customSoftware page</div>}
          />
          <Route
            path="/services/mobileapps"
            element={<div className="route-content">mobileapps page</div>}
          />
          <Route
            path="/services/website"
            element={<div className="route-content">website page</div>}
          />
          <Route
            path="/revolution"
            element={<div className="route-content">The Revolution page</div>}
          />
          <Route
            path="/about"
            element={<div className="route-content">about page</div>}
          />
          <Route
            path="/contact"
            element={<div className="route-content">contact page</div>}
          />
          <Route
            path="/estimate"
            element={<div className="route-content">Free estimate page</div>}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
