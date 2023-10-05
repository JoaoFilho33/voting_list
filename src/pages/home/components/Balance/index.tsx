import React from 'react';
import './style.css'

type BalanceProps = {
  votes: { up: number; down: number };
};

const Balance: React.FC<BalanceProps> = ({ votes }) => {
  // const balance = votes.up - votes.down;
  // const totalVotes = votes.up + votes.down;

  const progressoStyle = {
    width: `${votes.up / (votes.up + votes.down) * 100}%`,
    backgroundColor: 'green',
  };

 
  return (
    <div className='progress-bar'>
      <div className="container-progresso">
          <div
            className={`progresso`}
            style={progressoStyle} 
          ></div>
        </div>  

    </div>
  );


};

export default Balance;