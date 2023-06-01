import "../../../css/Solutions/Partners.css";
import Slider from "react-slick";
const Partners = () => {
  const list = [
    {
      id: 1,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/03/ria-money-transfer.png",
    },
    {
      id: 2,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/03/thunes.png",
    },
    {
      id: 3,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/03/xe.png",
    },
    {
      id: 4,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/hanabank.png",
    },
    {
      id: 5,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/skyee.png",
    },
    {
      id: 6,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/ripple.png",
    },
    {
      id: 7,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/Cogo.png",
    },
    {
      id: 8,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/Lian.png",
    },
    {
      id: 9,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/pingpong.png",
    },
    {
      id: 10,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/taxapay.png",
    },
    {
      id: 11,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/01/payer-max.png",
    },
  ];
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          display: "block",
          background: "red",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          background: "green",
          color: "black",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div id="fws_645d7d8c04d58" className="section_partner">
      <div id="partners" className="inner_partner">
        <div className="row-bg-wrap_partner">
          <div className="row-bg"></div>
        </div>
        <div className="inner_left_partner">
          <div className="container_phone1">
            <div className="vc_column-inner">
              <div className="wpb_wrapper_partner"></div>
            </div>
          </div>

          <div className="container_phone2">
            <div className="vc_column-inner">
              <div className="wpb_wrapper_partner">
                <h1 className="vc_custom_heading_partner">
                  Trusted and Partnered by
                </h1>
              </div>
            </div>
          </div>

          <div className="container_phone3">
            <div className="vc_column-inner">
              <div className="wpb_wrapper"></div>
            </div>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {list.map((item, index) => {
          return (
            <div
              style={{
                boxShadow: "20px 20px 5px grey",
              }}
              key={index}
            >
              <img
                src={item.src}
                style={{
                  width: "100%",
                }}
              />
            </div>
          );
        })}
      </Slider>
      {/* <div className="row-bg-wrap_partner">
        <div className="inner-wrap_partner">
          <div className="row-bg_partner"></div>
        </div>
      </div> */}

      {/* <div className="dark_left_partner">
        <div className="padding_phone_partner">
          <div className="vc_column-inner_partner">
            <div className="wpb_wrapper">
              <div className="divider-wrap">
                <div className="divider"></div>
              </div>
              <div className="divider-wrap">
                <div className="divider"></div>
              </div>
              <div id="partners" className="inner_partner">
                <div className="row-bg-wrap_partner">
                  <div className="row-bg"></div>
                </div>
                <div className="inner_left_partner">
                  <div className="container_phone1">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper_partner"></div>
                    </div>
                  </div>

                  <div className="container_phone2">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper_partner">
                        <h1 className="vc_custom_heading_partner">
                          Trusted and Partnered by
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="container_phone3">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider-wrap" data-alignment="default">
                <div className="divider"></div>
              </div>

              <div className="carousel_outer">
                <div className="carousel_wrap">
                  <div className="carousel_heading">
                    <div className="carousel_container">
                      <h2 className="uppercase" style={{ fontSize: 12 }}></h2>
                      <div className="control_wrap">
                        <a className="carousel_prev" href="#">
                          <i className="fa fa-angle-left"></i>
                        </a>
                        <div className="item_count">
                          <span className="current">4</span>/
                          <span className="total">{list.length}</span>
                        </div>
                        <a className="carousel_next" href="#">
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="caroufredsel_wrapper">
                    <ul className="row carousel finished-loading">
                      <li className="col span_4">
                        <div className="img-with-aniamtion-wrap center">
                          <div className="inner">
                            <div className="hover-wrap">
                              <div className="hover-wrap-inner img-loaded">
                                <img
                                  className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                                  data-delay="0"
                                  height="455"
                                  width="455"
                                  data-animation="fade-in"
                                  src="https://www.gmeremit.com/wp-content/uploads/2023/03/ria-money-transfer.png"
                                  alt=""
                                  sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                  srcSet="https://www.gmeremit.com/wp-content/uploads/2023/03/ria-money-transfer.png 455w, https://www.gmeremit.com/wp-content/uploads/2023/03/ria-money-transfer-300x300.png 300w, https://www.gmeremit.com/wp-content/uploads/2023/03/ria-money-transfer-150x150.png 150w, https://www.gmeremit.com/wp-content/uploads/2023/03/ria-money-transfer-100x100.png 100w, https://www.gmeremit.com/wp-content/uploads/2023/03/ria-money-transfer-140x140.png 140w, https://www.gmeremit.com/wp-content/uploads/2023/03/ria-money-transfer-350x350.png 350w"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Partners;
