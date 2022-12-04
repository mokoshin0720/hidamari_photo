import { FC, Fragment } from "react";
import Layout from "src/components/layout";
import style from "src/pages/price.module.css"
import MediaQuery from "react-responsive";

const Price: FC = () => {
  const couple = `ご夫婦おふたりでの撮影の場合、\n撮影基本料25,000円でデータ全てお渡し。\n2枚の四つ切サイズ写真を郵送させていただきます。`
  const mediaCouple = `ご夫婦おふたりでの撮影の場合、\n撮影基本料25,000円で\nデータ全てお渡し。\n2枚の四つ切サイズ写真を郵送させていただきます。`
  const pictureText = `【撮影場所＋１カ所につき：¥2,200-】\n例）公園と自宅の２カ所\n\n【撮影時間延長30分毎：￥3,300-】\n撮影場所に到着説明後〜撮影終了までの時間\n撮影終了時間になったら相談させていただきます。\n\n【お子さま2人目以降：¥1,100-】\nご兄弟さまと一緒に撮影する場合1人あたりの料金となります。\n（ご家族撮影は基本料金に含まれます）\n\n【テーマ２つ目以降：¥2,000-】\nお宮参り撮影と七五三撮影など\n\n【お子様着付け1人につき：¥3,300-】\n大人の方の着付け・ヘアセットなどはしておりません。`
  const mediaPictureText = `【撮影場所＋１カ所につき：¥2,200-】\n例）公園と自宅の２カ所\n\n【撮影時間延長30分毎：￥3,300-】\n撮影場所に到着説明後〜撮影終了までの時間\n撮影終了時間になったら相談させていただきます。\n\n【お子さま2人目以降：¥1,100-】\nご兄弟さまと一緒に撮影する場合1人あたりの料金となります。\n（ご家族撮影は基本料金に含まれます）\n\n【テーマ２つ目以降：¥2,000-】\n大人の方の着付け・ヘアセットなどはしておりません。`
  const dvdText = `L判：¥220-\n2L：¥550\n6つ切：¥2,200-\n4つ切：¥3,300-\n6つ切パネル加工：¥8,800-\nDVD加工：¥1,100-\n`
  const mediaDvdText = `L判：¥220-\n2L：¥550\n6つ切：¥2,200-\n4つ切：¥3,300-\n6つ切パネル加工：¥8,800-\nDVD加工：¥1,100-\n`

  return (
    <Fragment>
      <Layout>
        <div className={style.container}>
        <div className={style.topImg}></div>

        <h1 className={style.planText}>プラン・料金</h1>
        <div>

          <div className={style.anniversaryContainer}>
            <h2 className={style.anniversaryTitle}>〜基本料金〜</h2>
            <div className={style.anniversaryContents}>
            <MediaQuery query="(max-width: 480px)" >
              <p>ゆったりプラン</p>
              <p>料金：22,000円</p>
              <p>撮影時間：2時間</p>
              <p className={style.anniversaryIndent}>内容：データ50枚程度</p>
              <p>2週間後データをオンライン上でお渡し</p>
              <br />
              <p>さくっとプラン</p>
              <p>料金：16,500円</p>
              <p>撮影時間：1時間</p>
              <p className={style.anniversaryIndent}>内容：データ20枚程度</p>
              <p>2週間後データをオンライン上でお渡し。</p>
              <p>データお渡し後2週間以内に四つ切サイズの</p>
              <p>高品質な写真を1枚郵送させて頂きます。</p>
            </MediaQuery>

            <MediaQuery query="(min-width: 481px)" >
            <p>ゆったりプラン</p>
              <p>料金：22,000円</p>
              <p>撮影時間：2時間</p>
              <p className={style.anniversaryIndent}>内容：データ50枚程度</p>
              <p>2週間後データをオンライン上でお渡し</p>
              <br />
              <p>さくっとプラン</p>
              <p>料金：16,500円</p>
              <p>撮影時間：1時間</p>
              <p className={style.anniversaryIndent}>内容：データ20枚程度</p>
              <p>2週間後データをオンライン上でお渡し</p>
            </MediaQuery>
            </div>
          </div>
          
          <div className={style.seniorContainer}>
            <h2 className={style.seniorTitle}>〜出張費〜</h2>
            <div className={style.seniorContents}>
            <MediaQuery query="(max-width: 480px)" >
              <p>大阪環状線　天王寺駅〜撮影場所までの往復交通費</p>
              <p>＋</p>
              <p>往復移動時間30分枚￥550</p>
            </MediaQuery>

            <MediaQuery query="(min-width: 481px)" >
              <p>大阪環状線　天王寺駅〜撮影場所までの往復交通費</p>
              <p>＋</p>
              <p>往復移動時間30分枚￥550</p>
            </MediaQuery>
            </div>
          </div>

          <div className={style.optionContainer}>
            <h2 className={style.optionTitle}>〜オプション料金〜</h2>
            
            <div className={style.pictureContainer}>
              <MediaQuery query="(max-width: 480px)" >
                <p>{mediaPictureText}</p>
              </MediaQuery>

              <MediaQuery query="(min-width: 481px)" >
                <p>{pictureText}</p>
              </MediaQuery>
            </div>

            <div className={style.dvdContainer}>
              <h3 className={style.dvdTitle}>〜写真現像〜</h3>
              <MediaQuery query="(max-width: 480px)" >
                <p>{mediaDvdText}</p>
              </MediaQuery>

              <MediaQuery query="(min-width: 481px)" >
                <p>{dvdText}</p>
              </MediaQuery>
            </div>
          </div>
        </div>

        </div>
      </Layout>
    </Fragment>
  );
};

export default Price;
