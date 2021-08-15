import Head from "next/head";
import Image from "next/image";
import "pages/_app.js";
import styles from "styles/pages/about-us.module.css";
import Header from "components/header";
import Contact from "components/contact";
import Footer from "components/footer";

export default function About() {
  return (
    <>
      <Head>
        <title>about-us</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <section className={styles.top_wrapper}>
        <div className={styles.container}>
          <div className={styles.top_inner}>
            <div className={styles.top_item}>
              <img src={"images/about/about-us_mv.png"} alt="" /> 
            </div>
            <div className={`${styles.top_item} ${styles.top_text}`}>
              <div className={styles.title_box}>
                <div className={styles.title_item}>
                  <h2>About Us</h2>
                  <h3>会社概要</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.company}>
        <div className={styles.container}>
          <div className={styles.company_inner}>
            <div className={styles.company_item}>
              <ul className={styles.company_lists}>
                <li className={styles.company_list}>
                  <span>社名</span>
                  <p>株式会社Ｇｏｒａｃｌｅ / Goracle Inc.</p>
                </li>
                <li className={styles.company_list}>
                  <span>代表取締役</span>
                  <p>上園　蒼</p>
                </li>
                <li className={styles.company_list}>
                  <span>所在地</span>
                  <p>
                    東京都台東区台東１丁目２７番１１号 佐藤第二ビル ３階
                    ３０３号室
                  </p>
                </li>
                <li className={styles.company_list}>
                  <span>設立</span>
                  <p>２０１７年４月</p>
                </li>
                <li className={styles.company_list}>
                  <span>事業内容</span>
                  <p>Webシステム開発</p>
                </li>
              </ul>
            </div>
            <div className={styles.map}>
              <iframe
                className={styles.map_item}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.995063940026!2d139.77470101525944!3d35.70173908018956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea661cce9cf%3A0x2bb5377322b327ec!2z44CSMTEwLTAwMTYg5p2x5Lqs6YO95Y-w5p2x5Yy65Y-w5p2x77yR5LiB55uu77yS77yX4oiS77yR77yRIOS9kOiXpOesrOS6jOODk-ODqyDvvJPpmo4g77yT77yQ77yT5Y-35a6k!5e0!3m2!1sja!2sjp!4v1622888914825!5m2!1sja!2sjp"
                allow="fullscreen"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
