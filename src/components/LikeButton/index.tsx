import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import './style.css'

type LikeButtonProps = {
    onVote: () => void;
    votes: { up: number };
};

const LikeButtonComponent: React.FC<LikeButtonProps> = ({ onVote, votes }) => {
    return (
        <div className='like-button'>
            <FaThumbsUp className='thumb-icon' onClick={onVote} />
            <span className='vote-count'>{votes.up}</span>
        </div>
    );
};

export default LikeButtonComponent;
