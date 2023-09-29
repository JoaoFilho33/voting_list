import React from 'react';
import './style.css'

type AuthorInfoProps = {
    authorName: string;
};

const AutorInfo: React.FC<AuthorInfoProps> = ({ authorName }) => {
    return <div className='autor'>Autor: {authorName}</div>;
};

export default AutorInfo;
