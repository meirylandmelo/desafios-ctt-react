export interface InterfaceEducacao {
    id: number,
    instituicao: string,
    curso: string
}

export interface DadosEducacao {
    educacao: InterfaceEducacao[]
}