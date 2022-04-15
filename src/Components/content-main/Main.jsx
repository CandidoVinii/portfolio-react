import React from 'react';
import './Main.css'

export default function Main () {
  return(
    <main>
      <div className="content-main">
        <h1>Vinicius Aquino</h1>
        <h1>Full stack developer student</h1>
        <p>
          Olá, meu nome é Vinicis e tenho 22 anos. Atualmente estou fazendo faculdade em análise e desenvolvimento de sistemas
          e o curso de desenvolvimento full-stack da trybe. O meu grande objetivo desse ano é me formar na trybe e conseguir meu 
          primeiro emprego na área e me desenvolver muito mais como programador.
          Meus hobbys são video-games, futebol e fazer alguma atividade com minha família.
          Para ver mais sobre meus projetos e aprendizagens, convido a visitarem meu GitHub.
        </p>
      </div>

      <div className="skills" >
        <h1>Skills:</h1>
        <div className="my-skills">
          <p id="js" className="animationJS">Java Script</p>
          <p id="react" className="animationReact">React</p>
          <p id="html" className="animationHtml">HTML</p>
          <p id="redux" className="animationRedux">Redux</p>
          <p id="hooks" className="animationHooks">React Hooks</p>
          <p id="css" className="animationCss">CSS</p>
          <p id="git" className="animationGit">GitHub</p>
          <p id="scrun" className="animationGit">Scrun</p>
          <p id="kanban" className="animationGit">Kanban</p>
          <p id="bootstrap" className="animationBoots">Bootstrap</p>
        </div>
      </div>
    </main>
  )
}

