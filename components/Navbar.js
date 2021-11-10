import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'
import Searchbox from '../pages/headlines/Searchbox';

const Navbar = () => {
    const router = useRouter();
    return ( 
        <>
        <div className={styles.main}>
            <div onClick={() => router.push('/')}><b>Home</b></div>
            <div onClick={() => router.push('/headlines/allheadlines')}><b>News</b></div>
            <div onClick={() => router.push('/headlines/pagesourceslist')}><b>Sources</b></div>
            <div onClick={() => router.push('/headlines/Searchbox')}><b>Search</b></div>
        </div>
        </>
    );
}
 
export default Navbar;