import { Comments } from './Comments'
import styles from './Post.module.css'

export function Post() {
  return (

    <article className={styles.post}>
<header>
<div className={styles.author}>
<img className={styles.avatar} src="https://images.vexels.com/media/users/3/147101/isolated/preview/
b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png" alt="imagem avatar" />
<div className={styles.authorInfo}>
    <strong >Nome Profissional</strong>
    <span>Cargo/Função</span>
</div>
</div>
  </header>
<div className={styles.content}>
   <p>Sobre Você</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea, accusamus quisquam modi consequuntur cumque officia voluptates nemo repellat. At, aperiam eligendi. Sint inventore illo dolore nulla eligendi numquam dignissimos velit quae non provident. Obcaecati rerum veniam et tempora assumenda suscipit illo inventore, facilis recusandae impedit soluta vitae sed ab.</p>

   <p><a href="">Link Repositorio</a></p>
   <p><a href="">Ultimo Projeto</a></p>
</div>

<form className={styles.commentsForm}>
    <strong>Experiência Profissional</strong>
</form>

<div>
<Comments/>

</div>

    </article>
  )
}
