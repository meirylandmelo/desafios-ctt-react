import { InterfaceContatos } from "./contatos";
import { InterfaceEducacao } from "./educacao";

export interface InterfaceSidebar {
    contatos: InterfaceContatos[],
    educacao: InterfaceEducacao[]
}