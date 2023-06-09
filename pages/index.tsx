import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'sample/styles/Home.module.css'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GiMoneyStack} from "react-icons/gi";
import {IoMdPizza} from "react-icons/io";
import {MdLocationOn} from "react-icons/md";
import {IoMdCall} from "react-icons/io";
import {AiOutlineMail} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";

const inter = Inter({ subsets: ['latin'] })

function scrl(){
    window.scroll({
      top:0,
      behavior:"smooth",
    });
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Oleo Script Swash Caps' rel='stylesheet'></link>
      </Head>
      <main className={styles.main}>
     <section className={styles.hero} id="hero">
    <Image className={styles.bgimg} src='/cookbookbghd.jpg' alt="" width={1200} height={700}/>
    <div className={styles.webname}>
        <h1>RecipeHouse.com</h1>
        <br /><br /><br />
        <h3>An AI powered platform to monetize your recipes.</h3>
        <br /><br />
        <Link href={'/signup'}><button className={styles.opbtnsell}>Buy <AiOutlineShoppingCart/></button></Link>
        <br /><br />
        <Link href={'/signup'}><button className={styles.opbtnsell}>Sell <GiMoneyStack/></button></Link>
    </div>
     </section>

      <br /><br />
        <br /><br />

      <button className={styles.scrolltotop} id="sctpbtn" onClick={scrl}><IoMdPizza/></button>
      <div className={styles.bannerscont}>
        <h1>WHY US?</h1>
        <div className={styles.bc}>
      <Image 
        src={'/securedicon.png'}
        alt=""
        className={styles.banner}
        width={250}
        height={250}
      /><p>Security</p>
      </div>
      <div className={styles.bc}>
      <Image 
        src={'/speedicon.png'}
        alt=""
        className={styles.banner}
        width={250}
        height={250}
      /><p>Speed</p>
      </div>
      <div className={styles.bc}>
      <Image 
        src={'/smileicon.png'}
        alt=""
        className={styles.banner}
        width={250}
        height={250}
      /><p>Ease</p>
      </div>

        </div>
        <br /><br />
        <br /><br /> <br /><br />
        <h1 className={styles.contactus}>CONTACT</h1>
        <div className={styles.contactcont}>
          <input type="text" placeholder='Name...'/>
          <input type="email" placeholder='Email...'/>
          <textarea placeholder='Query...'></textarea>
          <button>Send</button>
          <br/><br />
          {/* <Image
            src="/graphgrow.jpg"
            alt=""
            width={600}
            height={400}
          /> */}
        </div>
        <br /><br /> <br /><br />
        <div className={styles.footer}>
          <div className={styles.footcols}>
            <div className={styles.footrow}>
            <h1><MdLocationOn/> Solapur, Maharashtra, India</h1>
            </div>
            <div className={styles.footrow}>
            <h1><IoMdCall/> 91-7972364650</h1>
            </div>
            <div className={styles.footrow}>
              <h1><AiOutlineMail/> arjundshinde26@gmail.com</h1>
            </div>
          </div>
          <div className={styles.footcols}>
          <div className={styles.footrow}>
            <Link href={'#'}><button className={styles.socials}><BsFacebook/></button></Link>
            <Link href={'#'}><button className={styles.socials}><AiFillInstagram/></button></Link>
            <Link href={'#'}><button className={styles.socials}><AiFillLinkedin/></button></Link>
            </div>
          </div>
        </div>
        </main>
    </>
  )
}
