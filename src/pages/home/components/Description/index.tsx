import React from 'react';
import './style.css'

type DescriptionProps = {
    description: string;
};

const Description: React.FC<DescriptionProps> = ({ description }) => {
    return <div className='description'>{description}</div>;
};

export default Description;
