// Importa as classes necessárias para o programa.
import { Tarefa } from "./tarefa";
import { GestorTarefas } from "./gestor";

// Função principal que executa o programa.
function main() {
    // Cria uma instância do GestorTarefas.
    const gestor = new GestorTarefas();

    // Cria instâncias da classe Tarefa com dados de exemplo.
    const tarefa1 = new Tarefa(1, "Criar API Sysaid", "Concluída", "Buscar Chamados SysAid");
    const tarefa2 = new Tarefa(2, "Fazer página de consulta de chamados", "Em andamento", "Buscar Chamados SysAid");
    const tarefa3 = new Tarefa(3, "Puxar arquivos do plutao", "Pendente", "Automatizar Base Blip");

    // Adiciona as tarefas ao gestor.
    gestor.adicionarTarefa(tarefa1);
    gestor.adicionarTarefa(tarefa2);
    gestor.adicionarTarefa(tarefa3);

    // Atualiza o status de uma tarefa e consulta tarefas por projeto.
    gestor.atualizarStatus(2, "Concluída");
    gestor.consultarTarefasPorProjeto("Buscar Chamados SysAid");

    // Tenta atualizar uma tarefa inexistente e consulta um projeto sem tarefas.
    gestor.atualizarStatus(4, "Em andamento");
    gestor.consultarTarefasPorProjeto("Tahto Project");
}

// Chama a função principal para executar o programa.
main();
