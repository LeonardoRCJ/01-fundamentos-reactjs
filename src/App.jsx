import { Header } from "./components/Header";
import { Post } from"./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css'

import style from './App.module.css'

const posts = [
{
  id: 1,
  author: {
    avatarUrl: 'https://github.com/LeonardoRCJ.png',
    name: 'Leonardo Rocha',
    role: 'Back End Developer'
  },
  content:[
    'Fala galeraa 👋',
    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
    '<a href="">jane.design/doctorcare</a>',
                                       
'<a href="">#novoprojeto</a> {' '}',
'<a href="">#nlw</a> {' '}',
'<a href="">#rocketseat</a>{' '}',
           
  ] 
},

];

export function App() {

return (
  <div>
    <Header />

    <div className={style.wrapper}>
      <Sidebar />
      <main>
      <Post
        author = "Leonardo Rocha"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique voluptatum suscipit et voluptas optio, asperiores sint expedita quasi in. Neque praesentium suscipit officiis itaque quas nobis numquam incidunt nesciunt."
      />
      <Post 
        author = "Julia Ellen"
        content = "Eu amo meu marido"
      /> 
      </main>
    </div>     
</div>
  )
}

