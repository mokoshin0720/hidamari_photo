import { FC, Fragment } from "react";
import Layout from "src/components/layout";
import style from "src/pages/contact.module.css";

const Contact: FC = () => {
  return (
    <Fragment>
      <Layout>
        <div className={style.container}>

        <div className={style.title}>
          <h1>予約・お問い合わせ</h1>
        </div>

        <form action="">
          <div>
            <label htmlFor="">お名前（必須）</label>
            <br />
            <input type="text" className={style.inputText} />
          </div>

          <div>
            <label htmlFor="">メールアドレス（必須）</label>
            <br />
            <input type="text" className={style.inputText} />
          </div>

          <div>
            <label htmlFor="">TEL（必須）</label>
            <br />
            <input type="text" className={style.inputText} />
          </div>

          <div>
            <label htmlFor="">撮影される方のお名前・年齢</label>
            <br />
            <input type="text" className={style.inputText} />
          </div>

          <div>
            <label htmlFor="">ご質問・ご希望内容</label>
            <br />
            <textarea placeholder="日時、シチュエーション、ご準備いただくものなどぜひご相談ください♪" />
          </div>

          <div className={style.submitContainer}>
            <input type="submit" className={style.submit} />
          </div>
        </form>
        </div>

      </Layout>
    </Fragment>
  );
};

export default Contact;
