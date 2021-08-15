import { useState } from "react";
import Link from "next/link";
import "pages/_app.js";
import styles from "styles/components/header.module.css";
import Image from "next/image";

function Header() {
  const [menu, setState] = useState(false);
  const handleMenu = () => {
    setState(!menu);
    console.log("OK");
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_inner}>
          <h1 className={styles.header_logo}>
            <Link href="/">
              <img
                className={styles.image}
                src={"/images/index/goracle_logo_yoko.png"}
                alt=""
              />
            </Link>
          </h1>
          <div className={styles.hamburger_menu}>
            <label
              htmlFor="menu-btn-check"
              className={styles.menu_btn}
              onClick={handleMenu}
            >
              <span></span>
            </label>
          </div>
          <div className={styles.menu_content}>
            <ul className={styles.menu_lists}>
              <li className={styles.menu_list}>
                <Link href="/service">
                  <p className={styles.menu_text}>Service</p>
                </Link>
              </li>
              <li className={styles.menu_list}>
                <Link href="/about-us">
                  <p className={styles.menu_text}>AboutUs</p>
                </Link>
              </li>
              <li className={styles.menu_list}>
                <Link href="/recruit">
                  <p className={styles.menu_text}>Recruit</p>
                </Link>
              </li>
              <li className={styles.menu_list}>
                <Link href="/contact">
                  <p className={`${styles.menu_text} ${styles.menu_text_w}`}>
                    Contact
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          {menu && (
            <>
              <div className={styles.hamburger_menu}>
                <label
                  htmlFor="menu-btn-check"
                  className={styles.menu_btn_check}
                  onClick={handleMenu}
                >
                  <span></span>
                </label>
              </div>
              <div className={styles.menubar_content}>
                <ul className={styles.menubar_lists}>
                  <li className={styles.menubar_list}>
                    <Link href="/service">
                      <p className={styles.menubar_text}>Service</p>
                    </Link>
                  </li>
                  <li className={styles.menubar_list}>
                    <Link href="/about-us">
                      <p className={styles.menubar_text}>AboutUs</p>
                    </Link>
                  </li>
                  <li className={styles.menubar_list}>
                    <Link href="/recruit">
                      <p className={styles.menubar_text}>Recruit</p>
                    </Link>
                  </li>
                  <li className={styles.menubar_list}>
                    <Link href="/contact">
                      <p className={styles.menubar_text}>
                        Contact
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
