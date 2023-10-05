export type Autor = {
    nome: string
    cidade: string
    pais: string
}


export type Topic = {
    id: string;
    descricao: string;
    autor: Autor;
    created_at: Date;
    tags: string[];
    active: boolean;
    votes: {
        up: number;
        down: number;
    };
};