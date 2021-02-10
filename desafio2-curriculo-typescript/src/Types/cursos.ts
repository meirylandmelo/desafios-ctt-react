export interface InterfaceCursos {
    id: number,
    curso: string,
    periodo: string,
    empresa: string,
    local: string,
    conteudo: string
}

export interface DadosCursos {
    cursos: InterfaceCursos[]
}