import { FC, Fragment } from "react";
import Layout from "src/components/layout";
import style from "src/pages/price.module.css"
import MediaQuery from "react-responsive";

const Price: FC = () => {
  const couple = `ご夫婦おふたりでの撮影の場合、\n撮影基本料25,000円でデータ全てお渡し。\n2枚の四つ切サイズ写真を郵送させていただきます。`
  const mediaCouple = `ご夫婦おふたりでの撮影の場合、\n撮影基本料25,000円で\nデータ全てお渡し。\n2枚の四つ切サイズ写真を郵送させていただきます。`
  const pictureText = `料金:500円/1枚 送料520円\nデータお渡し後2週間以内に限りデータをL判サイズで\n高品質な写真にいたします。\nホームページフォームにて写真にしたいデータをお送り下さい。\n子育てに忙しいママにオススメです！`
  const mediaPictureText = `料金:500円/1枚 送料520円\nデータお渡し後2週間以内に限り\nデータをL判サイズで\n高品質な写真にいたします。\nホームページフォームにて\n写真にしたいデータをお送り下さい。\n子育てに忙しいママにオススメです！`
  const dvdText = `料金:2,000円\n全データをオンライン上、かつDVDでお渡し致します。\nオンラインでは2週間しかデータが残りませんが、\nDVDにしておくと永久的に保存できます♪`
  const mediaDvdText = `料金:2,000円\n全データをオンライン上、\nかつDVDでお渡し致します。\nオンラインでは2週間しかデータが残りませんが、\nDVDにしておくと永久的に保存できます♪`

  return (
    <Fragment>
      <Layout>
        <div className={style.container}>
        <div className={style.topImg}></div>

        <h1 className={style.planText}>プラン・料金</h1>
        <div>

          <div className={style.anniversaryContainer}>
            <h2 className={style.anniversaryTitle}>〜お子さま撮影プラン〜</h2>
            <div className={style.anniversaryContents}>
            <MediaQuery query="(max-width: 480px)" >
              <p>基本料金：20,000円</p>
              <p>出張費：撮影場所までの実費＋</p>
              <p className={style.anniversaryIndent}>移動時間30分毎500円</p>
              <p>内容：撮影時間最大2時間</p>
              <p>2週間後すべてのデータをオンライン上でお渡し。</p>
            </MediaQuery>

            <MediaQuery query="(min-width: 481px)" >
              <p>基本料金：20,000円</p>
              <p>出張費：撮影場所までの実費＋移動時間30分毎500円</p>
              <p>内容：撮影時間最大2時間</p>
              <p>2週間後すべてのデータをオンライン上でお渡し。</p>
            </MediaQuery>
            </div>
          </div>
          
          <div className={style.seniorContainer}>
            <h2 className={style.seniorTitle}>〜大人さま撮影プラン〜</h2>
            <div className={style.seniorContents}>
            <MediaQuery query="(max-width: 480px)" >
              <p>基本料金：15,000円</p>
              <p>出張費：撮影場所までの実費＋</p>
              <p className={style.seniorIndent}>移動時間30分毎500円</p>
              <p>内容：撮影時間最大1時間</p>
              <p>2週間後すべてのデータをオンライン上でお渡し。</p>
              <p>データお渡し後2週間以内に四つ切サイズの</p>
              <p>高品質な写真を1枚郵送させて頂きます。</p>
            </MediaQuery>

            <MediaQuery query="(min-width: 481px)" >
              <p>基本料金：15,000円</p>
              <p>出張費：撮影場所までの実費+移動時間30分毎500円</p>
              <p>内容：撮影時間最大1時間</p>
              <p>2週間後すべてのデータをオンライン上でお渡し。</p>
              <p>データお渡し後2週間以内に四つ切サイズの高品質な写真を1枚郵送させて頂きます。</p>
            </MediaQuery>
            </div>
          </div>

          <div className={style.coupleContainer}>
            <h2 className={style.coupleTitle}>夫婦割引</h2>
            <div className={style.coupleTextContainer}>
            <MediaQuery query="(max-width: 480px)" >
              <p>{mediaCouple}</p>
            </MediaQuery>

            <MediaQuery query="(min-width: 481px)" >
              <p>{couple}</p>
            </MediaQuery>
            </div>
          </div>

          <div className={style.optionContainer}>
            <h2 className={style.optionTitle}>〜オプション〜</h2>
            
            <div className={style.pictureContainer}>
              <h3 className={style.pictureTitle}>写真仕上げ</h3>
              <MediaQuery query="(max-width: 480px)" >
                <p>{mediaPictureText}</p>
              </MediaQuery>

              <MediaQuery query="(min-width: 481px)" >
                <p>{pictureText}</p>
              </MediaQuery>
            </div>

            <div className={style.dvdContainer}>
              <h3 className={style.dvdTitle}>DVD仕上げ</h3>
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
