import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import { BankPartners } from './pages/BankPartners';
import Calculator from './pages/Calculator';
import Documents from './pages/Documents';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/banks" element={<BankPartners />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
