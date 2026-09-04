import multiprocessing as mp
import os, time

def tarefa(semaforo, indice):
    with semaforo:
        print("Entrou", indice, "PID", os.getpid(), flush=True)
        time.sleep(1)
        print("Saiu", indice, flush=True)

if __name__ == "__main__":
    mp.freeze_support(); mp.set_start_method("spawn", force=True)
    semaforo = mp.Semaphore(3)
    processos = [mp.Process(target=tarefa, args=(semaforo, i)) for i in range(8)]
    for p in processos: p.start()
    for p in processos: p.join()
