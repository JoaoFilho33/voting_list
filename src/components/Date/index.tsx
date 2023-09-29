import React from 'react';
import './style.css'

type DateInfoProps = {
    date: Date;
};

const Date: React.FC<DateInfoProps> = ({ date }) => {
    const formattedDate = date.toLocaleDateString();
    return <div className='date'>Data: {formattedDate}</div>;
};

export default Date;
