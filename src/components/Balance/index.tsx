// src/components/Balance.tsx
import React from 'react';
import './style.css'

type BalanceProps = {
    votes: { up: number; down: number };
};

const Balance: React.FC<BalanceProps> = ({ votes }) => {
  const balance = votes.up - votes.down;

  return (
    <div className={`balance ${balance >= 0 ? 'positive' : 'negative'}`}>
      Balance: {balance}
    </div>
  );
};

export default Balance;