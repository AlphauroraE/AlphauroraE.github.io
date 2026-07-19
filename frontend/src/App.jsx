import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Fun from './components/Fun';
import Bottom from './components/Bottom';
import NavBar from './components/NavBar';
import ProjectsGallery from './components/ProjectsGallery';
// const apiBase = process.env.REACT_APP_API_URL || '';

function HomePage() {
  return (
    <div>
      <NavBar />
      <Home />
      <Bottom />
    </div>
  );
}

function ProjectsPage() {
  return (
    <div>
      <NavBar />
      <Projects />
      {/* <Bottom /> */}
    </div>
  );
}

function ProjectsGalleryPage() {
  return (
    <div>
      <NavBar />
      <ProjectsGallery />
      {/* <Bottom /> */}
    </div>
  );
}

function ExperiencePage() {
  return (
    <div>
      <NavBar />
      <Experience />
      {/* <Bottom /> */}
    </div>
  );
}

function PublicationsPage() {
  return (
    <div>
      <NavBar />
      <Publications />
      {/* <Bottom /> */}
    </div>
  );
}

function FunPage() {
  return (
    <div>
      <NavBar />
      <Fun />
      {/* <Bottom /> */}
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects-gallery" element={<ProjectsGalleryPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/photography" element={<FunPage />} />
      </Routes>
    </Router>
  );
};
export default App;