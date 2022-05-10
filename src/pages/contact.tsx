import { FC, Fragment } from "react";
import Layout from "src/components/layout";

const Contact: FC = () => {
  return (
    <Fragment>
      <Layout>
        <h1>予約・お問い合わせ</h1>

        <form action="">
          <div>
            <label htmlFor="">お名前（必須）</label>
            <br />
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">メールアドレス（必須）</label>
            <br />
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">TEL（必須）</label>
            <br />
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">撮影される方のお名前・年齢</label>
            <br />
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">ご質問・ご希望内容</label>
            <br />
            <input type="text" placeholder="日時、シチュエーション、ご準備いただくものなどぜひご相談ください♪" />
          </div>

          <input type="submit" />
        </form>

      </Layout>
    </Fragment>
  );
};

export default Contact;
