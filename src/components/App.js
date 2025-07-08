import Header from "../components/ui/Header";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../components/ui/Theme"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    
  <ThemeProvider theme={theme}>
   <Router>
    <Header/>
      <Routes>
        
        <Route path="/" element={<div style={{marginTop: '60px'}}>home</div>} />
        <Route path="/customSoctware" element={<div style={{marginTop: '60px'}}>customSoctware</div>} />
        <Route path="/mobileapps" element={<div style={{marginTop: '60px'}}>mobileapps</div>} />
        <Route path="/website" element={<div style={{marginTop: '60px'}}>website</div>} />
        <Route path="/service" element={<div style={{marginTop: '60px'}}>service</div>} />
        <Route path="/revolution" element={<div style={{marginTop: '60px'}}>Horevolutionme</div>} />
        <Route path="/about" element={<div style={{marginTop: '60px'}}>about</div>} />
        <Route path="/contact" element={<div style={{marginTop: '60px'}}>contact</div>} />
      </Routes>      
    </Router>
  </ThemeProvider>
      
   
  );
}

export default App;
