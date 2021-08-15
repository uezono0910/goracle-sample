import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "pages/_app.js";
import styles from "styles/pages/recruit.module.css";
import Header from "components/header";
import Footer from "components/footer";

export default function Recruit() {
  return (
    <>
      <Head>
        <title>リクルート - 株式会社Goracle</title>
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
              <img src={"images/recruit/recruit_mv.png"} alt="" />
            </div>
            <div className={`${styles.top_item} ${styles.top_text}`}>
              <div className={styles.title_box}>
                <div className={styles.title_item}>
                  <h2>Recruit</h2>
                  <h3>採用情報</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.recruit_type}>
        <div className={styles.container}>
          <div className={styles.type_inner}>
            <div className={styles.type_item}>
              <div className={styles.type_texts}>
                <h2>業務委託</h2>
                <p>エンジニア、営業の業務を行っていただきます。</p>
              </div>
              <div className={styles.type_texts}>
                <h2>正社員</h2>
                <p>各種マネジメント業務を行っていただきます。</p>
              </div>
              <div className={`${styles.type_texts} ${styles.type_item_right}`}>
                <h2>アルバイト</h2>
                <p>
                  ネットショップ構築・運用に関わる業務を行っていただきます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.description}>
        <div className={styles.container}>
          <div className={styles.description_inner}>
            <h2 className={styles.description_title}>募集要項</h2>
            <ul className={styles.description_list}>
              <li className={styles.description_item}>
                <p className={styles.description_left}>募集要項</p>
                <div className={styles.description_right}>
                  <div
                    className={`${styles.description_texts} ${styles.description_text_top}`}
                  >
                    <p>【技術系職種】</p>
                    <p>・エンジニア</p>
                  </div>
                  <div className={styles.description_texts}>
                    <p>【営業系職種】</p>
                    <p>・営業職</p>
                  </div>
                </div>
              </li>
              <li className={styles.description_item}>
                <p className={styles.description_left}>業務内容</p>
                <div className={styles.description_right}>
                  <div
                    className={`${styles.description_texts} ${styles.description_text_top}`}
                  >
                    <p>・アプリケーションソフトウェアの設計・開発</p>
                    <p>
                      エンジニアとしてシステム設計、開発を行っていただきます。
                    </p>
                  </div>
                  <div className={styles.description_texts}>
                    <p>・営業</p>
                    <p>
                      提案型のソリューション営業、システム製品・サービスの販売活動を行っていただきます。
                    </p>
                  </div>
                </div>
              </li>
              <li className={styles.description_item}>
                <p className={styles.description_left}>募集対象</p>
                <div className={styles.description_right}>
                  <div className={styles.description_texts}>
                    <p>
                      ・新しい技術が好きな方。
                      <br />
                      ・能動的に行動し、積極的な提案を行える方。
                    </p>
                  </div>
                </div>
              </li>
              <li className={styles.description_item}>
                <p className={styles.description_left}>勤務時間</p>
                <div className={styles.description_right}>
                  <div className={styles.description_texts}>
                    <p>フレックス制</p>
                  </div>
                </div>
              </li>
              <li className={styles.description_item}>
                <p className={styles.description_left}>福利厚生</p>
                <div className={styles.description_right}>
                  <div className={styles.description_texts}>
                    <p>各種社会保険、家賃補助</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contact_inner}>
            <p className={styles.contact_text}>
              各種ご相談は下記よりお問い合わせください。
            </p>
            <div className={styles.contact_item}>
              <Link href="">
                <div className={`${styles.contact_btn} ${styles.btn_l}`}>
                  <p className={`${styles.btn_text} ${styles.text_o}`}>
                    採用についてのお問い合わせ
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
