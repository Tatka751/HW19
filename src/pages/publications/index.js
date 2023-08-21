import './App.css';
import { Post } from './components/Post.js';
import sw_foto from './assets/sw.png';
import autor_foto from './assets/autor.png';

const data = {
  author: {
    name: "Anakin skywalker",
    avatar: autor_foto,
    nickname: "@dart_vader"
  },
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  photo: sw_foto,
  date: "26 февр."

}
const Home = () => {
  return <div className="App">
    <Post {...data} />
  </div>
}

export default Home