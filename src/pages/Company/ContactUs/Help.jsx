import "../../../css/Company/ContactUs/Help.css";
const Help = () => {
  const centers = [
    {
      id: 1,
      country: "https://www.gmeremit.com/wp-content/uploads/2021/07/korea.png",
      name1: "Korean Remittance",
      name2: "Korean Loan",
      phone1: "1811-2961",
      phone2: "010-6551-6864​​",
      facebook: "https://www.facebook.com/GMEKorea/",
      tiktok: "https://www.tiktok.com/@gmekorea",
    },
    {
      id: 2,
      country: "https://www.gmeremit.com/wp-content/uploads/2021/07/nepal.png",
      name1: "Nepal Remittance",
      name2: "Nepal Loan",
      phone1: "1811-2934",
      phone2: "010-6584-6864",
      facebook: "https://www.facebook.com/gmenepal/",
      tiktok: "https://www.tiktok.com/@gmenepal",
    },
    {
      id: 3,
      country:
        "https://www.gmeremit.com/wp-content/uploads/2021/07/sri-lanka.png",
      name1: "Sri Lanka Remittance",
      name2: "Sri Lanka Loan",
      phone1: "1811-2935​​",
      phone2: "010-2965-6864",
      facebook: "https://www.facebook.com/gmeremitsrilanka/",
      tiktok: "https://www.tiktok.com/@gmesrilanka",
    },
    {
      id: 4,
      country:
        "https://www.gmeremit.com/wp-content/uploads/2021/07/philippines.png",
      name1: "Philippines Remittance",
      name2: "Philippines Loan",
      phone1: "1811-2936",
      phone2: "010-2970-6864",
      facebook: "https://www.facebook.com/gmephilippines/",
      tiktok: "https://www.tiktok.com/@gmephilippines",
    },
    {
      id: 5,
      country:
        "https://www.gmeremit.com/wp-content/uploads/2021/07/indonesia.png",
      name1: "Indonesia Remittance",
      name2: "Indonesia Loan",
      phone1: "1811-2945",
      phone2: "010-3017-6864​",
      facebook: "https://www.facebook.com/gmeindonesia/",
      tiktok: "https://www.tiktok.com/@gmeindonesia",
    },
    {
      id: 6,
      country:
        "https://www.gmeremit.com/wp-content/uploads/2021/07/mongolia.png",
      name1: "Mongolia Remittance",
      name2: "Mongolia Loan",
      phone1: "1811-2946",
      phone2: "010-2973-6864",
      facebook: "https://www.facebook.com/gmemongolia/",
      tiktok: "https://www.tiktok.com/@gmemongolia",
    },
    {
      id: 7,
      country: "https://www.gmeremit.com/wp-content/uploads/2021/07/india.png",
      name1: "India Remittance",
      name2: "India Loan",
      phone1: "1811-2905",
      phone2: "1811-2905",
      facebook: "https://www.facebook.com/gmeremitindia/",
      tiktok: "https://www.tiktok.com/@gmeindia",
    },
    {
      id: 8,
      country:
        "https://www.gmeremit.com/wp-content/uploads/2021/07/myanmar.png",
      name1: "Myanmar Remittance",
      name2: "Myanmar Loan",
      phone1: "1811-2938",
      phone2: "010-2976-6864​",
      facebook: "https://www.facebook.com/gmemyanmar",
      tiktok: "https://www.tiktok.com/@gmemyanmar",
    },
    {
      id: 9,
      country:
        "https://www.gmeremit.com/wp-content/uploads/2021/07/cambodia.png",
      name1: "Cambodia Remittance",
      name2: "Cambodia Loan",
      phone1: "1811-2948",
      phone2: "010-3077-6864",
      facebook: "https://www.facebook.com/gmecambodia/",
      tiktok: "https://www.tiktok.com/@gmecambodia",
    },
    {
      id: 10,
      country:
        "https://www.gmeremit.com/wp-content/uploads/2021/07/vietnam.png",
      name1: "Vietnam Remittance",
      name2: "Vietnam Loan",
      phone1: "1811-2937​​",
      phone2: "010-2930-6864",
      facebook: "https://www.facebook.com/gmevietnam/",
      tiktok: "https://www.tiktok.com/@gmevietnam",
    },
    {
      id: 11,
      country:
        "https://www.gmeremit.com/wp-content/uploads/2021/07/bangladesh.png",
      name1: "Bangladesh Remittance",
      name2: "Bangladesh Loan",
      phone1: "1811-2943",
      phone2: "010-9932-6864",
      facebook: "https://www.facebook.com/gmebangladesh/",
      tiktok: "https://www.tiktok.com/@gmebangladesh",
    },
    {
      id: 12,
      country:
        "https://www.gmeremit.com/wp-content/uploads/2021/07/thailand.png",
      name1: "Thailand Remittance",
      name2: "Thailand Loan",
      phone1: "1811-2941",
      phone2: "010-9928-6864​",
      facebook: "https://www.facebook.com/gmethailand/",
      tiktok: "https://www.tiktok.com/@gmeremittancethailand",
    },
    {
      id: 13,
      country:
        "https://www.gmeremit.com/wp-content/uploads/2021/07/uzbekistan.png",
      name1: "Uzbekistan & CIS Remittance",
      name2: "Uzbekistan & CIS Loan",
      phone1: "1811-2927",
      phone2: "010-2968-6864",
      facebook: "https://www.facebook.com/gmeuzbekistan/",
      tiktok: "https://www.tiktok.com/@gmerussia_uzbekistan_cis",
    },
    {
      id: 14,
      country:
        "https://www.gmeremit.com/wp-content/uploads/2021/07/pakistan.png",
      name1: "Pakistan Remittance",
      name2: "Pakistan Loan",
      phone1: "010-2760-6864",
      phone2: "010-2760-6864",
      facebook: "https://www.facebook.com/gmepakistan/",
      tiktok: "https://www.tiktok.com/@gmepakistan",
    },
    {
      id: 15,
      country: "https://www.gmeremit.com/wp-content/uploads/2021/07/china.png",
      name1: "China Remittance",
      name2: "",
      phone1: "1811-2907",
      phone2: "",
      facebook: "https://www.facebook.com/GMERemittanceChina",
      tiktok: "https://www.tiktok.com/@chinagme",
    },
  ];
  return (
    <>
      <div id="help" className="wpb">
        <div className="row_bg_wrap_help">
          <div className="inner_wrap_help">
            <div className="row_bg_help"></div>
          </div>
        </div>
        <div className="dark_left_help">
          <div className="padding_phone_help">
            <div className="vc_column_inner_help">
              <div className="wpb_wrapper_help">
                <h2 className="vc_custom_heading_help">For Customer Service</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="center">
        <div c0lassName="row_bg_wrap_help">
          <div className="inner_wrap_help">
            <div className="row_bg_help"></div>
          </div>
        </div>
        <div className="dark_left_center">
          {centers.map((item, index) => {
            return (
              <div className="container_center" key={index}>
                <div className="vc_column_inner_center">
                  <div className="wpb_wrapper_center">
                    <div className="upper_row_center">
                      <div className="row_bg_wrap_help">
                        <div className="row_bg_help"></div>
                      </div>
                      <div className="content_center">
                        <div className="country_row_center">
                          <div className="vc_column_inner_left_center">
                            <div className="wpb_wrapper_center">
                              <div className="image_wrapper_center">
                                <div className="inner_center">
                                  <div className="hover_wrap_center">
                                    <div className="hover_wrap_inner_img_loaded_center">
                                      <img
                                        className="country_image"
                                        height="667"
                                        width="1000"
                                        data-animation="fade-in"
                                        src={item.country}
                                        alt=""
                                        sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="facebook_row_center">
                          <div className="vc_column_inner_right_center">
                            <div className="wpb_wrapper_center">
                              <div className="icon_wrap_center">
                                <div className="icon_custom_center">
                                  <a
                                    href={item.facebook}
                                    target="_blank"
                                    className="facebook_icon_a"
                                  ></a>
                                  <i
                                    className="fa fa-facebook"
                                    style={{
                                      fontSize: 24,
                                      lineHeight: "36px",
                                      height: 36,
                                      width: 36,
                                      color: "#3b5998",
                                      display: "inline-block",
                                      verticalAlign: "middle",
                                      maxWidth: "none",
                                      top: 0,
                                      wordSpacing: "1px",
                                      position: "relative",
                                      textAlign: "center",
                                    }}
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="down_row_center">
                      <div className="row_bg_wrap_help">
                        <div className="row_bg_help"></div>
                      </div>
                      <div className="dark_left_help">
                        <div className="content_left_center">
                          <div className="content_left_inner_center">
                            <div className="wpb_wrapper_center">
                              <h2 className="vc_custom_heading_center">
                                {item.name1}
                              </h2>
                              <div className="wpb_content_element_center">
                                <div className="wpb_wrapper_center">
                                  <p>{item.phone1}</p>
                                </div>
                              </div>
                              <div className="divider_wrap_center">
                                <div
                                  style={{ height: 15 }}
                                  className="divider_center"
                                ></div>
                              </div>
                              <h2 className="vc_custom_heading_center">
                                {item.name2}
                              </h2>
                              <div className="content_element_center">
                                <div className="wpb_wrapper_center">
                                  <p>{item.phone2}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="content_right_center">
                          <div className="vc_column_inner_right_center">
                            <div className="wpb_wrapper_center">
                              <div className="image_wrapper_center">
                                <div className="inner_right_center">
                                  <div className="hover_wrap_center">
                                    <div className="hover_wrap_inner_img_loaded_center">
                                      <a
                                        href={item.tiktok}
                                        target="_blank"
                                        className="img_loaded_center"
                                      >
                                        <img
                                          className="tiktok_image"
                                          data-delay="0"
                                          height="818"
                                          width="815"
                                          data-animation="fade-in"
                                          src="https://www.gmeremit.com/wp-content/uploads/2022/02/372102780_TIKTOK_ICON_1080-e1644558473779.png"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
    </>
  );
};
export default Help;
