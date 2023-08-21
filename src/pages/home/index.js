import home from './img/home.jpg'
import styles from './Home.module.css'

const Home = () => {
    return <> <div className={styles['Home']}><h1 >Homework #19 React Routers</h1>
        <img src={home} alt='' />
    </div>
    </>
}

export default Home