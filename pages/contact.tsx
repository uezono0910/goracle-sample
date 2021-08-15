import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "pages/_app.js";
import styles from "styles/pages/contact.module.css";
import Header from "components/header";

import Footer from "components/footer";

export default function Contact() {
  return (
    <>
      <Header />
      {/* お問い合わせフォーム */}
      <section className={styles.contact}>
        <h3>現在準備中です。</h3>
      </section>
      　
      <Footer />
    </>
  );
}
