import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound(){
  return (
    <div className={`container ${styles.notfoundRoot}`}>
      <h1>404 — Page not found</h1>
      <p>The page you requested doesn't exist (or has moved).</p>
      <Link to="/">Go back home</Link>
    </div>
  )
}
