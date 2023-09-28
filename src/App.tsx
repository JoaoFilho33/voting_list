// src/App.tsx
import React from 'react';
import TopicList from './components/TopicList';
import './App.css';
import { Topic as TopicType } from '../src/components/types';

const topics: TopicType[] = [
  {
    id: '1',
    descricao: 'Pascal é uma excelente linguagem para algoritmos!',
    autor: { nome: 'Osires Filho', cidade: 'Exemploville', pais: 'Exemplostan' },
    created_at: new Date(),
    tags: ['algoritmo', 'Pascal'],
    active: true,
    votes: { up: 0, down: 0 },
  },
  // Adicione mais tópicos aqui conforme necessário
];

function App() {
  return (
    <div className="App">
      <h1>Like/Dislike</h1>
      <TopicList topics={topics} />
    </div>
  );
}

export default App;
