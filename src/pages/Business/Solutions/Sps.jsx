import { useEffect, useState } from "react";
import "../../../css/Solutions/Sps.css";
const Sps = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const threshold = 200;

      if (scrollPosition > windowHeight - threshold) {
        setFadeIn(true);
      } else {
        setFadeIn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const animatedTags = document.querySelectorAll(".sps_image");
    animatedTags.forEach((tag) => {
      tag.style.opacity = 0;
    });
    const fadeIn = function () {
      let delay = 0.5;
      animatedTags.forEach((tag) => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;

        if (tagTop < window.innerHeight && tagBottom > 0) {
          tag.style.animation = `fadein 1s ${delay}s both`;
          delay = delay + 0.5;
        } else {
          tag.style.opacity = 0;
          tag.style.animation = "";
        }
      });
    };
    document.addEventListener("scroll", function () {
      fadeIn();
    });
  }, []);
  return (
    <div
      id="sps"
      className="wpb_row vc_row-fluid vc_row full-width-section  vc_row-o-equal-height vc_row-flex  "
    >
      <div className="row_bg_wrap_sps">
        <div className="image_wrapper_sps">
          <div className="image_loaded_sps"></div>
        </div>
      </div>
      <div className="dark_left_sps">
        <div className="padding_phone_sps">
          <div className="vc_column_inner_sps">
            <div className="wpb_wrapper_sps">
              <h1 className="vc_custom_heading_sps">GME SPS</h1>
              <div className="divider_wrap_sps">
                <div className="divider_sps"></div>
              </div>
              <div className="animation_image_sps">
                <div className="cascading_image">
                  <div className="inner_wrap_sps">
                    <div className="bg_layer_sps">
                      <div className="image_upload_sps">
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/02/Sps2-1.png"
                          sizes="(min-width: 500px) 55vw, 100vw"
                          height="400"
                          width="12"
                          className="sps_image"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cascading_image_2">
                  <div className="inner_wrap_sps">
                    <div className="bg_layer_sps">
                      <div className="image_upload_sps">
                        {" "}
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/02/Sps3-2.png"
                          sizes="(min-width: 1000px) 55vw, 100vw"
                          height="474"
                          width="1281"
                          className="sps_image"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cascading_image_2">
                  <div className="inner_wrap_sps">
                    <div className="bg_layer_sps">
                      <div className="image_upload_sps">
                        {" "}
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/02/Sps3-1.png"
                          sizes="(min-width: 1000px) 55vw, 100vw"
                          height="474"
                          width="1281"
                          className="sps_image"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cascading_image_2">
                  <div className="inner_wrap_sps">
                    <div className="bg_layer_sps">
                      <div className="image_upload_sps">
                        {" "}
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/02/Sps1-1.png"
                          sizes="(min-width: 1000px) 55vw, 100vw"
                          height="474"
                          width="1281"
                          className="sps_image"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider_wrap_sps">
                <div className="divider_compelted_sps"></div>
              </div>
              <div id="vas">
                <div className="row_bg_wrap_vas">
                  <div className="row_bg_vas"></div>
                </div>
                <div className="darl_left_vas">
                  <div className="padding_phone_vas">
                    <div className="vc_column_inner_vas">
                      <div className="wpb_wrapper_vas">
                        <h1 className="vc_custom_heading_vas">GME VAS</h1>
                        <div className="animation_image_vas">
                          <div className="cascading_image_top">
                            <div className="inner_wrap_sps">
                              <div className="bg_layer_sps">
                                <div className="image_upload_sps">
                                  {" "}
                                  <img
                                    src="https://www.gmeremit.com/wp-content/uploads/2023/02/vas4.png"
                                    sizes="(min-width: 1000px) 55vw, 100vw"
                                    height="749"
                                    width="1055"
                                    className="sps_image"
                                    alt=""
                                  />{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cascading_image_2">
                            <div className="inner_wrap_sps">
                              <div className="bg_layer_sps">
                                <div className="image_upload_sps">
                                  {" "}
                                  <img
                                    src="https://www.gmeremit.com/wp-content/uploads/2023/02/vas2.png"
                                    sizes="(min-width: 1000px) 55vw, 100vw"
                                    height="749"
                                    width="1055"
                                    className="sps_image"
                                    alt=""
                                  />{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cascading_image_2">
                            <div className="inner_wrap_sps">
                              <div className="bg_layer_sps">
                                <div className="image_upload_sps">
                                  {" "}
                                  <img
                                    src="https://www.gmeremit.com/wp-content/uploads/2023/02/vas3.png"
                                    sizes="(min-width: 1000px) 55vw, 100vw"
                                    height="749"
                                    width="1055"
                                    className="sps_image"
                                    alt=""
                                  />{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cascading_image_2">
                            <div className="inner_wrap_sps">
                              <div className="bg_layer_sps">
                                <div className="image_upload_sps">
                                  <img
                                    src="https://www.gmeremit.com/wp-content/uploads/2023/02/vas1.png"
                                    sizes="(min-width: 1000px) 55vw, 100vw"
                                    height="749"
                                    width="1055"
                                    className="sps_image"
                                    alt=""
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sps;
