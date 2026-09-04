#
# Este programa demonstra o uso de um semárforo para controlar
# quantos processos podem executar uma tarefa ao mesmo tempo.

import multiprocessing as mp
import os
import time


def tarefa(semaforo, indice):
    # O bloco "with semaforo" tenta ocupar uma vaga do semáforo.
    # Como o semáforo foi criado com 3 vagas, no máximo 3 processos
    # conseguem entrar neste bloco simultaneamente.
    with semaforo:
        # Mostra qual processo entrou e seu PID.
        print(f"Entrou o processo {indice} - PID: {os.getpid()}", flush=True)

        # Simula uma tarefa que demora 1 segundo para ser realizada.
        time.sleep(1)

        # Quando o processo sai do bloco "with", a vaga do semáforo
        # é liberada automaticamente para outro processo.
        print(f"Saiu o processo {indice}", flush=True)


if __name__ == "__main__":
    # Necessário para o funcionamento correto do multiprocessing no Windows.
    mp.freeze_support()
    mp.set_start_method("spawn", force=True)

    # Cria um semáforo com 3 vagas.
    # Isso significa que apenas 3 processos podem executar a tarefa
    # protegida pelo semáforo ao mesmo tempo.
    semaforo = mp.Semaphore(3)

    # Cria 8 processos que irão executar a função tarefa().
    processos = [
        mp.Process(target=tarefa, args=(semaforo, i))
        for i in range(8)
    ]

    # Inicia todos os processos.
    for processo in processos:
        processo.start()

    # Aguarda todos os processos terminarem.
    for processo in processos:
        processo.join()

    print("Todos os processos terminaram.")
