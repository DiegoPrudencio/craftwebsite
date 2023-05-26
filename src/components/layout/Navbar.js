import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'
// import Container from './Container'

function Navbar() {

    return (

        <nav className={styles.navbar}>
            {/* <Container> */}
            {/* <Home />
            <Contact /> */}
                <ul className={styles.list}>
                    <li className={styles.item}><Link exatc to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/catalog">Catálogo</Link></li>
                    <li className={styles.item}><Link to="/contact">Contato</Link></li>
                </ul>
            {/* </Container> */}
            {/*                     <li className={styles.item}><Link exatc to="/projects">Projetos</Link></li>
                    <li className={styles.item}><Link to="/company">Empresa</Link></li> */}
        </nav>

    )

}

export default Navbar