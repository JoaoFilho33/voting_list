// src/components/TopicList.tsx
import React from 'react';
import { Topic as TopicType} from '../types';
import Topic from '../Topic';
import './style.css';

type TopicListProps = {
    topics: TopicType[];
};

const TopicList: React.FC<TopicListProps> = ({ topics }) => {
    return (
        <div className="topic-list">
            {topics.map((topic) => (
                <Topic key={topic.id} topic={topic} />
            ))}
        </div>
    );
};

export default TopicList;