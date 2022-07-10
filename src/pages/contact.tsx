import { FC, Fragment, useState } from "react";
import Layout from "src/components/layout";
import style from "src/pages/contact.module.css";
import { init, send } from 'emailjs-com';

const Contact: FC = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const sendMail = (e:any) => {
    e.preventDefault()

    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID)

      const template_param = {
        to_name: name,
        from_email: mail,
        title: title,
        message: message,
      }

      send(serviceID, templateID, template_param).then(() => {
        window.alert("お問い合わせを送信しました。")

        setName('')
        setMail('')
        setMessage('')
        setTitle('')
      })
    }
  }

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
            <input type="text" className={style.inputText} value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="">メールアドレス（必須）</label>
            <br />
            <input type="text" className={style.inputText} value={mail} onChange={(e) => setMail(e.target.value)}  />
          </div>

          <div>
            <label htmlFor="">TEL（必須）</label>
            <br />
            <input type="text" className={style.inputText} />
          </div>

          <div>
            <label htmlFor="">撮影される方のお名前・年齢</label>
            <br />
            <input type="text" className={style.inputText} value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <label htmlFor="">ご質問・ご希望内容</label>
            <br />
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
