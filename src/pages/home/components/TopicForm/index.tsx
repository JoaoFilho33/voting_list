import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Topic } from "../../../../core/interfaces/types";
import "./style.css"

type TopicFormProps = {
    onAdd: (novoTopic: Topic) => void
}

export function TopicForm({ onAdd }: TopicFormProps) {
    const descriptionRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (descriptionRef.current && tagsRef.current) {
            const newTopic: Topic = {
                id: uuidv4(),
                descricao: descriptionRef.current.value,
                autor: {
                    nome: 'current_user',
                    cidade: "sd",
                    pais: 'Massachusetts',
                },
                created_at: new Date(),
                tags: tagsRef.current.value.split(' ').map((tag: string) => tag.trim()),
                active: true,
                votes: {
                    up: 0,
                    down: 0,
                },
            };

            onAdd(newTopic);

            if (descriptionRef.current && tagsRef.current) {
                descriptionRef.current.value = '';
                tagsRef.current.value = '';
            }
        }
    }

    return (
        <div>
            <h1>Adicionar Tópico</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description">Descrição: </label>
                    <input
                        ref={descriptionRef}
                        id="description"
                        required
                        className="input-style"
                    />
                </div>
                <div>
                    <label htmlFor="tags">Tags: </label>
                    <input
                        ref={tagsRef}
                        type="text"
                        id="tags"
                        className="input-style"
                    />
                </div>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}