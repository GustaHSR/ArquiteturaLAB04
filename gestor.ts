// Importa a classe Tarefa para gerenciar as tarefas.
import { Tarefa } from "./tarefa";

// Classe que gerencia um conjunto de tarefas.
export class GestorTarefas {
    // Lista que armazena as tarefas do gestor.
    private tarefas: Tarefa[];

    // Construtor que inicializa a lista de tarefas como vazia.
    constructor() {
        this.tarefas = [];
    }

    // Retorna a lista de todas as tarefas.
    getTarefas(): Tarefa[] {
        return this.tarefas;
    }

    // Adiciona uma nova tarefa à lista de tarefas.
    adicionarTarefa(tarefa: Tarefa): void {
        this.tarefas.push(tarefa);
    }

    // Atualiza o status de uma tarefa com base no ID.
    atualizarStatus(id: number, status: string): void {
        try {
            // Busca a tarefa pelo ID.
            const tarefa = this.tarefas.find(f => f.getId() === id);
            if (tarefa) {
                const statusAnterior = tarefa.getStatus();
                tarefa.setStatus(status); // Atualiza o status.
                console.log(`Status da tarefa ${id} atualizado de ${statusAnterior} para ${status}.`);
            }
        } catch {
            // Exibe um erro caso a tarefa não seja encontrada.
            console.error(`Tarefa com número ${id} não encontrada.`);
        }
    }

    // Filtra as tarefas por projeto e retorna a lista correspondente.
    consultarTarefasPorProjeto(projeto: string): Tarefa[] {
        const tarefasFiltradas = this.tarefas.filter(tarefa => tarefa.getProjeto() === projeto);
        return tarefasFiltradas.length > 0 
            ? tarefasFiltradas 
            : (console.log("Nenhuma tarefa nesse projeto"), []);
    }
}
