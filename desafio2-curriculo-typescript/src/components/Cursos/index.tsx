import { DadosCursos } from "../../Types/cursos"

function Cursos(prop: DadosCursos) {
    const {cursos} = prop

    return (
        <div className="experience">
            <h2>Experiência Profissional</h2>
            {cursos.map(item => (
            <div key={item.id} className="experience-item">
                <div>
                    <h4>{item.curso}</h4>
                    <span>{item.periodo}</span>
                    <strong>{item.empresa}</strong>
                    <span>{item.local}</span>
                </div>
                <p>
                    {item.conteudo}
                </p>              
            </div>
        ))}   
        </div>    
    )
}

export default Cursos