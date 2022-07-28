import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { useState } from 'react'





const Timer: NextPage = () => {

  const [timer, setTimer] = useState<number | null>(0);

  function handleReset() {
    setTimer(90)
  }
  
  function handleStart() {
    setTimer(0)
  }
  
  return (
      <Layout>
        <div>
          <h1>This is the Timer page</h1>
          <div>
            <text>{timer}</text>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </Layout>
  )
}

export default Timer