import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Components } from "./pages/Components";
import { Documentation } from "./pages/Documentation";
import { Navigation } from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";

function AppContent() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<'home' | 'components' | 'docs'>('home');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/components') {
      setCurrentPage('components');
    } else if (path === '/docs') {
      setCurrentPage('docs');
    } else {
      setCurrentPage('home');
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/docs/*" element={<Documentation />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}