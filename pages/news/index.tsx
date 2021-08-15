import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "pages/_app.js";
import styles from "styles/pages/news.module.css";
import Header from "components/header";
import Contact from "components/contact";
import Footer from "components/footer";

export default function News() {
  return (
    <>
      <Head>
        <title>news</title>
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
              <img src={"images/news/news_mv.png"} alt="" />
            </div>
            <div className={`${styles.top_item} ${styles.top_text}`}>
              <div className={styles.title_box}>
                <div className={styles.title_item}>
                  <h2>News</h2>
                  <h3>お知らせ</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.news}>
        <div className={styles.container}>
          <div className={styles.news_inner}>
            <div className={styles.news_mein}>
              <ul className={styles.news_list}>
                <li className={styles.news_item}>
                  <Link href="/">
                    <div className={styles.news_img}>
                      <img src={"images/news/top_product_03.png"} alt="" />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className={styles.news_title}>
                      <h2>タイトルタイトル</h2>
                    </div>
                  </Link>
                  <div className={styles.news_text}>
                    <p className={styles.news_date}>2021.01.01</p>
                    <Link href="/">
                      <span className={styles.news_btn}>お知らせ</span>
                    </Link>
                  </div>
                </li>
                <li className={styles.news_item}>
                  <Link href="/">
                    <div className={styles.news_img}>
                      <img src={"images/news/top_product_03.png"} alt="" />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className={styles.news_title}>
                      <h2>タイトルタイトル</h2>
                    </div>
                  </Link>
                  <div className={styles.news_text}>
                    <p className={styles.news_date}>2021.01.01</p>
                    <Link href="/">
                      <span className={styles.news_btn}>お知らせ</span>
                    </Link>
                  </div>
                </li>
                <li className={styles.news_item}>
                  <Link href="/">
                    <div className={styles.news_img}>
                      <img src={"images/news/top_product_03.png"} alt="" />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className={styles.news_title}>
                      <h2>タイトルタイトル</h2>
                    </div>
                  </Link>
                  <div className={styles.news_text}>
                    <p className={styles.news_date}>2021.01.01</p>
                    <Link href="/">
                      <span className={styles.news_btn}>お知らせ</span>
                    </Link>
                  </div>
                </li>
                <li className={styles.news_item}>
                  <Link href="/">
                    <div className={styles.news_img}>
                      <img src={"images/news/top_product_03.png"} alt="" />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className={styles.news_title}>
                      <h2>タイトルタイトル</h2>
                    </div>
                  </Link>
                  <div className={styles.news_text}>
                    <p className={styles.news_date}>2021.01.01</p>
                    <Link href="/">
                      <span className={styles.news_btn}>お知らせ</span>
                    </Link>
                  </div>
                </li>
                <li className={styles.news_item}>
                  <Link href="/">
                    <div className={styles.news_img}>
                      <img src={"images/news/top_product_03.png"} alt="" />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className={styles.news_title}>
                      <h2>タイトルタイトル</h2>
                    </div>
                  </Link>
                  <div className={styles.news_text}>
                    <p className={styles.news_date}>2021.01.01</p>
                    <Link href="/">
                      <span className={styles.news_btn}>お知らせ</span>
                    </Link>
                  </div>
                </li>
                <li className={styles.news_item}>
                  <Link href="/">
                    <div className={styles.news_img}>
                      <img src={"images/news/top_product_03.png"} alt="" />
                    </div>
                  </Link>
                  <Link href="/">
                    <div className={styles.news_title}>
                      <h2>タイトルタイトル</h2>
                    </div>
                  </Link>
                  <div className={styles.news_text}>
                    <p className={styles.news_date}>2021.01.01</p>
                    <Link href="/">
                      <span className={styles.news_btn}>お知らせ</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.news_nav}>
              <div className={styles.category}>
                <div className={styles.nav_title}>
                  <span></span>
                  <h2>カテゴリー</h2>
                </div>
                <ul className={styles.nav_menu}>
                  <li className={styles.nav_item}>
                    <Link href="/">
                      <p className={styles.nav_text}>カテゴリー名</p>
                    </Link>
                  </li>
                  <li className={styles.nav_item}>
                    <Link href="/">
                      <p className={styles.nav_text}>カテゴリー名</p>
                    </Link>
                  </li>
                  <li className={styles.nav_item}>
                    <Link href="/">
                      <p className={styles.nav_text}>カテゴリー名</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.articles}>
                <div className={styles.nav_title}>
                  <span></span>
                  <h2>最新の記事</h2>
                </div>
                <ul className={styles.nav_menu}>
                  <li className={styles.nav_item}>
                    <Link href="/">
                      <p className={styles.nav_text}>タイトルタイトル</p>
                    </Link>
                  </li>
                  <li className={styles.nav_item}>
                    <Link href="/">
                      <p className={styles.nav_text}>タイトルタイトル</p>
                    </Link>
                  </li>
                  <li className={styles.nav_item}>
                    <Link href="/">
                      <p className={styles.nav_text}>タイトルタイトル</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}
