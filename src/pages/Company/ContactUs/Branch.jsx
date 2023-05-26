import "../../../css/ContactUs/Branch.css";
const Branch = () => {
  const branch = [
    {
      id: 1,
      small: "Dongdaemun Branch",
      big: "Dongdaemun Branch",
      engAdd: "315, Jong-ro Jongno-gu, Seoul (Dongdaemun Station – Exit 3)",
      korAdd: "서울특별시 종로구 종로 315",
      tel: "Tel. 02 763 5559",
      open: "Opening hours: Open daily, 10AM ~ 7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2021/07/Dingdaemon.png",
    },
    {
      id: 2,
      small: "Daerim Branch",
      big: "Daerim Branch​",
      engAdd: "21, Daerim-ro 23 Gil, Yeongdeungpo-gu, Seoul",
      korAdd: "서울특별시 영등포구 대림로 23길 21",
      tel: "Tel. 02-841-8884",
      open: "Opening Hours: Open Daily, 10AM~7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2022/07/DAerim.png",
    },
    {
      id: 3,
      small: "CIS Branch",
      big: "Dongdaemun CIS Branch​",
      engAdd: "5, Eulji-ro 42-gil, Jung-gu, Seoul",
      korAdd: "서울특별시 중구 을지로42길 5",
      tel: "Tel. 02-2273-5599",
      open: "Opening hours: Sat and Sun, 10AM ~ 7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2021/07/cis.png",
    },
    {
      id: 4,
      small: "Mongol Town Branch",
      big: "Mongol Town Branch",
      engAdd: "3rd floor, Mongol town, 12 Eulji-ro 44-gil, Jung-gu, Seoul",
      korAdd: "서울특별시 중구 을지로44길 12, 몽골타운 3층",
      tel: "Tel: 02-2261-5540",
      open: "Opening hours: Open daily, 10AM ~ 7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2021/07/mongol.png",
    },
    {
      id: 5,
      small: "Itaewon Branch",
      big: "Itaewon Branch​",
      engAdd: "36, Usadan-ro 10-gil, Yongsan-gu, Seoul",
      korAdd: "서울특별시시 용산구 우사단로 10길 36",
      tel: "Tel: 010-2989-6864​",
      open: "Opening hours: Open daily, 10AM ~ 7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2021/07/Itaewon.png",
    },
    {
      id: 6,
      small: "Bupyeong Branch",
      big: "Bupyeong Branch",
      engAdd: "924, Gyeongin-ro, Bupyeong-gu, Incheon",
      korAdd: "인천광역시 부평구 경인로 824",
      tel: "မြန်မာ 010-3014-6864 中文 1811-2907",
      open: "Opening hours: Opens only on weekends, 10AM ~ 7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Bupyeong.png",
    },
    {
      id: 7,
      small: "Ansan Branch",
      big: "Ansan Branch​",
      engAdd:
        "2nd floor, 455, Jungang-daero, Danwon-gu, Ansan -si, Gyeonggi-do (Entrance of Asian Street)",
      korAdd: "경기도 안산시 단원구 중앙대로 455 2층",
      tel: "Tel. 031 3626 740",
      open: "Opening hours: Open daily, 10AM ~ 7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Ansan.png",
    },
    {
      id: 8,
      small: "Suwon Branch",
      big: "Suwon Branch",
      engAdd: "2-10, Maesan-ro, Paldal-gu, Suwon-si, Gyeonggi-do",
      korAdd: "경기도 수원시 팔달구 매산로 2-10 (매산로1가, 역전시장)",
      tel: "Tel. 031-207-5559",
      open: "Opening hours: Open daily, 10AM ~ 7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Suwon.png",
    },
    {
      id: 9,
      small: "Hwaseong Branch",
      big: "Hwaseong Branch",
      engAdd:
        "1101-1, 3.1 Manse-ro, Hyangnam-eup,Hwaseong-si, Gyeonggi-do,(Baran Market Place)",
      korAdd: "경기도 화성시 향남읍 3.1만세로 1101-1",
      tel: "Tel.031 354 0450​",
      open: "Opening hours: Open daily, 10AM ~ 7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2021/11/Hwaseong.jpg",
    },
    {
      id: 10,
      small: "Songu-ri Branch",
      big: "Songu-ri Branch",
      engAdd:
        "91, Solmoru-ro, Soheul-eup, Pocheon-si, Gyeonggi-do, Korea (Next to Nonghyub Bank)",
      korAdd: "경기도 포천시 소흘읍 솔모루로 91",
      tel: "Tel. 031 541 1856",
      open: "Opening hours: Mon, Wed, Fri, Sat and Sun, 10AM ~ 7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Songuri.png",
    },
    {
      id: 11,
      small: "Gwangju Branch",
      big: "Gwangju Branch",
      engAdd: "7-2, Gwangsan-ro, Gwangsan-gu, Gwangju",
      korAdd: "광주광역시 광산구 광산로 7-2",
      tel: "Tel. 062-942-5598",
      open: "Opening hours: Fri~Tue, 10AM ~ 7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2021/07/Gwangju.png",
    },
    {
      id: 12,
      small: "Gimhae Branch",
      big: "Gimhae Branch​",
      engAdd:
        "84, Garak-ro, Gimhae-si, Gyeongsangnam-do, (Opposite to Top Mart)",
      korAdd: "경상남도 김해시 가락로 84",
      tel: "Tel. 055-329-5559​",
      open: "Opening hours: Open daily, 10AM ~ 7PM",
      src: "https://www.gmeremit.com/wp-content/uploads/2021/07/Gimhae.png",
    },
  ];
  return (
    <div id="branch">
      <div className="row_bg_wrap_branch">
        <div className="inner_wrap_branch">
          <div className="row_bg_branch"></div>
        </div>
      </div>
      <div className="dark_left_branch">
        <div className="padding_column_branch">
          <div className="vc_column_inner_branch">
            <div className="wpb_wrapper_branch">
              <div className="inner_row_branch">
                <div className="row_bg_wrap_inner_branch">
                  <div className="row_bg_inner_branch"></div>
                </div>
                <div className="dark_left_inner_branch">
                  {branch.map((item, index) => {
                    return (
                      <div className="cotainer_inner_branch" key={index}>
                        <div className="column_inner_branch">
                          <div className="wpb_wrapper_branch">
                            <h3 className="vc_customer_small_branch">
                              {item.small}
                            </h3>
                            <div className="image_wrapper_branch">
                              <div className="inner_branch">
                                <div className="hover_wrapper_branch">
                                  <div className="hover_wrapper_img_loaded_branch">
                                    <img
                                      className="branch_image"
                                      data-delay="0"
                                      height="372"
                                      width="554"
                                      data-animation="fade-in"
                                      src={item.src}
                                      alt=""
                                      sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content_wrapper_branch">
                              <div className="wbp_wrapper_branch">
                                <div className="map_block_branch">
                                  <h3 className="vc_customer_big_branch">
                                    {item.big}
                                  </h3>
                                  <p>
                                    {item.engAdd}
                                    <br />
                                    {item.korAdd}
                                    <br />
                                    {item.tel}
                                    <br />
                                    {item.open}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Branch;
