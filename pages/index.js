import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";
import media from "../styles/media.module.css";

export default function Home() {
  return (
    <div className={`${style.all_content}`}>
      <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Create Next App</title>
        <meta name="description" content="説明説明説明" />
      </Head>

      {/* ----------------------------------------------
            header
         ---------------------------------------------  */}
      <header className={`${style.hd_all} ${media.hd_sp} ${media.close}`}>
        <div className={`${style.hd_wrapper} ${media.hd_wrapper_sp}`}>
          <div
            className={`${style.nextImg} ${style.hd_logo} ${media.hd_logo_sp}`}
          >
            <a href="/">
              <Image src="/logo-1line.svg" width={273.72} height={35} />
            </a>
          </div>
          <nav className={`${style.hd_nav} ${media.hd_nav_sp}`}>
            <ul className={`${style.hd_ul}`}>
              <li className={`${style.hd_list}`}>
                <a className={`${style.hd_list_link}`} href="#">
                  コーディネート
                  <br />
                  ケータリング
                </a>
              </li>
              <li className={`${style.hd_list}`}>
                <a className={`${style.hd_list_link}`} href="#">
                  ギャザリング
                  <br />
                  ケータリング
                </a>
              </li>
              <li className={`${style.hd_list}`}>
                <a className={`${style.hd_list_link}`} href="#">
                  バーベキュー
                  <br />
                  ケータリング
                </a>
              </li>
              <li className={`${style.hd_list}`}>
                <a className={`${style.hd_list_link}`} href="#">
                  オードブル
                </a>
              </li>
              <li className={`${style.hd_list}`}>
                <a className={`${style.hd_list_link}`} href="#">
                  お弁当
                </a>
              </li>
              <li className={`${style.hd_list}`}>
                <a className={`${style.hd_list_link}`} href="#">
                  ブログ
                </a>
              </li>
              <li className={`${style.hd_list}`}>
                <a className={`${style.hd_list_link}`} href="#">
                  ご利用方法
                </a>
              </li>
              <li className={`${style.hd_list}`}>
                <a
                  className={`${style.hd_list_link} ${style.order_btn} ${style.btn_alpha}`}
                  href="#"
                >
                  注文する
                </a>
              </li>
            </ul>
          </nav>
          <a className={`${style.SpMenuBtn}`}>
            <span className={`${style.SpMenuBtn_inner}`}>
              <span className={`${style.SpMenuBtn_txt} ${style.open}`}>
                MENU
              </span>
              {/* <span className={`${style.SpMenuBtn_txt}`}>CLOSE</span> */}
            </span>
          </a>
          {/* sp用のメニューボタン生成 */}
        </div>
      </header>
      {/* sp用のメニュー画面作成 */}

      <main>
        {/* ----------------------------------------------
            main visual
         ---------------------------------------------  */}
        <div className={`${style.mainVisual} ${style.layout_width} ${media.mainVisual_sp}`}>
          <div
            className={`${style.nextImg} ${style.mainVisual_img} ${media.mainVisual_img_sp}`}
          >
            <Image
              src="/img-mainVisual.jpg"
              width={1200}
              height={742}
              objectFit={"cover"}
            />
          </div>
          <div
            className={`${style.mainVisual_logo} ${media.mainVisual_logo_sp}`}
          >
            <div className={`${style.nextImg} ${style.mainVisual_logo_img}`}>
              <Image
                src="/logo-mainVisual.svg"
                width={524}
                height={192.28}
                alt="ソネスのケータリングサービス"
              />
            </div>
          </div>
          <h1 className={`${style.page_title} ${media.page_title_sp}`}>
            <span className={`${style.page_title_inner}`}>
              <Image
                src="/txt_copy01.svg"
                width={156.06}
                height={31.78}
                alt="世界中で、 "
              />
            </span>
            <br />
            <span className={`${style.page_title_inner}`}>
              <Image
                src="/txt_copy02.svg"
                width={273.38}
                height={31.91}
                alt="今ここにしかない"
              />
            </span>
            <br />
            <span className={`${style.page_title_inner}`}>
              <Image
                src="/txt_copy03.svg"
                width={249.81}
                height={32.43}
                alt="ケータリングを。"
              />
            </span>
          </h1>
          <a
            className={`${style.mainVisual_btn} ${media.mainVisual_btn_sp}`}
            href="#"
          >
            <Image
              src="/btn-order.png"
              width={170}
              height={177}
              alt="注文する"
            />
          </a>
          <a
            className={`${style.mainVisual_specialBtn} ${style.btn_alpha} ${media.mainVisual_specialBtn_sp}`}
            href="#"
          >
            <span
              className={`${style.mainVisual_specialBtn_img} ${media.mainVisual_specialBtn_img_sp}`}
            >
              <Image
                src="/1644164035625-500x500.jpg"
                width={120}
                height={120}
              />
            </span>
            二月満月おはぎ
          </a>
          <a
            className={`${style.mainVisual_specialBtn} ${style.mainVisual_specialBtn02} ${style.btn_alpha} ${media.mainVisual_specialBtn_sp}`}
            href="#"
          >
            <span
              className={`${style.mainVisual_specialBtn_img} ${media.mainVisual_specialBtn_img_sp}`}
            >
              <Image
                src="/PXL_20211209_091052012.jpg"
                width={120}
                height={120}
              />
            </span>
            期間限定　冬の個食オードブル
          </a>
        </div>

        {/* ----------------------------------------------
            hero layout
         ---------------------------------------------  */}
        <div className={`${style.hero} ${style.layout_width} ${media.hero_sp}`}>
          <div className={`${style.hero_inner} ${media.hero_inner_sp}`}>
            <p className={`${style.hero_txt} ${media.hero_txt_sp}`}>
              ソネスのケータリングは決まったコンセプトやメニューがありません。
              <br />
              ゲストの皆様が喜んでいただけるように
              <br />
              ”世界でここだけのパーティー”を目指して、
              <br />
              ひとつひとつ丁寧にオリジナルでご用意いたします。
            </p>
            {/* .helo_list globalが優先されるので直書き */}
            <ul
              className={`${style.hero_list} ${style.nextImg}`}
              style={{ marginTop: `3px` }}
            >
              <li className={`${style.hero_list_item}`}>
                <a href="#" className={`${style.btn_alpha}`}>
                  <Image
                    src="/img-AnchorList.png"
                    width={187.86}
                    height={241.81}
                    alt="ケータリング"
                  />
                </a>
              </li>
              <li className={`${style.hero_list_item}`}>
                <a href="#" className={`${style.btn_alpha}`}>
                  <Image
                    src="/img-AnchorList-02.png"
                    width={187.86}
                    height={241.81}
                    alt="オードブル"
                  />
                </a>
              </li>
              <li className={`${style.hero_list_item}`}>
                <a href="#" className={`${style.btn_alpha}`}>
                  <Image
                    src="/img-AnchorList-03.png"
                    width={187.86}
                    height={241.81}
                    alt="お弁当"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ----------------------------------------------
            ケータリング
         ---------------------------------------------  */}
        <section className={`${style.catering} ${style.layout_width}`}>
          <h2 className={`${style.catering_title}`}>CATERING</h2>
          {/* コーディネート */}
          <section className={`${style.catering_item}`}>
            <div className={`${style.catering_txtBox}`}>
              <h3 className={`${style.catering_item_title} ${style.nextImg}`}>
                <Image
                  src="/ttl-coordinate.svg"
                  width={254}
                  height={127}
                  alt="Coordinate Catering コーディネートケータリング"
                />
              </h3>
              <p className={`${style.catering_txt}`}>
                パーティーのコンセプトに合わせて世界でここだけのオリジナルケータリングをご提供いたします。
                <br />
                福岡ではソネスしかしていない自慢のケータリングスタイルです。
              </p>
              <a
                href="#"
                className={`${style.catering_moreBtn} ${style.btn_arrcic}`}
              >
                <Image src="/txt-more.svg" width={44} height={10} alt="MORE" />
              </a>
            </div>
          </section>
          {/* ギャザリング */}
          <section className={`${style.catering_item}`}>
            <div className={`${style.catering_txtBox}`}>
              <h3 className={`${style.catering_item_title} ${style.nextImg}`}>
                <Image
                  src="/ttl-gathering.svg"
                  width={254}
                  height={127}
                  alt="Gathering Catering ギャザリングケータリング"
                />
              </h3>
              <p className={`${style.catering_txt}`}>
                ”つどう”をテーマに、箱庭スタイルのケータリングをご用意しました。ご家庭やスモールオフィスでのパーティーにぴったりです。4名様よりご注文承ります。
              </p>
              <a
                href="#"
                className={`${style.catering_moreBtn} ${style.btn_arrcic}`}
              >
                <Image src="/txt-more.svg" width={44} height={10} alt="MORE" />
              </a>
            </div>
          </section>
          {/* バーベキュー */}
          <section className={`${style.catering_item}`}>
            <div className={`${style.catering_txtBox}`}>
              <h3 className={`${style.catering_item_title} ${style.nextImg}`}>
                <Image
                  src="/ttl-bbq.svg"
                  width={195.95}
                  height={129.28}
                  alt="BBQ Catering バーベキューケータリング"
                />
              </h3>
              <p className={`${style.catering_txt}`}>
                アメリカのトップブランドグリルメーカー「チャーブロイル社」のガスグリルを使用した、BBQパーティーです。専属スタッフが調理いたします！
              </p>
              <a
                href="#"
                className={`${style.catering_moreBtn} ${style.btn_arrcic}`}
              >
                <Image src="/txt-more.svg" width={44} height={10} alt="MORE" />
              </a>
            </div>
          </section>
        </section>

        {/* ----------------------------------------------
            オーダー
         ---------------------------------------------  */}
        <section className={`${style.other_container} ${style.layout_width}`}>
          <h2 className={`${style.other_container_title}`}>OTHER</h2>

          {/* オードブル */}

          <section className={`${style.other}`}>
            <div className={`${style.other_txtBox}`}>
              <h3 className={`${style.other_title} ${style.nextImg}`}>
                <Image
                  src="/ttl-appetizer.svg"
                  width={318.56}
                  height={42.32}
                  alt="Appetizer オードブル"
                />
              </h3>
              <p className={`${style.other_lead}`}>
                ソネスのオリジナルオードブルです。
                <br />
                ちょっとしたパーティーやお花見、クリスマスにオススメです。
              </p>
              <div className={`${style.other_btnWrapp}`}>
                <a
                  href="#"
                  className={`${style.other_btn} ${style.nextImg} ${style.btn_arrcic}`}
                >
                  <Image
                    src="/txt-more.svg"
                    width={44}
                    height={10}
                    alt="MORE"
                  />
                </a>
              </div>
            </div>
            <div className={`${style.other_imgBox} ${style.nextImg}`}>
              <figure>
                <Image
                  src="/img-appetizer-01.jpg"
                  width={318.5}
                  height={222.95}
                />
              </figure>
              <figure>
                <Image
                  src="/img-appetizer-02.jpg"
                  width={318.5}
                  height={222.95}
                />
              </figure>
            </div>
          </section>

          {/* お弁当 */}

          <section className={`${style.other}`}>
            <div className={`${style.other_txtBox}`}>
              <h3 className={`${style.other_title} ${style.nextImg}`}>
                <Image
                  src="/ttl-bento.svg"
                  width={318.56}
                  height={42.32}
                  alt="Bento お弁当"
                />
              </h3>
              <p className={`${style.other_lead}`}>
                メニューのバリエーションの組み合わせは数百種類。ご要望に合わせてご用意いたします。
              </p>
              <div className={`${style.other_btnWrapp}`}>
                <a
                  href="#"
                  className={`${style.other_btn} ${style.nextImg} ${style.btn_arrcic}`}
                >
                  <Image
                    src="/txt-more.svg"
                    width={44}
                    height={10}
                    alt="MORE"
                  />
                </a>
              </div>
            </div>
            <div
              className={`${style.other_imgBox} ${style.col3} ${style.nextImg}`}
            >
              <figure>
                <Image src="/img-bento-01.jpg" width={208} height={208} />
              </figure>
              <figure>
                <Image src="/img-bento-02.jpg" width={208} height={208} />
              </figure>
              <figure>
                <Image src="/img-bento-03.jpg" width={208} height={208} />
              </figure>
            </div>
          </section>
        </section>

        {/* ----------------------------------------------
            ギャラリー
         ---------------------------------------------  */}
        <section className={`${style.gallery_container}`}>
          <h2 className={`${style.gallery_container_title} ${style.nextImg}`}>
            <Image src="/ttl_gallery.png" width={274} height={85.4} />
          </h2>
          <p className={`${style.gallery_container_lead}`}>
            ひとつひとつ丁寧にオリジナルでご用意した
            <br className={`${style.only_sp}`} />
            ケータリング事例を紹介しています。
          </p>
          <div className={`${style.gallery_container_imgs} ${style.nextImg}`}>
            <div className={`${style.gallery_container_img}`}>
              <span>
                <Image
                  src="/DSC_0395.jpg"
                  width={264}
                  height={264}
                  objectFit={"cover"}
                />
              </span>
            </div>
            <div className={`${style.gallery_container_img}`}>
              <span>
                <Image
                  src="/DSC_0132.jpg"
                  width={264}
                  height={264}
                  objectFit={"cover"}
                />
              </span>
            </div>
            <div className={`${style.gallery_container_img}`}>
              <span>
                <Image
                  src="/DSC_0122.jpg"
                  width={264}
                  height={264}
                  objectFit={"cover"}
                />
              </span>
            </div>
            <div className={`${style.gallery_container_img}`}>
              <span>
                <Image
                  src="/DSC_0099.jpg"
                  width={264}
                  height={264}
                  objectFit={"cover"}
                />
              </span>
            </div>
          </div>
          <div
            className={`${style.gallery_container_moreBtn} ${style.nextImg}`}
          >
            <a
              className={`${style.blogContainer_moreBtn} ${style.btn_alpha} ${style.btn_arrcic}`}
            >
              <Image
                src="/txt-more-white.svg"
                width={59}
                height={13}
                alt="MORE"
              />
            </a>
          </div>
        </section>

        {/* ----------------------------------------------
            ブログ
         ---------------------------------------------  */}
        <section className={`${style.blog_container}`}>
          <h2 className={`${style.blog_container_title} ${style.nextImg}`}>
            <span className={`${style.blog_container_title_img}`}>
              <Image src="/ttl-blog.svg" width={189} height={87} alt="Blog" />
            </span>
          </h2>
          <p className={`${style.blog_container_lead}`}>
            ブログにて様々な事例を紹介しています!
          </p>
          <ul
            className={`${style.blog_list} ${style.nextImg}`}
            style={{ margin: `30px auto 0` }}
          >
            <li className={`${style.blog_item} `}>
              <a className={`${style.blog_item_link} ${style.btn_alpha}`}>
                <span>
                  <Image
                    src="/DSC_1534-500x500.jpg"
                    width={340}
                    height={210}
                    objectFit={"cover"}
                  />
                </span>
                <div className={`${style.blog_item_txtBox}`}>
                  <p className={`${style.blog_item_title}`}>
                    5社様限定　業務契約企業様募集
                  </p>
                  <p className={`${style.blog_item_date}`}>2022.02.13</p>
                  <div className={`${style.blog_item_btnWrapp}`}>
                    <div
                      className={`${style.blog_item_btn} ${style.btn_arrcic}`}
                    >
                      <Image
                        src="/txt-read.png"
                        width={42}
                        height={10}
                        alt="READ"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className={`${style.blog_item}`}>
              <a className={`${style.blog_item_link} ${style.btn_alpha}`}>
                <span>
                  <Image
                    src="/1644164035625-500x500.jpg"
                    width={340}
                    height={210}
                    objectFit={"cover"}
                  />
                </span>
                <div className={`${style.blog_item_txtBox}`}>
                  <p className={`${style.blog_item_title}`}>二月満月おはぎ</p>
                  <p className={`${style.blog_item_date}`}>2022.02.07</p>
                  <div className={`${style.blog_item_btnWrapp}`}>
                    <div
                      className={`${style.blog_item_btn} ${style.btn_arrcic}`}
                    >
                      <Image
                        src="/txt-read.png"
                        width={42}
                        height={10}
                        alt="READ"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className={`${style.blog_item}`}>
              <a className={`${style.blog_item_link} ${style.btn_alpha}`}>
                <span>
                  <Image
                    src="/1643540589184-500x500.jpg"
                    width={340}
                    height={210}
                    objectFit={"cover"}
                  />
                </span>
                <div className={`${style.blog_item_txtBox}`}>
                  <p className={`${style.blog_item_title}`}>
                    バレンタイン焼き菓子通販致します。
                  </p>
                  <p className={`${style.blog_item_date}`}>2022.02.02</p>
                  <div className={`${style.blog_item_btnWrapp}`}>
                    <div
                      className={`${style.blog_item_btn} ${style.btn_arrcic}`}
                    >
                      <Image
                        src="/txt-read.png"
                        width={42}
                        height={10}
                        alt="READ"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <a
            className={`${style.blogContainer_moreBtn02} ${style.btn_alpha} ${style.btn_arrcic}`}
          >
            <Image
              src="/txt-more-white.svg"
              width={59}
              height={13}
              alt="MORE"
            />
          </a>
        </section>

        {/* ----------------------------------------------
            コンタクト
         ---------------------------------------------  */}
        <section className={`${style.contact_section}`}>
          <div className={`${style.contact_section_innre}`}>
            <h2 className={`${style.contact_section_title} ${style.nextImg}`}>
              <Image
                src="/ttl-com-order-pc.svg"
                width={236}
                height={103.87}
                alt="ご注文・ご相談"
              />
            </h2>
            <p className={`${style.contact_section_lead}`}>
              ご利用方法をご一読いただき、お電話、もしくはオンライン予約フォームよりご注文ください。
              <br />
              人数、ご予算、年齢層、アレルギー、メニューのご要望をあらかじめ決めていただくとご注文がスムーズです。
            </p>
            <a
              className={`${style.contact_section_btn} ${style.btn_alpha} ${style.btn_arrcic}`}
            >
              ご利用方法
            </a>
            <div className={`${style.contact_itemContainer} ${style.nextImg}`}>
              <dl className={`${style.contact_item}`}>
                <dt className={`${style.contact_item_title}`}>
                  <span className={`${style.contact_item_title02}`}>
                    <Image
                      src="/OrderItem__ttl.svg"
                      width={276.96}
                      height={22}
                      alt="お電話でのご注文・ご相談"
                    />
                  </span>
                </dt>
                <dd className={`${style.contact_item_body}`}>
                  <p className={`${style.contact_item_tel}`}>
                    <a href="#" className={`${style.contact_item_link_tel}`}>
                      <Image
                        src="/txt_sp_navi_tel.svg"
                        width={404}
                        height={44}
                        alt="092-741-8287"
                      />
                    </a>
                    <br />
                    <spsn className={`${style.contact_item_note}`}>
                      受付時間：11:30〜21:00
                      <span className={`${style.contact_item_noteInner}`}>
                        (年末年始除く)
                      </span>
                    </spsn>
                  </p>
                </dd>
              </dl>

              <dl className={`${style.contact_item}`}>
                <dt className={`${style.contact_item_title_web}`}>
                  <span className={`${style.contact_item_title02}`}>
                    <Image
                      src="/OrderItem__ttl-web.svg"
                      width={289.04}
                      height={22}
                      alt=" WEBからのご注文・ご相談"
                    />
                  </span>
                </dt>
                <dd className={`${style.contact_item_body}`}>
                  <a
                    href="#"
                    className={`${style.contact_item_link_web} ${style.reserve} ${style.btn_alpha} ${style.btn_arrcic}`}
                  >
                    オンライン予約フォームはこちら
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </main>

      {/* ----------------------------------------------
            footer
         ---------------------------------------------  */}
      <footer className={`${style.footer}`}>
        <a
          className={`${style.pageTopBtn} ${style.btn_alpha} ${style.nextImg}`}
        >
          <Image src="/btn-pagetop.png" width={14} height={161} />
        </a>
        <div className={`${style.footer_inner}`}>
          <dl className={`${style.foot_access}`}>
            <dt className={`${style.foot_access_title}  ${style.nextImg}`}>
              <Image src="/ttl-footAccesss.svg" width={160} height={22.76} />
            </dt>
            <dd className={`${style.foot_access_contents}`}>
              <p className={`${style.foot_access_address}`}>
                SONES　Delicatessen & cafe
                <br />
                〒810-0022 福岡市中央区薬院1-16-18-102
              </p>
              <a
                href="#"
                className={`${style.foot_access_btn} ${style.btn_alpha}`}
              >
                Google Mapで見る
              </a>
            </dd>
          </dl>
          <ul className={`${style.shop_list}  ${style.nextImg}`}>
            <li className={`${style.shop_item}`}>
              <a
                className={`${style.shop_item_link} ${style.btn_alpha}`}
                href="#"
              >
                <Image src="/btn-shop01.png" width={140} height={188} />
              </a>
            </li>
            <li className={`${style.shop_item}`}>
              <a
                className={`${style.shop_item_link} ${style.btn_alpha}`}
                href="#"
              >
                <Image src="/btn-shop02.png" width={140} height={188} />
              </a>
            </li>
          </ul>
          <small className={`${style.copyRight}  ${style.nextImg}`}>
            <Image
              src="/txt-copyright.png"
              width={9}
              height={232}
              alt="© CAFE SONES. All Rights Reserved."
            />
          </small>
        </div>
      </footer>
    </div>
  );
}
