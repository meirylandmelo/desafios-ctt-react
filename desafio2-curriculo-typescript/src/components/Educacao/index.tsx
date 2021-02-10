import { DadosEducacao } from "../../Types/educacao"

function Educacao(props: DadosEducacao) {
    const {educacao} = props

    return(
          <div className="lista-de-formacao">
              {educacao.map(item => (
                  <li key={item.id}>
                  <h4>{item.instituicao}</h4>
                  <p>{item.curso}</p>
                </li>
              ))}
          </div>
    )
}

export default Educacao