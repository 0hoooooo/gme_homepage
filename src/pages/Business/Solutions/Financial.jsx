import "../../../css/Solutions/Financial.css";

const Financial = () => {
  const upperlist = [
    {
      id: 1,
      title: "1.Marketplaces",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/Marketplace@3x-2.png",
    },
    {
      id: 2,
      title: "2.Merchants",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/mmerchants.png",
    },
    {
      id: 3,
      title: "3.Global Service Providers",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/Global-Service-Providers@3x.png",
    },
    {
      id: 4,
      title: "4.Digital Marketing & Services",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/digital-marketing-payrolls@3x.png",
    },
  ];
  const downlist = [
    {
      id: 5,
      title: "5.Freelancers",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/freelancers@3x.png",
    },
    {
      id: 6,
      title: "6.Payrolls",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/digital-marketing-payrolls@3x.png",
    },
    {
      id: 7,
      title: "7.Vendors & Suppliers",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/vendors-and-supplies.png",
    },
    {
      id: 8,
      title: "8.Traders",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/Traders.png",
    },
  ];

  return (
    <>
      <div id="solutions">
        <div className="row-bg-wrap">
          <div className="inner_wrap_using_image">
            <div className="row_bg_using_image_loaded1"></div>
          </div>
        </div>
        <div className="dark_left1">
          <div className="extra_padding1">
            <div className="vc_column_inner1">
              <div className="wpb_wrapper1">
                <div className="divider-wrap">
                  <div className="divider" style={{ height: 100 }}></div>
                </div>
                <div id="fws_6459c7353ec90" className="content_wrapper">
                  <div className="row-bg-wrap2">
                    <div className="row-bg2"></div>
                  </div>
                  <div className="dark_left2">
                    <div className="main_wrapper">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <h1
                            className="vc_custom_heading"
                            style={{ textAlign: "left", fontSize: 60 }}
                          >
                            GME for SMB's &amp;
                            <br />
                            E-Commerce Merchants
                          </h1>
                          <div className="divider-wrap" style={{ height: 15 }}>
                            <div className="divider"></div>
                          </div>
                          <p className="sub_title">
                            Creating Value together by reshaping payments with
                            collaboration
                          </p>
                          <p>REDUCE COST ON BUSINESS TRANSFERS</p>
                          <a
                            className="contact_button"
                            href="https://www.gmeremit.com/contact-sales/"
                          >
                            <span>Contact Sales</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="content_image_wrapper">
                      <div className="vc_column_inner2">
                        <div className="wpb_wrapper">
                          <div className="image_aniamtion_wrap">
                            <div className="inner">
                              <div className="hover_wrap">
                                <div className="hover_wrap_image_loaded">
                                  <img
                                    alt=""
                                    width={1000}
                                    className="animation_image"
                                    src="https://www.gmeremit.com/wp-content/uploads/2022/08/landing-image-1536x1011.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider-wrap">
                  <div className="divider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="solutions"
        class="wpb_row vc_row-fluid vc_row full-width-section  vc_row-o-equal-height vc_row-flex   top_padding_phone_60px bottom_padding_phone_60px "
        style={{ paddingTop: 120, paddingBottom: 120 }}
      >
        <div class="row-bg-wrap">
          <div class="inner_wrap_using_image">
            <div class="row_bg_using_image_loaded2"></div>
          </div>
        </div>

        <div class="dark_left_solution">
          <div class="extr">
            <div class="vc_column_inner_solution">
              <div class="wpb_wrapper">
                <h1 class="vc_custom_heading_solution">
                  Our Payment Solutions are designed for
                </h1>
                <div class="divider-wrap" data-alignment="default">
                  <div class="divider"></div>
                </div>

                <div id="fws_645b54dd95cb3" class="solution_list">
                  <div class="row_bg_wrap">
                    <div class="row-bg"></div>
                  </div>
                  <div class="solution_left">
                    {upperlist.map((item, id) => {
                      return (
                        <div key={id} className="padding_phone">
                          <div className="vc_column_inner_solution">
                            <div className="wpb_wrapper_solution">
                              <div className="image_wrapper_solution">
                                <div className="inner">
                                  <div className="hover_wrapper">
                                    <div className="hover_wrapper_image">
                                      <img src={item.src} />
                                    </div>
                                  </div>
                                </div>
                                {item.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div id="fws_645b54dd95cb3" class="solution_list">
                  <div class="row_bg_wrap">
                    <div class="row-bg"></div>
                  </div>
                  <div class="row_col_wrap_12_inner col span_12  left">
                    {downlist.map((item, id) => {
                      return (
                        <div key={id} className="padding_phone">
                          <div className="vc_column_inner_solution">
                            <div className="wpb_wrapper_solution">
                              <div className="image_wrapper_solution">
                                <div className="inner">
                                  <div className="hover_wrapper">
                                    <div className="hover_wrapper_image">
                                      <img src={item.src} />
                                    </div>
                                  </div>
                                </div>
                                {item.title}
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
    </>
  );
};
export default Financial;
