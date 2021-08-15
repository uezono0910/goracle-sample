import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "pages/_app.js";
import styles from "styles/pages/service.module.css";
import Header from "components/header";
import Contact from "components/contact";
import Footer from "components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>service</title>
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
              <img src={"images/service/service_mv.png"} alt="" />
            </div>
            <div className={`${styles.top_item} ${styles.top_text}`}>
              <div className={styles.title_box}>
                <div className={styles.title_item}>
                  <h2>Service</h2>
                  <h3>サービス</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.development}>
        <div className={styles.container}>
          <div className={styles.development_inner}>
            <div
              className={`${styles.development_item} ${styles.development_left}`}
            >
              <img src={"images/service/goracle-2.png"} alt="" />
            </div>
            <div className={styles.development_item}>
              <h2>WEBシステム開発</h2>
              <p>
                React, Angular,
                Vue等のJavaScriptフレームワークによるフロントエンド開発を行なっています。
                また、コーディング等も対応可能なため、Webサイト制作やLP制作も行なっています。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.details}>
        <div className={styles.container}>
          <div className={styles.details_inner}>
            <div className={styles.details_top}>
              <div className={styles.details_item}>
                <img
                  src={"images/service/service_web-development.png"}
                  alt=""
                />
                <div className={styles.details_text}>
                  <p>開発費目安：1人月70〜120万円</p>
                  <p>※開発規模によって前後いたします。</p>
                </div>
              </div>
            </div>
            <div className={styles.details_bottom}>
              <div className={styles.details_texts}>
                <h2>フロントエンド開発</h2>
                <p>
                  モックアップ作成、プロダクト製造、保守開発を行います。
                  React、Vue、Angular等のJSフレームワークによるアジャイル開発にて行うため、柔軟な対応が可能です。
                </p>
              </div>
              <div className={styles.details_texts}>
                <h2>API開発</h2>
                <p>
                  Laravel(PHP), Ruby on Rails,
                  FastAPI(Python)等のフレームワークにてAPIの開発を行います。
                </p>
              </div>
              <div
                className={`${styles.details_texts} ${styles.details_bottom_right}`}
              >
                <h2>ツール開発(バッチ)</h2>
                <p>
                  バッチ開発やエクセルツール開発等の業務に関わる小規模ツール作成まで幅広く対応致します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.support}>
        <div className={styles.container}>
          <div className={styles.support_inner}>
            <div className={styles.support_item}>
              <h2>EC構築・運用支援</h2>
              <p className={styles.support_text}>
                グローバルスタンダートとなりつつあるShopifyを使ったネットショップの構築や運営代行を行っています。
                Shopifyサイトの構築や自社システムの連携など、クライアント様のShopifyに関連した業務をトータルサポート致します。
              </p>
              <Link href="/">
                <div className={`${styles.support_btn} ${styles.btn_r}`}>
                  詳しく見る
                </div>
              </Link>
            </div>
            <div className={styles.support_item}>
              <div className={styles.support_right}>
                <img src={"images/service/goracle-3.png"} alt="" />
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
