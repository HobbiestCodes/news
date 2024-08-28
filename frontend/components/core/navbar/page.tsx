import React from 'react'
import styles from './styles.module.scss';

function Navbar() {
    const tabs = ['Home', 'Latest news', 'Politics' ,'Sports', 'Viral', 'Entertainment', 'Video News']
  return (
    <nav className={styles.nav}>
    <div className={styles.logo}>
        <h1>News</h1>
        </div>

    <ul>
       {tabs.map((tab) => <li key={tab}>{tab}</li>)}
    </ul>
</nav>
  )
}

export default Navbar