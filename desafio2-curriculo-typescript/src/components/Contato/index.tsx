import { ContatosDados } from '../../Types/contatos'

function Contatos(props: ContatosDados) {
    const { contatos } = props

    return (
        <div className="lista-de-contatos">
            {contatos.map(item => (
                <li key={item.id}>
                    <div className="item-contato">
                        <h4>{item.tipo}</h4>
                        <p>{item.contato}</p>
                    </div>
                    <div>
                        <img className="icon-midia" src={`/icons/${item.icon}`} />
                    </div>
                </li>
            ))}
        </div>
    )
}
export default Contatos