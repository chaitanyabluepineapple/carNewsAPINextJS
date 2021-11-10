import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const router = useRouter();
    return ( 
        <>
        <div className={styles.main}>
            <div onClick={() => router.push('/')}><b>News</b></div>
            <div onClick={() => router.push('/top-sources')}><b>Sources</b></div>
            <div onClick={() => router.push('/Search')}><b>Search</b></div>
        </div>
        </>
    );
}
 
export default Navbar;