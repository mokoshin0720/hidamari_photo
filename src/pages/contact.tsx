import { FC, Fragment, useState } from "react";
import Layout from "src/components/layout";
import style from "src/pages/contact.module.css";
import { init, send } from 'emailjs-com';

const Contact: FC = () => {
  const [name, setName] = useState('')
  const [baby, setBaby] = useState('')
  const [mail, setMail] = useState('')
  const [tel, setTel] = useState('')
  const [message, setMessage] = useState('')

  const sendMail = (e:any) => {
    e.preventDefault()

    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID)

      const template_param = {
        name: name,
        mail: mail,
        message: message,
        baby: baby,
        tel: tel,
      }

      send(serviceID, templateID, template_param).then(() => {
        window.alert("お問い合わせを送信しました。")

        setName('')
        setMail('')
        setTel('')
        setMessage('')
        setBaby('')
      })
    }
  }

  return (
    <Fragment>
      <Layout>
        <div className={style.container}>

        <div className={style.titleContainer}>
          <h1>予約・お問い合わせ</h1>
        </div>

        <form action="">
          <div>
            <label className={style.inputLabel}>お名前（必須）</label>
            <input type="text" className={style.inputText} value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label className={style.inputLabel}>メールアドレス（必須）</label>
            <input type="text" className={style.inputText} value={mail} onChange={(e) => setMail(e.target.value)}  />
          </div>

          <div>
            <label className={style.inputLabel}>TEL（必須）</label>
            <input type="text" className={style.inputText} value={tel} onChange={(e) => setTel(e.target.value)}  />
          </div>

          <div>
            <label className={style.inputLabel}>撮影される方のお名前・年齢</label>
            <input type="text" className={style.inputText} value={baby} onChange={(e) => setBaby(e.target.value)} />
          </div>

          <div>
            <label className={style.inputLabel}>ご質問・ご希望内容</label>
            <textarea placeholder="日時、シチュエーション、ご準備いただくものなどぜひご相談ください♪" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>

          <div className={style.submitContainer}>
            <input type="submit" className={style.submit} onClick={sendMail} />
          </div>
        </form>
        </div>

      </Layout>
    </Fragment>
  );
};

export default Contact;
