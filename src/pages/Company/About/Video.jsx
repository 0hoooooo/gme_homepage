import "../../../css/AboutUs/Video.css";

const Video = () => {
  return (
    <div id="fws_64648541eb270" className="first_section">
      <div className="row_bg_about">
        <div className="inner_wrap_about">
          <div className="row_bg_about"></div>
        </div>
      </div>
      <div className="video_color_overlay_about"></div>

      <div className="video_wrap_position_loaded">
        <div className="video_inner_about">
          <video
            className="video_bg_about"
            width="1800"
            height="700"
            preload="auto"
            loop={true}
            autoPlay={true}
            muted
            playsInline
          >
            <source
              src="https://www.gmeremit.com/wp-content/uploads/2021/10/Final-capital-About-us-intro.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="dark_left_about">
        <div className="padding_phone_about">
          <div className="vc_column_inner_about">
            <div className="wpb_wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Video;
