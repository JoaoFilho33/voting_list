import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TopicList } from "./components/TopicList"
import { TopicForm } from "./components/TopicForm";
import { Topic } from "../../core/interfaces/types";

export function TopicPage() {
  const [topics, setTopics] = useState<Topic[]>([
    {
      id: uuidv4(),
      descricao: 'Pascal é uma excelente linguagem para algoritmos!',
      autor: { nome: 'Osires Filho', cidade: 'Massachusetts', pais: 'Tuntun' },
      created_at: new Date(),
      tags: ['algoritmo', 'Pascal'],
      active: true,
      votes: { up: 10, down: 0 },
    },
    {
      id: uuidv4(),
      descricao: 'O mundo é um moinho',
      autor: { nome: 'Cartola', cidade: 'Rio de Janeiro', pais: 'Brasil' },
      created_at: new Date(),
      tags: ['Música', 'boa'],
      active: true,
      votes: { up: 0, down: 11 },
    },
  ]);

  const handleAddTopic = (newTopic: Topic) => {
    setTopics([...topics, newTopic]);
  }

  const Like = (topicId: string) => {
    const updatedTopics = topics.map((topic) =>
      topic.id === topicId ? { ...topic, votes: { ...topic.votes, up: topic.votes.up + 1 } } : topic
    );
    setTopics(updatedTopics);
  };

  const Dislike = (topicId: string) => {
    const updatedTopics = topics.map((topic) =>
      topic.id === topicId ? { ...topic, votes: { ...topic.votes, down: topic.votes.down + 1 } } : topic
    );
    setTopics(updatedTopics);
  };

  return (  
    <>
      <TopicForm onAdd={handleAddTopic} />
      <TopicList topics={topics} onLike={Like} onDislike={Dislike} />
    </>
  )

}