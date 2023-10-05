import React from 'react';
import './style.css';

type DateInfoProps = {
    date: Date;
};

const DateComponent: React.FC<DateInfoProps> = ({ date }) => {
    // Verifica se a data é válida antes de chamar toLocaleDateString()
    const formattedDate = date instanceof Date ? date.toLocaleDateString() : "Data inválida";
    return <div className='date'>Data: {formattedDate}</div>;
};

export default DateComponent;
