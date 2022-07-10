import { FC, Fragment } from "react";
import Layout from "src/components/layout";
import photographerImg from "src/assets/images/photographer/person.png";
import style from "src/pages/photographer.module.css";
import MediaQuery from "react-responsive";

const Photographer: FC = () => {
  const introduction = `子ども写真館での店長経験あり。\nお子様一人一人と向き合い、自然な表情を引き出します♪\nお子様にもご家族の皆様にも安心して楽しんでいただけるよう\nたくさんコミュニケーションをとりながら撮影致します。`
  const mediaIntroduction = `子ども写真館での店長経験あり。\nお子様一人一人と向き合い、\n自然な表情を引き出します♪\nお子様にもご家族の皆様にも安心して\n楽しんでいただけるように沢山\nコミュニケーションをとりながら撮影致します。`

  return (
    <Fragment>
      <Layout>
        <div className={style.background}>
          <div className={style.titleContainer}>
            <h1 className={style.photographerTitle}>Photographer</h1>
          </div>

          <div className={style.imgContainer}>
            <img src={photographerImg} alt="photographer" className={style.photographerImg} />
          </div>

          <div className={style.introductionContainer}>
            <h2 className={style.introductionTitle}>かなた あかり</h2>
            <MediaQuery query="(max-width: 480px)" >
              <p className={style.introductionText}>{mediaIntroduction}</p>
            </MediaQuery>

            <MediaQuery query="(min-width: 481px)" >
            <p className={style.introductionText}>{introduction}</p>
            </MediaQuery>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Photographer;
