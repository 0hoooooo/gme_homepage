import "../../../css/AboutUs/Ceo.css";

const Ceo = () => {
  return (
    <div id="ceo" className="second_section">
      <div className="row_bg_wrap_ceo">
        <div className="inner_wrap_image_ceo">
          <div className="using_image_loaded_ceo"></div>
        </div>
      </div>
      <div className="divder_wrap_ceo">
        <svg
          className="nectar_shape_divider"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"
            style={{ opacity: 0.3 }}
          ></path>
          <path
            d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"
            style={{ opacity: 0.3 }}
          ></path>
          <path
            d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"
            style={{ fill: "#fff" }}
          ></path>
        </svg>
      </div>
      <div className="dark_left_ceo">
        <div className="padding_phone_ceo">
          <div className="vc_column_inner_ceo">
            <div className="wpb_wrapper_ceo">
              <div className="wpb_content_wrapper_ceo">
                <div className="wpb_wrapper_ceo">
                  <h6
                    className="ceo_word"
                    style={{ textAlign: "center", color: "#191c1f" }}
                  >
                    <span style={{ color: "#000000" }}>
                      “As a leading fintech company in South Korea, we invest in
                      cutting-edge technology and our people, which will
                      continue to achieve mutual growth, customer success, and
                      bring the best Financial Solution Provider to all.”
                    </span>
                  </h6>
                  <p style={{ paddingBottom: 27 }}>&nbsp;</p>
                  <p style={{ textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#000000" }}>Sung Jong Hwa</span>
                    </strong>
                    <br />
                    <span style={{ color: "#000000" }}>CEO</span>
                  </p>
                </div>
              </div>

              <div className="divider_wrap_ceo">
                <div className="divider" style={{ height: 60 }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="padding_phone_ceo3">
          <div className="vc_column_inner_ceo2">
            <div className="wpb_wrapper_ceo">
              <div className="image_animation_wrapper">
                <div className="inner_ceo">
                  <div className="hover_wrap_ceo">
                    <div className="hover_wrap_image_ceo">
                      <img
                        className="ceo_image"
                        height="638"
                        width="310"
                        src="https://www.gmeremit.com/wp-content/uploads/2023/02/Ceo-picture.png"
                        alt=""
                        sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                        srcset="https://www.gmeremit.com/wp-content/uploads/2023/02/Ceo-picture.png 310w, https://www.gmeremit.com/wp-content/uploads/2023/02/Ceo-picture-146x300.png 146w"
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
  );
};
export default Ceo;
