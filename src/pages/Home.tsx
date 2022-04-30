import { FC, Fragment } from "react";
import Layout from "src/components/layout";
import style from "src/pages/Home.module.css"
import InstagramImg1 from "src/assets/images/home/instagram_1.jpg"
import InstagramImg2 from "src/assets/images/home/instagram_2.jpg"
import InstagramImg3 from "src/assets/images/home/instagram_3.jpg"
import InstagramImg4 from "src/assets/images/home/instagram_4.jpg"
import InstagramImg5 from "src/assets/images/home/instagram_5.jpg"
import InstagramImg6 from "src/assets/images/home/instagram_6.jpg"

const Home: FC = () => {
  const genres = "マタニティフォト、ニューボーンフォト、お宮参り、バースデー、七五三、カップルフォト、家族撮影、シニアフォトなどなど、今だけの貴重な瞬間を未来に残すお手伝いをさせていただきます。"
  const coronaVirus = "安全・安心を最優先にスタッフの毎日の検温、月1回のPCR検査、撮影機器や小物類の消毒、マスクと消毒の徹底"
  const notes = "撮影中のお客様での写真撮影・動画撮影はご遠慮頂いております。お子様のご機嫌に合わせてご撮影させていただきますので撮影時間が長引く場合や、天候などの影響で後日の撮影になる可能性があります。撮り直しの場合にはその都度の出張費のみお支払い頂きます。"
  const howToPay = "※現在事務所立ち上げ準備中につき、2022年6月末までは現金のみのお支払いになります。"

  return (
    <Fragment>
      <Layout>
        <div>
          <div className={style.topImg}>
            <h2 className="absolute top-0">〜写真で未来を笑顔にしませんか〜</h2>
          </div>
          <p>{genres}</p>

          <h2>Instagram</h2>
          <ul className="flex flex-wrap">
            <li>
              <img src={InstagramImg1} alt="instagram image1" className={style.instagramImg} />
            </li>
            <li>
              <img src={InstagramImg2} alt="instagram image2" className={style.instagramImg} />
            </li>
            <li>
              <img src={InstagramImg3} alt="instagram image3" className={style.instagramImg} />
            </li>
            <li>
              <img src={InstagramImg4} alt="instagram image4" className={style.instagramImg} />
            </li>
            <li>
              <img src={InstagramImg5} alt="instagram image5" className={style.instagramImg} />
            </li>
            <li>
              <img src={InstagramImg6} alt="instagram image6" className={style.instagramImg} />
            </li>
          </ul>

          <h2>安全に安心して撮影するための取り組み</h2>
          <p>〜新型コロナウイル感染症への取り組み〜</p>
          <p>{coronaVirus}</p>

          <h2>お客様へのお願い</h2>
          <p>{notes}</p>
          <p>{howToPay}</p>

        </div>
      </Layout>
    </Fragment>
  );
};

export default Home;
