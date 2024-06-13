import styles from './Comments.module.css'

export function Comments() {
  return (
    <div className={styles.comments}>
        <img src="./img/profile.png" alt="profile author" />
    
    <div className={styles.commentsBox}>
     <div className={styles.commentsContent}>
       <header>
        <div>
        <strong>Assistente de Produção</strong>
        </div>
        </header>
        <p>- ControlDesk - Controle de Tráfego;<br />
          - Gestão de desempenho; <br />
         - Monitoria de degradações, contingências e fluxos em tempo real; <br />
          - Análise de dados e documentos.</p>
        </div>

        <div className={styles.commentsContent}>
  <header>
   <div>
   <strong>Representante de Produção</strong>
   </div>
   </header>
   <p>- Atendimento de gestores e demais áreas;<br />
   - Análise de indicadores, metas e escalas das operações; <br />
   - Procedimentos sistêmicos. </p>
   </div>

   <div className={styles.commentsContent}>
  <header>
   <div>
   <strong>Representante de Atendimento</strong>
   </div>
   </header>
   <p>- Atendimento, prestação de serviços, demandas e informações;<br />
   - Controle de metas; <br />
   - Cadastros e registros de clientes.</p>
   </div>

<form className={styles.escolaridade}>
<strong>Formação Acadêmica</strong>
</form>
<div className={styles.academico} ><img src="https://cdn-icons-png.freepik.com/512/11201/11201268.png" alt="icon acadêmico" /></div>

<div className={styles.commentsContent}>
<header>
 <div>
 <strong>Técnico em Rede de Computadores - Eixo Tecnológico: Informação e Comunicação</strong>
 </div>
 </header>
 </div>
<div className={styles.cursos}>
 <p>- Desenvolvedor Full Stack - Cursando;<br />
 - Assistente Administrativo; <br />
 - Auxiliar de Contabilidade; <br />
 - Workshops: Planejamento e Marketing, Atendimento e vendas, Empreendedorismo, e Marketing Pessoal; <br />
 - Telemarketing.</p>
 </div>

 <form className={styles.skills}>
<strong>Habilidades</strong>
</form>
<div className={styles.habilidades} ><img src="./img/habilidade.png" alt="icon habilidades" /></div>

<div className={styles.lista}>
 <p>- Persistente;<br />
 - Organizada;<br />
 - Objetiva;  <br />                                                  
 - Pontual;   <br />                                                  
 - Proativa;  <br />
 - Bom relacionamento interpessoal <br /> 
 - Trabalho em equipe;<br /> 
 - Facilidade de Aprendizagem;<br />   
 - Desejo de evolução e Conhecimento.</p>                                             
 </div>
    </div>
    </div>
  )
  
}
