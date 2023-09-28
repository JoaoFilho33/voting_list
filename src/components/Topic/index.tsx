// src/components/Topic.tsx
import React, { useState } from 'react';
import VoteButton from '../VoteButton';
import Balance from '../Balance';
import { Topic as TopicType } from '../types'
import './style.css'

const Topic: React.FC<{ topic: TopicType }> = ({ topic }) => {
    const [votes, setVotes] = useState({ up: topic.votes.up, down: topic.votes.down});

    const handleVote = (type: 'UP' | 'DOWN') => {
        if (type === 'UP') {
          setVotes({ ...votes, up: votes.up + 1 });
        } else if (type === 'DOWN') {
          setVotes({ ...votes, down: votes.down + 1 });
        }
      };

    return (
        <div className="topic">
            <p>{topic.descricao}</p>
            <p>Autor: {topic.autor.nome}</p>
            <p>Tags: {topic.tags}</p>

            <VoteButton votes={votes} onVote={handleVote} />
            <Balance votes={votes} />
        </div>
    );
};

export default Topic;
