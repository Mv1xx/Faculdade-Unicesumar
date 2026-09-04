import multiprocessing as mp
import time

def trabalhador(evento):
    print("Trabalhador aguardando uma notificação...")
    evento.wait()
    print("Notificação recebida; encerrando com segurança.")

if __name__ == "__main__":
    mp.freeze_support(); mp.set_start_method("spawn", force=True)
    evento = mp.Event(); processo = mp.Process(target=trabalhador, args=(evento,))
    processo.start(); time.sleep(1)
    print("Processo principal enviando a notificação")
    evento.set(); processo.join()
