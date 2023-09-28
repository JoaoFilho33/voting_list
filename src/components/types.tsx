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


// base para registrar voto 
export type VoteType = 'UP' | 'DOWN'

export type Vote = {
    id: string;
    topico_id: string;
    tipo: VoteType;
    created_at: Date;
}