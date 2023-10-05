import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Topic as TopicType } from '../../../../core/interfaces/types';
import Topic from '../Topic';
import './style.css';

type TopicListProps = {
    topics: TopicType[];
    onLike: (id: string) => void;
    onDislike: (id: string) => void;
};

export const TopicList: React.FC<TopicListProps> = ({ topics, onDislike, onLike }) => {
    console.log('Lista renderizada');
    return (
        <div className="topic-list">
            {topics.map((topic) => (
                <Topic key={uuidv4()} topic={topic} onLike={onLike} onDislike={onDislike} />
            ))}
        </div>
    );
};

export default TopicList;
