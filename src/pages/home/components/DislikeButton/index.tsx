import React from 'react';
import { FaThumbsDown } from 'react-icons/fa';
import './style.css'

type DislikeButtonProps = {
    onVote: () => void;
    votes: { down: number };
};

const DislikeButtonComponent: React.FC<DislikeButtonProps> = ({ onVote, votes }) => {
    return (
        <div className='dislike-button'>
            <FaThumbsDown className='thumb-icon' onClick={onVote} />
            <span>{votes.down}</span>
        </div>
    );
};

export default DislikeButtonComponent;
