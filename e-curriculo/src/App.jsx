import './styles.global.css'
import {Header} from './Componentes/Header.jsx'
import {Sidebar} from './Componentes/Sidebar.jsx'
import {Post} from './Componentes/Post.jsx'
import styles from './App.module.css'
import {Footer} from './Componentes/Footer.jsx'

export function App(){
  return (
   <div>
     <Header/>
<div className={styles.wrapper}>
  <Sidebar/>

<main>
 <Post/>
</main>

<Footer/>


</div>

   </div>
   
   
  );
}