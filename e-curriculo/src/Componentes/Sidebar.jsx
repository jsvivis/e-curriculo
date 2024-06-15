import styles from './Sidebar.module.css'


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
<div className={styles.profile}>
<img className={styles.avatar} src="./img/avatar2.png" alt="imagem avatar" />
<strong>Viviane</strong>
<span>Desenvolvedora Full Stack</span>

</div>

<footer>
  
    <a href="https://www.linkedin.com/in/" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRPxfjbgvK9Un3P-immkxYFLCzFm3TjEI1_gVjLizy-PqZKBgfjDogmsvKLhI1_AKqpk&usqp=CAU" alt="" />LinkedIn/Viviane Santos</a>
    <a href="https://github.com/jsvivis"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" alt="icon git" />Github/jsvivis</a>
    <a href="email123@gmail.com"><img src="https://static.vecteezy.com/system/resources/previews/012/909/513/original/purple-mail-icon-free-png.png" alt="" />email123@gmail.com</a>
    <a href=""><img src="https://static.vecteezy.com/system/resources/previews/011/338/344/non_2x/contact-icon-with-phone-symbol-free-png.png" alt="" />(32) 9 9999-9999</a>
</footer>

<footer2>
  <strong>Projeto produzido e desenvolvido em React.
<img src="./img/react.png" alt="React" />
  </strong>
  <span>React (também denominado React.js) é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. <br />
<li>Desenvolvedor:	Facebook</li>
<li>Autor:	Jordan Walke</li>
<li>Plataforma:	Multiplataforma</li>
<li>Linguagem:  JavaScript</li>
<li>Modelo do desenvolvimento:	Software de código aberto</li>
<li>Sistema operativo:	Multiplataforma</li>
  </span>  
  
</footer2>


    </aside>
  )
}
