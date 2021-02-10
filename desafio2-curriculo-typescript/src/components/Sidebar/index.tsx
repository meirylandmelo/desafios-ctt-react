import React, {useState} from 'react'
import Educacao from '../Educacao'
import Contatos from '../Contato'
import { InterfaceSidebar } from '../../Types/sidebar'


function Sidebar(props: InterfaceSidebar) {
    const {contatos, educacao} = props

    const [contato, setMostrarContato] = useState<Boolean>(false)

    const clickContato = () => {
        setMostrarContato(!contato)
    }


    return(
        <aside>
        <div className="sidebar">
            <h3>Contatos</h3>
            <button onClick={clickContato}> {contato ? "Ocultar" : "Mostrar"} Contatos</button>
            {contato && <Contatos contatos={contatos}/>}
        </div>

        <div className="sidebar">
            <h3>Educação</h3>
            <Educacao educacao={educacao}/>
        </div>
      </aside>
    )
}

export default Sidebar