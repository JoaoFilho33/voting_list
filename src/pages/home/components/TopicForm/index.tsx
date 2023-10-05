import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Topic } from "../../../../core/interfaces/types";
import "./style.css"

type TopicFormProps = {
    onAdd: (novoTopic: Topic) => void
}

export function TopicForm ({ onAdd }: TopicFormProps){
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newTopic: Topic = {
            id: uuidv4(),
            descricao: description,
            autor: {
                nome: 'current_user',
                cidade: "sd",
                pais: 'Massachusetts',
            },
            created_at: new Date(),
            tags: tags.split(' ').map((tag: string) => tag.trim()),
            active: true,
            votes: {
                up: 0,
                down: 0,
            },
        };

        onAdd(newTopic);
    }

    return (
        <div>
            <h1>Adicionar Tópico</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description">Descrição: </label>
                    <input 
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="input-style"
                    />
                </div>
                <div>
                    <label htmlFor="tags">Tags: </label>
                    <input 
                        type="text"
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="input-style"
                    />
                </div>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}