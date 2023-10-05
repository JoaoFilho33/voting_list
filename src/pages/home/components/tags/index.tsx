import React from 'react';
import './style.css'

type TagsProps = {
    tags: string[];
};

const Tags: React.FC<TagsProps> = ({ tags }) => {
    return (
        <div className='tags'>
            {tags.map(tag => (
                <span key={tag}>{tag}</span>
            ))}
        </div>
    );
};

export default Tags;
