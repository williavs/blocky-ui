import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Components } from './pages/Components';
import { Documentation } from './pages/Documentation';
import { Navigation } from './components/Navigation';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/components" element={<Components />} />
              <Route path="/docs/*" element={<Documentation />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}