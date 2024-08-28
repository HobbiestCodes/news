import React from 'react'
import styles from './styles.module.scss';
import BlogCard from '@/components/core/cards/blog/BlogCard';


function Featured() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Featured News</h1>
    <div className={styles.child}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />

    </div>
    </div>
  )
}

export default Featured