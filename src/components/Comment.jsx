import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comments.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/LeonardoRCJ.png" alt=""/>

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Leonardo Rocha</strong>
                            <time title="11 de maio às 08:13" dateTime="2022-05-11:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                    <footer>
                        <button >
                            <ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
            </div>
        </div>

    )
}