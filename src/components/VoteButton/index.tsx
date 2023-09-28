// src/components/VoteButton.tsx
import './style.css';

type VoteButtonProps = {
    votes: {up: number; down: number};
    onVote: (type: 'UP' | 'DOWN') => void;
}

const VoteButton: React.FC<VoteButtonProps> = ({votes, onVote}) => {
  return (
    <div className="vote-button">
      <button onClick={() => onVote('UP')}>Like</button>
      <button onClick={() => onVote('DOWN')}>Dislike</button>
      <p>Upvotes: {votes.up}</p>
      <p>Downvotes: {votes.down}</p>
    </div>
  );
};

export default VoteButton;
