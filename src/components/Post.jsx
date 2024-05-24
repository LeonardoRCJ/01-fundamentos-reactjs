import { Avatar } from './Avatar';
import { Comment } from './Comment';
import style from './Post.module.css';


export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder={true} src="https://github.com/LeonardoRCJ.png"/>
                    <div className={style.authorInfo}>
                        <strong>Leonardo Rocha</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13" dateTime="2022-05-11:13:30">Públicado a 1hr</time>
            </header>

        <div className={style.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p> <a href="">jane.design/doctorcare</a></p>

            <p>
                <a href="">#novoprojeto</a> {' '}
                <a href="">#nlw</a> {' '}
                <a href="">#rocketseat</a>{' '}
            </p>
        </div>

        <form className={style.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
                placeholder="Deixe um comentário"
               
            />

            <footer>
                <button type="submit">Publicar</button>
            </footer>

        </form>

        <div className={style.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
        </article>
    )
}