import "../../../css/Company/ContactUs/Help2.css";
const Help2 = () => {
  const africa = [
    {
      id: 1,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Uganda_lgflag-1.png",
    },
    {
      id: 2,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Tunisia_lgflag-1.png",
    },
    {
      id: 3,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/South_Africa_lgflag-1.png",
    },
    {
      id: 4,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Sierra_Leone_lgflag-1.png",
    },
    {
      id: 5,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Seychelles_lgflag-1.png",
    },
    {
      id: 6,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Rwanda_lgflag-1.png",
    },
    {
      id: 7,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Nigeria_lgflag-1.png",
    },
    {
      id: 8,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Morocco_lgflag-1.png",
    },
    {
      id: 9,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Kenya_lgflag-1.png",
    },
    {
      id: 10,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Ghana_lgflag-1.png",
    },
    {
      id: 11,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Gambia_lgflag-1.png",
    },
    {
      id: 12,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Ethiopia_lgflag-1.png",
    },
    {
      id: 13,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/DRC_lgflag-1.png",
    },
    {
      id: 14,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Botswana_lgflag-1.png",
    },
    {
      id: 15,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Cameroon_lgflag-1.png",
    },
  ];
  return (
    <div id="help2">
      <div className="row_bg_wrap_help2">
        <div className="inner_wrap_help2">
          <div className="row_bg_help2"></div>
        </div>
      </div>
      <div className="dark_left_help2">
        <div className="padding_phone_help2">
          <div className="vc_column_inner_help2">
            <div className="wpb_wrapper_help2">
              <div className="row_inner_help2">
                <div className="row_bg_wrap_help2">
                  <div className="row_bg_help2"></div>
                </div>
                <div className="row_left_help2">
                  <div className="column_container_help2">
                    <div className="vc_column_inner2_help2">
                      <div className="wpb_wrapper_help2">
                        {africa.map((item, index) => {
                          return (
                            <div className="img_wrapper_help2" key={index}>
                              <div className="inner_help2">
                                <div className="hover_wrap_help2">
                                  <div className="hover_wrap_img_loaded">
                                    <img
                                      className="africa_image"
                                      height="302"
                                      width="500"
                                      data-animation="fade-in"
                                      src={item.src}
                                      alt=""
                                      sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="column_right_help2">
                    <div className="vc_column_inner2_help2">
                      <div className="wpb_wrapper_help2">
                        <div className="nectar_icon_wrap_help2">
                          <div className="nectar_icon_help2">
                            <a
                              href="https://www.facebook.com/gmeafrica/"
                              target="_blank"
                              className="facebook_icon_a_help2"
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
              <div className="content_row_help2">
                <div className="row_bg_wrap_help2">
                  <div className="row_bg_help2"></div>
                </div>
                <div className="content_wrapper_help2">
                  <div className="padding_phone_content_help2">
                    <div className="vc_column_inner_content_help2">
                      <div className="wpb_wrapper_help2">
                        <h2 className="vc_custom_heading_help2">
                          African Region
                        </h2>
                        <div className="wpb_content_element_help2">
                          <div className="wpb_wrapper_help2">
                            <p>
                              1811-2904
                              <br />
                              010-2989-6864
                            </p>
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
};
export default Help2;
