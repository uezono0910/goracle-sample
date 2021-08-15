import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "pages/_app.js";
import styles from "styles/pages/index.module.css";
import Header from "components/header";
import Contact from "components/contact";
import Footer from "components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>株式会社Goracle</title>
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
      <section>
        <div className={styles.top_wrapper}>
          <div className={styles.container}>
            <div className={styles.top_inner}>
              <div className={styles.top_img}>
                <video autoPlay muted src={"/video/top-mv.mp4"}></video>
              </div>
              <div className={styles.top_item}>
                <h2 className={styles.top_text}>
                  ITで<span>娯楽</span>を<br />
                  日常にする
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.service}>
        <div className={styles.container}>
          <div className={styles.service_inner}>
            <h2 className={styles.service_title}>Service</h2>
            <h3 className={styles.service_title_sub}>サービス</h3>
            <div className={styles.service_items}>
              <div className={styles.service_main}>
                <p className={styles.service_text}>
                  お客さまのビジネス課題を解決する、総合的なご提案をいたします。
                </p>
                <Link href="/service">
                  <div className={`${styles.service_btn} ${styles.btn_r}`}>
                    <p className={`${styles.btn_text} ${styles.text_o}`}>
                      詳しく見る
                    </p>
                  </div>
                </Link>
              </div>
              <div className={styles.service_item}>
                <div className={styles.development}>
                  <Link href="/service">
                    <div className={styles.link_item}>
                      <div className={styles.img_box}>
                        <img
                          className={styles.development_img}
                          src={"/images/index/goracle-2.png"}
                          alt=""
                        />
                      </div>
                      <div className={styles.development_text}>
                        <h2>WEBシステム開発</h2>
                        <p>
                          弊社では、WEB業務システムの開発やSaaS開発支援を行っております。
                        </p>
                        <div className={styles.more_btn}>
                          <p>More</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={styles.support}>
                  <Link href="/recruit">
                    <div className={styles.link_item}>
                      <div className={styles.img_box}>
                        <img
                          className={styles.support_img}
                          src={"/images/index/goracle-3.png"}
                          alt=""
                        />
                      </div>
                      <div className={styles.support_text}>
                        <h2>EC構築・運用支援</h2>
                        <p>
                          WEBシステム開発で培った技術力を使い、Shopifyによるネットショップの構築を行います。
                        </p>
                        <div className={styles.more_btn}>
                          <p>More</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.news}>
        <div className={styles.container}>
          <div className={styles.news_inner}>
            <h2 className={styles.news_title}>News</h2>
            <h3 className={styles.news_title_sub}>最新情報</h3>
            <div className={styles.news_items}>
              <Link href="/news/news_2">
                <div className={styles.news_item}>
                  <p className={styles.news_date}>2021.05.01</p>
                  <span>お知らせ</span>
                  <p className={styles.news_text}>
                    サイトのリニューアルを致しました。
                  </p>
                </div>
              </Link>
            </div>
            <Link href="/news">
              <div className={`${styles.news_btn} ${styles.btn_r}`}>
                <p className={`${styles.btn_text} ${styles.text_w}`}>
                  すべて見る
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}
