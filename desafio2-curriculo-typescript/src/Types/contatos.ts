export interface InterfaceContatos {
    id: number,
    tipo: string,
    contato: string,
    icon: string
}

export interface ContatosDados {
    contatos: InterfaceContatos[]
}