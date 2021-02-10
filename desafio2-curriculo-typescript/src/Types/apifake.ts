import {InterfaceContatos} from './contatos'
import { InterfaceCursos } from './cursos';
import { InterfaceEducacao } from './educacao';


export interface InterfaceApiFake {
    nome: string,
    ocupacao: string,
    resumo: string,
    perfilProfissional: string,
    contatos: InterfaceContatos[],
    educacao: InterfaceEducacao[],
    cursos: InterfaceCursos[]
}