import { FC, Fragment } from "react";
import Layout from "src/components/layout";
import style from "src/pages/price.module.css"

const Price: FC = () => {
  const couple = `ご夫婦おふたりでの撮影の場合、\n撮影基本料25,000円でデータ全てお渡し、\n2枚の四つ切サイズ写真を郵送させていただきます。`
  const Lsize = `データお渡し後2週間以内に限りデータをL判サイズで\n高品質な写真にいたします。`
  const dvd = `オンラインでは2週間しかデータが残りませんが、\nDVDにしておくと永久的に保存できます♪`

  return (
    <Fragment>
      <Layout>
        <div className={style.topImg}></div>
        <div className={style.container}>

        <h1 className={style.planText}>プラン・料金</h1>
        <div>

          <div className={style.anniversaryContainer}>
            <h2 className={style.anniversaryTitle}>〜記念日プラン〜</h2>
            <div className={style.anniversaryContents}>
            <p>基本料金:20,000円</p>
            <p>出張費:撮影場所までの実費+移動時間30分毎500円</p>
            <p>内容:撮影時間最大2時間</p>
            <p className={style.anniversaryData}>2週間後すべてのデータをオンライン上でお渡し</p>
            </div>
          </div>
          
          <div className={style.seniorContainer}>
            <h2 className={style.seniorTitle}>〜シニアプラン〜</h2>
            <div className={style.seniorContents}>
            <p>基本料金:15,000円</p>
            <p>出張費:撮影場所までの実費+移動時間30分毎500円</p>
            <p>内容:撮影時間最大1時間</p>
            <p>2週間後すべてのデータをオンライン上でお渡し</p>
            <p>データお渡し後2週間以内に四つ切サイズの高品質な写真を1枚郵送させて頂きます</p>
            </div>
          </div>

          <div className={style.coupleContainer} data-caption="夫婦割引">
            <p>夫婦割引</p>
            {couple}
          </div>

          <div>
            <h2 className={style.optionTitle}>〜オプション〜</h2>
            
            <div className={style.pictureContainer}>
              <h3>写真仕上げ</h3>
              <p>料金:500円/1枚 送料520円</p>
              <p>{Lsize}</p>
              <p>ホームページフォームにて写真にしたいデータをお送り下さい</p>
              <p>子育てに忙しいママにオススメです！</p>
            </div>

            <div className={style.dvdContainer}>
              <h3>DVD仕上げ</h3>
              <p>料金:2,000円</p>
              <p>全データをオンライン上、かつDVDでお渡し致します。</p>
              <p className="whitespace-pre-wrap">{dvd}</p>
            </div>
          </div>
        </div>

        </div>
      </Layout>
    </Fragment>
  );
};

export default Price;
