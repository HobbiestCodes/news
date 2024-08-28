import React from 'react'
import styles from './styles.module.scss';
import {IoIosArrowRoundForward} from 'react-icons/io'
import demo from '@/public/demo2.jpg'
import Navbar from '@/components/core/navbar/page';

function HomeSection() {
  return (
    <div className={styles.container}>
        <div className={styles.child}>
            <img src={demo.src} alt="image" />
            <Navbar />
            <div className={styles.newsBox}>
                <h1>Breaking news</h1>
                <div className={styles.content}>
                    <h2>Title of the news goes here describing the news letter and news topic briefly!</h2>

                    <div className={styles.catogery}>
                        <p>politics</p>
                        <p>latest</p>
                    </div>

                    <div className={`${styles.catogery} ${styles.second}`}>
                      <h4>Author • Date</h4>
                      <button>Read more <IoIosArrowRoundForward size={30} style={{transform: 'rotate(-45deg)'}}/></button>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection