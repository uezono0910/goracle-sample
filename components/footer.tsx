import Link from "next/link";
import "pages/_app.js";
import styles from "styles/components/footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_inner}>
          <div className={styles.footer_items}>
            <div className={styles.goracle}>
              <div className={styles.goracle_item}>
                <img
                  className={styles.goracle_image}
                  src={"/images/footer/goracle_logo.png"}
                  alt=""
                />
              </div>
              <ul className={styles.goracle_list}>
                <li className={styles.goracle_menu}>
                  <Link href="/service">
                    <p>Service</p>
                  </Link>
                </li>
                <li className={styles.goracle_menu}>
                  <Link href="/about-us">
                    <p>About Us</p>
                  </Link>
                </li>
                <li className={styles.goracle_menu}>
                  <Link href="/recruit">
                    <p>Recruit</p>
                  </Link>
                </li>
                <li className={styles.goracle_menu}>
                  <Link href="/">
                    <p>Contact</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.partner}>
              <h2>Partner</h2>
              <div className={styles.partner_item}>
                <Link href="/">
                  <img className={styles.image} src={"/images/footer/shopify_logo_black.png"} alt=""/>
                </Link>
              </div>
            </div>
            <div className={styles.facebook}>
              <h2>Facebook</h2>
              <div className={styles.facebook_item}></div>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>©️2021 Goracle Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
