import Head from 'next/head'
import Image from 'next/image'
import iconCup from '../static/graphics/icons/icon-cup.png'
// import styles from '../static/styles/modules/index.module.scss'

export default function Home() {
  return <div className="page">
    <div className="header">
      <div className="logo">
          {/* <div className={styles["logo-icon"]}></div> */}
          <Image className="logo-icon" src={iconCup}/>
          <div className="logo-text">
            <div className="logo-text-main">MAIN</div>
            <div className="logo-text-sub">GOOOD RECYCLE</div>
          </div>
      </div>
        <div>NENU</div>
      <div className="login-button">LOGIN</div>
    </div>
    <div className="header"></div>
  </div>
}
