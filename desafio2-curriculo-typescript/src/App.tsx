import React, {useState} from "react"
import "./App.css"
import Cursos from "./components/Cursos"
import Perfil from "./components/Perfil"
import { InterfaceApiFake } from "./Types/apifake"
import Sidebar from "./components/Sidebar"

function App() {

  const fakeAPI: InterfaceApiFake =  
    {
      nome: 'Meiryland Melo',
      ocupacao: 'Developer frontend jr',
      resumo: '',
      perfilProfissional: 'Psicóloga por formação e aspirante a desenvolvedora front-end (HTML, CSS, JAVASCRIPT). Me reinventar, buscando sempre adquirir novos conhecimentos e estar sempre em movimento é o que eu venho buscando para crescer como pessoa e profissionalmente. ',
      contatos: [
        {
          id: 1,
          tipo: 'telefone',
          contato: '19 99960-8411',
          icon: 'telefone.svg'
        },
        {
          id: 2,
          tipo: 'email',
          contato: 'meirylandmelo@gmail.com',
          icon: 'o-email.svg'
        },
        {
          id: 3,
          tipo: 'Linkedin',
          contato: 'https://www.linkedin.com/in/meiryland/',
          icon: 'linkedin.svg'
        },
        {
          id: 4,
          tipo: 'GitHub',
          contato: 'https://github.com/meirylandmelo',
          icon: 'github.svg'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'UFPB',
          curso: 'Psicologia'
        },
        {
          id: 2,
          instituicao: 'UFPB',
          curso: 'Mestrado em neurociências cogntiva e comportamento'
        }
      ],
      cursos: [
        {
          id: 1,
          curso: 'React',
          periodo: 'Janeiro de 2020 - Atualmente',
          empresa: 'Campinas Tech Talents',
          local: 'Campinas-SP',
          conteudo: 'JavaScript, React, TypeScript, Redux.'
        },
        {
          id: 2,
          curso: 'Kotlin',
          periodo: 'Outubro 2020 - Novembro 2020',
          empresa: 'Woman Can Code',
          local: 'Campinas-SP',
          conteudo: 'MVVM, Consumo de APIs.'
        },
        {
          id: 3,
          curso: 'Frontend',
          periodo: 'Outubro 2019 - Dezembro 2020',
          empresa: 'Woman Can Code',
          local: 'Online',
          conteudo: 'HTML, CSS, Bootstrap, Git e GitHub, JavaScript, Jquery e orientação profissional.'
        }
      ]
  }

  const [resposta] = useState<InterfaceApiFake>(fakeAPI)

  return (
    <main>
      <Perfil nome={resposta.nome} ocupacao={resposta.ocupacao} 
      resumo={resposta.resumo} perfilProfissional={resposta.perfilProfissional} />

      <Sidebar contatos={resposta.contatos} educacao={resposta.educacao}/>
      
      <Cursos cursos={resposta.cursos}/>
      
    </main>
  );
}

export default App;