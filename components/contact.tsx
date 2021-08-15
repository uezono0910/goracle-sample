import Link from "next/link";
import styles from "styles/components/contact.module.css";
import "pages/_app.js";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contact_inner}>
          <p className={styles.contact_text}>
            各種ご相談は下記よりお問い合わせください。
          </p>
          <div className={styles.contact_item}>
            <Link href="/contact">
              <div
                className={`${styles.contact_btn} ${styles.btn_l} ${styles.btn_left}`}
              >
                <p className={`${styles.btn_text} ${styles.text_o}`}>
                  WEBシステム開発はこちら
                </p>
              </div>
            </Link>
            <Link href="/shopify">
              <div className={`${styles.contact_btn} ${styles.btn_l}`}>
                <p className={`${styles.btn_text} ${styles.text_o}`}>
                  EC構築・運用支援はこちら
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
