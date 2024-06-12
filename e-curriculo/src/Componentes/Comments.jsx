import styles from './Comments.module.css'

export function Comments() {
  return (
    <div className={styles.comments}>
        <img src="https://png.pngtree.com/png-clipart/20231118/original/pngtree-business-woman-working-with-laptop-png-image_13622980.png" alt="profile author" />
    
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
    </div>
    </div>
  )
  
}
