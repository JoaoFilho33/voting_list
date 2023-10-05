// src/App.tsx
import React from 'react';
import TopicList from './components/TopicList';
import './App.css';
import { TopicPage } from './pages/home';

function App() {
  return (
    <div className="App">
      <TopicPage />
    </div>
  );
}

export default App;
