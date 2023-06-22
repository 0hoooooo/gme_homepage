import "../../../css/Company/ContactUs/Banner.css";
const Banner = () => {
  return (
    <div id="contact_banner">
      <div className="row_bg_wrap_banner">
        <div className="inner_wrap_banner">
          <div className="row_bg_banner"></div>
        </div>
      </div>
      <div className="video_color_overlay_banner"></div>

      <div className="video_wrap_loaded_banner">
        <div className="video_inner_banner">
          <video
            className="video_banner"
            width="1800"
            height="700"
            preload="auto"
            loop=""
            autoplay=""
            muted=""
            playsinline=""
          >
            <source
              src="https://gmefinance.co.kr/staging-business/wp-content/uploads/2021/07/branches-12-final.mp4"
              type="video/mp4"
            />
          </video>{" "}
        </div>
      </div>

      <div className="content_banner">
        <div className="padding_left_banner">
          <div className="vc_column_inner_banner">
            <div className="wpb_wrapper_banner">
              <div className="wpb_content_element">
                <div className="wpb_wrapper_banner">
                  <h2 style={{ textAlign: "center", marginBottom: 7 }}>
                    <span style={{ color: "#ffffff" }}>
                      <strong>12 Branches</strong>
                    </span>
                  </h2>
                  <h3
                    style={{
                      textAlign: "center",
                      fontSize: 30,
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ color: "#ffffff" }}>
                      All Around South Korea
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
