export type Usuario = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

  export type Barra_progresso = {
    id_barra: string,
    id_usuario: string,
    nivel: number,
    velocidade: number,
    capacidade: number,
    volume_producao: number,
    bots: number;
  };

  export type Registro_progresso = {
    id: string;
    nivel_atual: number;
    id_usuario: string;
    id_barra_progresso: string;
  };
