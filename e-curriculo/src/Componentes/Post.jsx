import {Comments} from './Comments'
import {Academic} from './Academic'
import {Skill} from './Skill'
import styles from './Post.module.css'

export function Post() {
  return (

    <article className={styles.post}>
<header>
<div className={styles.author}>
<img className={styles.avatar} src="./img/avatar2.png" alt="imagem avatar" />
<div className={styles.authorInfo}>
    <strong >Viviane Santos</strong>
    <span>Assistente de Produção</span>
</div>
</div>
  </header>
<div className={styles.content}>
   <p>Sou Técnica em Rede de Computadores, e Assistente Administrativa e apesar de não ter exercido diretamente a profissão estou em busca de uma recolocação no mercado de trabalho através da migração para área tecnológica, cursando Desenvolvedor Full Stack para adquirir novos conhecimentos, desenvolver e ganhar experiência na área. Assim como no Atendimento ao Cliente, Análise de Dados e Documentos, Resolução de Problemas, Call Center e Operações Sistêmicas. Estou em constante evolução e melhorias pessoal e profissional, pois acredito nas minhas capacidades, adaptação e crescimento.
   </p>

   <p><a href="https://github.com/jsvivis?tab=repositories">Repositórios GitHub</a></p>
   <p><a href="https://github.com/jsvivis/vite-project">Ultimo Projeto</a></p>
</div>

<form className={styles.commentsForm}>
    <strong>Experiência Profissional</strong>
</form>

<div>
<Comments/>
</div>


<form className={styles.commentsForm}>
    <strong>Formação Acadêmica</strong>
</form>

<div>
<Academic/>
</div>

<form className={styles.commentsForm}>
    <strong>Habilidades</strong>
</form>

<div>
<Skill/>
</div>




    </article>
  )
}
