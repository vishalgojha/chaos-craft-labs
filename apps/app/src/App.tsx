/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Github, Twitter, Mail } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Pages
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col selection:bg-accent selection:text-bg overflow-x-hidden">
        <div className="noise-overlay" />
        <Navbar />
        <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/manifesto" element={<Manifesto />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
