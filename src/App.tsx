import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AnalyzerPage from './pages/AnalyzerPage';
import ComingSoonPage from './pages/ComingSoonPage';
function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main className="container mx-auto px-4 py-8 space-y-12">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/analyzer" element={<AnalyzerPage />} />
                        <Route path="/coming-soon" element={<ComingSoonPage />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;