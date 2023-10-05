import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import './style.css'
import { VoteCount } from '../../../../core/interfaces/typeVotes'

type LikeButtonProps = {
    onVote: () => void;
    votes:VoteCount
};

const LikeButtonComponent: React.FC<LikeButtonProps> = ({ onVote, votes }) => {
    return (
        <div className='like-button'>
            <FaThumbsUp className='thumb-icon' onClick={onVote} />
            <span>{votes.up}</span>
        </div>
    );
};

export default LikeButtonComponent;
