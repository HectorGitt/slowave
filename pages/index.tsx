import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import coin from "../public/images/coin.png"
import logo from "../public/images/logo1.png"
import logoFade from "../public/images/logo2.png"
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Slowave</title>
      </Head>
      <header className={styles.header}>
      <nav>
        <div className={styles.mainlogo}>
          {/* Use next image for better optimization
          Change classname 
          */}
          <Image priority={true} src={logo} alt="logo" className={styles.logo} /> 
          <span>SLOWAVE</span>
          
          </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.body}>
          <div className={styles.maintitle}>
            <h2 className={styles.title1}>Investing in the <br /> future of web3</h2>
            <h4  className={styles.title2}>We invest in daring Web3 founders with <br /> disruptive ideas.</h4>
          </div>
          <div className={styles.image_cont}>
            <Image priority={true} src={coin} className={styles.coin} alt="coin" />
          </div>
        </div>

        
      </main>
      </header>
      <footer className={styles.mainFooter}>
        <div>
      <section className={styles.footersection}>
        <div>
          <h2 className={styles.footertitle}>HAVE A BREATHTAKING IDEA?</h2>
          <a href='mailto:pitch@slowave.vc' className={styles.footert2}>pitch@slowave.vc</a>
        </div>
        <div>
          <h3 className={styles.media}>Follow us on                   
          <span className={styles.span}>
              <FontAwesomeIcon icon={faTwitter} className = {styles.fonticon} style={{color:"#1143C5", marginLeft: "10"}}/>
          </span>
          </h3>
        </div>
        
        </section>
        <div className={styles.line}></div>

      <div className={styles.footer}>
        <div className={styles.footerimg}>
          <Image priority={true} src={logoFade} alt="logo" className={styles.logo3} /> 
          <span>SLOWAVE</span>
        </div> 
        <div>
         <h3 className={styles.footerright}> &copy; 2022 Slowave. All Rights Reserved</h3>
        </div>      
      </div>
      </div>
      </footer>
     
    </div>
  )
}

export default Home
