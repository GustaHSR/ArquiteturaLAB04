// Classe que representa uma tarefa em um sistema de gerenciamento de projetos.
export class Tarefa {
    // Atributos privados para armazenar os dados da tarefa.
    private id: number;           // Identificador único da tarefa.
    private descricao: string;    // Descrição da tarefa.
    private status: string;       // Status atual da tarefa (Ex: "Pendente", "Concluída").
    private projeto: string;      // Nome do projeto ao qual a tarefa pertence.

    // Construtor que inicializa os atributos da tarefa.
    constructor(id: number, descricao: string, status: string, projeto: string) {
        this.id = id;                 // Define o identificador único.
        this.descricao = descricao;   // Define a descrição da tarefa.
        this.status = status;         // Define o status inicial da tarefa.
        this.projeto = projeto;       // Define o projeto ao qual a tarefa pertence.
    }

    // Método "getter" para obter o identificador da tarefa.
    getId(): number {
        return this.id; // Retorna o ID da tarefa.
    }

    // Método "getter" para obter a descrição da tarefa.
    getDescricao(): string {
        return this.descricao; // Retorna a descrição da tarefa.
    }

    // Método "getter" para obter o status da tarefa.
    getStatus(): string {
        return this.status; // Retorna o status atual da tarefa.
    }

    // Método "getter" para obter o projeto da tarefa.
    getProjeto(): string {
        return this.projeto; // Retorna o nome do projeto ao qual a tarefa pertence.
    }

    // Método "setter" para atualizar o status da tarefa.
    setStatus(status: string): void {
        this.status = status; // Atualiza o status da tarefa com o valor fornecido.
    }
}
