import styles from './App.module.css';

import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";


const App = () => {

    return (
        <>
            <nav className={styles.nav}>
                <Link to={'/'}>Git Your Gists</Link>
            </nav>

            <main className={styles.main}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </main>

            <Footer/>
        </>
    );
}

export default App;
