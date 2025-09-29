import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { HeroSection } from "./components/HeroSection";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection />

          {/* Routes (other pages) */}
          <Routes>
            <Route path="/prebuilds" element={<h1>Prebuild PCs</h1>} />
            <Route path="/components" element={<h1>Components</h1>} />
            <Route path="/repairs" element={<h1>Repairs</h1>} />
            <Route path="/configurator" element={<h1>PC Configurator</h1>} />
            <Route path="/" element={null} /> {/* optional: home can just be HeroSection */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
