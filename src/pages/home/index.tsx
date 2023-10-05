import React, { useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { ActionType, TopicReducer } from "../../reducers/topicReducers";
import { TopicList } from "./components/TopicList";
import { TopicForm } from "./components/TopicForm";
import { Topic } from "../../core/interfaces/types";

export function TopicPage() {
  const [{ topics }, dispatch] = useReducer(TopicReducer, { topics: [] });

  useEffect(() => {
    fetch('http://localhost:3001/topics')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ActionType.LOADED, payload: { topics: data } });
      });
  }, []);

  const addTopic = async (text: Topic) => {
    const newTopic: Topic = {
      id: uuidv4(),
      descricao: text.descricao,
      autor: text.autor,
      created_at: new Date(),
      tags: text.tags,
      active: false,
      votes: { up: 10, down: 0 },
    };

    try {
      const response = await fetch('http://localhost:3001/topics', {
        method: 'POST',
        body: JSON.stringify(newTopic),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Novo tópico adicionado com sucesso:', newTopic);
        dispatch({ type: ActionType.ADDED, payload: { topic: newTopic } });
      }
    } catch (error) {
      console.error('Erro ao adicionar novo tópico:', error);
    }
  };

  const handleVote = async (topicId: string, voteType: 'up' | 'down') => {
    const updatedTopics = topics.map((topic: Topic) => {
      if (topic.id === topicId) {
        return {
          ...topic,
          votes: {
            ...topic.votes,
            [voteType]: topic.votes[voteType] + 1
          }
        };
      }
      return topic;
    });

    const topicToUpdate = updatedTopics.find((topic: Topic) => topic.id === topicId);

    if (topicToUpdate) {
      try {
        const response = await fetch(`http://localhost:3001/topics/${topicId}`, {
          method: 'PATCH',
          body: JSON.stringify({ votes: topicToUpdate.votes }),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (response.ok) {
          console.log('Voto registrado com sucesso para o tópico:', topicId);
          dispatch({ type: ActionType.UPDATED, payload: { topic: topicToUpdate } });
        }
      } catch (error) {
        console.error('Erro ao registrar voto:', error);
      }
    }
  };

  return (
    <>
      <TopicForm onAdd={addTopic} />
      <TopicList topics={topics} onLike={topicId => handleVote(topicId, 'up')} onDislike={topicId => handleVote(topicId, 'down')} />
    </>
  );
}
