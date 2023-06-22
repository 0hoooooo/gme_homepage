import "../../../css/Company/AboutUs/Service.css";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "B2B payments",
      content: "Fast and low-cost cross-border payouts and collections",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/02/b2b.png",
    },
    {
      id: 2,
      title: "Personal Remittance",
      content: "Send and receive money with a few clicks",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/02/Remittance.png",
    },
    {
      id: 3,
      title: "Easy Loan",
      content:
        "Apply for a 100% paperless loan through our app and receive it on the same day.",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/02/loan.png",
    },
    {
      id: 4,
      title: "Digital Wallet",
      content:
        "Deposit &amp; withdraw and send &amp; pay with the convenience of your digital wallet payment.",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/02/digital-wallet.png",
    },
    {
      id: 5,
      title: "Money Exchange",
      content:
        "Exchange money in our branches with better exchange rates than banks",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/02/exchange-rate.png",
    },
    {
      id: 6,
      title: "Mobile Topup",
      content:
        "Use the fastest way for Domestic and International mobile recharge -150+ countries, 500 + operators around the globe",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/02/Topup.png",
    },
    {
      id: 7,
      title: "Local Transfer",
      content:
        "Send hassle free local transfer in multi-languages to send your money from one account to another or to your friends.",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/02/local-transfer.png",
    },
    {
      id: 8,
      title: "Gift Coupons",
      content:
        "Buy and send gift coupons to your loved ones with your reward points of using our service.",
      src: "https://www.gmeremit.com/wp-content/uploads/2023/02/coupons.png",
    },
  ];
  return (
    <div
      id="services"
      className="wpb_row vc_row-fluid vc_row full-width-section   top_padding_phone_60px "
    >
      <div className="row_bg_wrap_service">
        <div className="inner_wrap_service">
          <div className="row_bg_service"></div>
        </div>
      </div>
      <div className="nectar_divider_wrapper_service">
        <svg
          className="nectar_shape_divider_service"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          {" "}
          <path d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"></path>{" "}
          <path d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"></path>{" "}
          <path d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"></path>{" "}
        </svg>
      </div>
      <div className="dark_left_service">
        <div className="padding_phone_service">
          <div className="vc_column_inner_service">
            <div className="wpb_wrapper_service">
              <h2 className="vc_custom_heading_service">Our Services</h2>

              <div id="fws_64656a5f49690" className="row_inner_wrapper_service">
                <div className="row_bg_wrap2_service">
                  <div className="row_bg2_service"></div>
                </div>

                <div className="dark_left_service">
                  {services.map((item, index) => {
                    return (
                      <div className="padding_phone2_service" key={item.id}>
                        <div className="vc_column_inner_service">
                          <div className="wpb_wrapper_service">
                            <div className="imgae_animatrion_wrapper">
                              <div className="inner_service">
                                <div className="hover_wrap_service">
                                  <div className="hover_wrap_img_loaded_service">
                                    <img
                                      className="image_service"
                                      data-delay="0"
                                      height="455"
                                      width="455"
                                      data-animation="fade-in"
                                      src={item.src}
                                      alt=""
                                      sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text_column_wrapper_service">
                              <div className="wpb_wrapper_service">
                                <p
                                  style={{
                                    textAlign: "center",
                                    paddingBottom: 0,
                                    marginBottom: 0,
                                  }}
                                >
                                  <strong>{item.title}</strong>
                                  <br />
                                  {item.content}
                                </p>
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
export default Service;
