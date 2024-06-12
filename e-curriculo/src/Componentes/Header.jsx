import styles from './Header.module.css'

export function Header(){
    return (
        
      <header className={styles.header}>
<img src="./img/react.png" alt="imagem logo" />

<strong>E-Curriculo Profissional</strong>
      </header>
    );
  }