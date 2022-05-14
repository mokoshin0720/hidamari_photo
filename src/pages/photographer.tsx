import { FC, Fragment } from "react";
import Layout from "src/components/layout";
import photographerImg from "src/assets/images/photographer/person.png";
import style from "src/pages/photographer.module.css";

const Photographer: FC = () => {
  const communication = `お子様にもご家族の皆様にも安心して楽しんでいただけるよう\nたくさんコミュニケーションをとりながら撮影致します。`

  return (
    <Fragment>
      <Layout>
        <div className={style.background}>
          <div className={style.titleContainer}>
            <h1>フォトグラファー</h1>
          </div>

          <div className={style.imgContainer}>
            <img src={photographerImg} alt="photographer" className={style.photographerImg} />
          </div>

          <div className={style.introduction}>
            <h2>かなた あかり</h2>
            <p>子ども写真館での店長経験あり。</p>
            <p>お子様一人一人と向き合い、自然な表情を引き出します♪</p>
            <p className={style.communication}>{communication}</p>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Photographer;
