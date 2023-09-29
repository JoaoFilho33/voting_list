import React, { useState } from 'react';
import Tags from '../tags';
import LikeButton from '../LikeButton';
import DislikeButton from '../DislikeButton'
import Description from '../Description';
import Autor from '../Autor';
import Date from '../Date';
import Balance from '../Balance';
import { Topic as TopicType } from '../types';
import './style.css';

type TopicProps = {
  topic: TopicType;
};

const Topic: React.FC<TopicProps> = ({ topic }) => {
  const [votes, setVotes] = useState({ up: topic.votes.up, down: topic.votes.down });

  const handleVote = (type: 'UP' | 'DOWN') => {
    if (type === 'UP') {
      setVotes({ ...votes, up: votes.up + 1 });
    } else if (type === 'DOWN') {
      setVotes({ ...votes, down: votes.down + 1 });
    }
  };

  return (
    <div className='topic'>
      <Tags tags={topic.tags} />
      <Description description={topic.descricao} />
      <Autor authorName={topic.autor.nome} />
      <Date date={topic.created_at} />
      <div >{topic.autor.cidade}</div>
      <div className='vote-bar'>
        <LikeButton onVote={() => handleVote('UP')} votes={votes} />
        <DislikeButton onVote={() => handleVote('DOWN')} votes={votes} />
      </div>
      <Balance votes={votes} />
    </div>
  );
};

export default Topic;