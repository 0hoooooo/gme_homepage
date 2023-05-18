import { useEffect } from "react";
import "../../../css/AboutUs/History.css";
const History = () => {
  useEffect(() => {
    const animatedTags = document.querySelectorAll(".containertime");
    animatedTags.forEach((tag) => {
      tag.style.opacity = 0;
    });
    const fadeIn = function () {
      let delay = 0.05;
      animatedTags.forEach((tag) => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;

        if (tagTop < window.innerHeight && tagBottom > 0) {
          tag.style.animation = `fadein 1s ${delay}s both`;
          delay = delay + 0.1;
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
    <>
      <div
        id="history"
        className="wpb_row vc_row-fluid vc_row   top_padding_phone_60px "
      >
        <div className="row_bg_wrap_history">
          <div className="inner_wrap_history">
            <div className="row_bg_history"></div>
          </div>
        </div>
        <div className="dark_center_history">
          <div className="padding_phone_history">
            <div className="vc_column_inner_history">
              <div className="wpb_wrapper_history">
                <h2 className="vc_custom_heading_history">History</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="fws_64657aabc5b9d" className="wpb_row_content_history">
        <div className="row_bg_wrap_history">
          <div className="inner_wrap_history">
            <div className="row_bg_history"></div>
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="containertime timeleft">
          <div className="timecontent">
            <h2 className="timeline_title">2022</h2>
            <p></p>
            <ul>
              <li>
                <span className="s2">Start Payment Business</span>
              </li>
              <li>
                <span className="s2">
                  Target to Achieve $ 2.0 Billion in Overseas Remittance
                </span>
              </li>
              <li>
                <a href="https://www.gmeremit.com/2022/07/06/granted-pg-license/">
                  Foreign currency business license granted
                </a>
              </li>
            </ul>
            <p></p>
          </div>
        </div>
        <div className="containertime timeright">
          <div className="timecontent">
            <h2 className="timeline_title">2021 </h2>
            <p></p>
            <ul>
              <li>Achieved $ 1.4 Billion in Overseas Remittance</li>
              <li>Mobile Coupon Service Launched</li>
              <li>
                <a href="https://www.gmeremit.com/2022/07/06/granted-pg-license/">
                  <span className="s4">Granted PG License</span>
                </a>
              </li>
            </ul>{" "}
            <p></p>
          </div>
        </div>
        <div className="containertime timeleft">
          <div className="timecontent">
            <h2 className="timeline_title">2020</h2>
            <p></p>
            <ul>
              <li>
                <span className="s2">Achieved $1 Billion in Remittance</span>
              </li>
              <li>
                <span className="s2">Mobile Top-up Service Launched</span>
              </li>
              <li>
                <a href="https://www.gmeremit.com/2022/07/06/granted-pg-license/">
                  Granted Prepaid E-Payment License
                </a>
              </li>
            </ul>
            <p></p>
          </div>
        </div>
        <div className="containertime timeright">
          <div className="timecontent">
            <h2 className="timeline_title">2019 </h2>
            <p></p>
            <ul>
              <li> Domestic Transfer Service Launched</li>
              <li>
                <a href="https://online.gmeremit.com/Website/GMEBranches.aspx">
                  12 Nationwide Branches Opened
                </a>
              </li>
              <li>
                <a href="https://online.gmeremit.com/Website/GMECenter.aspx">
                  3 Nationwide Centers Opened
                </a>
              </li>
            </ul>{" "}
            <p></p>
          </div>
        </div>
        <div className="containertime timeleft">
          <div className="timecontent">
            <h2 className="timeline_title">2018</h2>
            <p></p>
            <ul>
              <li>Achieved $40 Million in Remittance</li>
              <li>
                <a href="https://online.gmeremit.com/Website/GMESCRRO.aspx">
                  Selected as Seoul City Recommended Remittance Operator
                </a>
              </li>
            </ul>
            <p></p>
          </div>
        </div>
        <div className="containertime timeright">
          <div className="timecontent">
            <h2 className="timeline_title">2017 </h2>
            <p></p>
            <ul>
              <li>First Online Service Launched</li>
              <li>
                <a href="https://online.gmeremit.com/Website/FirstDay.aspx">
                  First Service Provider in Korea​
                </a>
              </li>
              <li>
                <a href="https://online.gmeremit.com/Website/GMELicense.aspx">
                  First Remittance License in Korea​
                </a>
              </li>
            </ul>{" "}
            <p></p>
          </div>
        </div>
      </div>

      {/* <div id="fws_64657aabc5b9d" className="wpb_row_content_history">
        <div className="row_bg_wrap_history">
          <div className="inner_wrap_history">
            <div className="row_bg_history"></div>
          </div>
        </div>
        <div className="dark_center_history">
          <div className="padding_phone_history">
            <div className="vc_column_inner_history">
              <div className="wpb_wrapper_history">
                <div className="wpb_content_element_html">
                  <div className="wpb_wrapper_history">
                    <div id="btimeline_8922">
                      <div className="timeline timeline_loaded">
                        <div className="timeline_wrap">
                          <div className="timeline_items">
                            <div className="timeline_item timeline_item-left">
                              <div className="timeline_item_inner">
                                <div className="timeline_item_inner">
                                  <div className="timeline_content_wrap">
                                    <div className="timeline_content_wrap">
                                      <div className="timeline_content">
                                        <h2 className="timeline_title">2022</h2>
                                        <p></p>
                                        <ul>
                                          <li>
                                            <span className="s2">
                                              Start Payment Business
                                            </span>
                                          </li>
                                          <li>
                                            <span className="s2">
                                              Target to Achieve $ 2.0 Billion in
                                              Overseas Remittance
                                            </span>
                                          </li>
                                          <li>
                                            <a href="https://www.gmeremit.com/2022/07/06/granted-pg-license/">
                                              Foreign currency business license
                                              granted
                                            </a>
                                          </li>
                                        </ul>
                                        <p></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="timeline__item animated timeline__item--right fadeIn">
                              <div className="timeline__item__inner">
                                <div className="timeline__item__inner">
                                  <div className="timeline__content__wrap">
                                    <div className="timeline__content__wrap">
                                      <div className="timeline__content">
                                        <h2>2021 </h2>
                                        <p></p>
                                        <ul>
                                          <li>
                                            Achieved $ 1.4 Billion in Overseas
                                            Remittance
                                          </li>
                                          <li>
                                            Mobile Coupon Service Launched
                                          </li>
                                          <li>
                                            <a href="https://www.gmeremit.com/2022/07/06/granted-pg-license/">
                                              <span className="s4">
                                                Granted PG License
                                              </span>
                                            </a>
                                          </li>
                                        </ul>{" "}
                                        <p></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="timeline__item animated timeline__item--left fadeIn">
                              <div className="timeline__item__inner">
                                <div className="timeline__item__inner">
                                  <div className="timeline__content__wrap">
                                    <div className="timeline__content__wrap">
                                      <div className="timeline__content">
                                        <h2>2020 </h2>
                                        <p></p>
                                        <ul>
                                          <li>
                                            Achieved $1 Billion in Remittance
                                          </li>
                                          <li>
                                            Mobile Top-up Service Launched
                                          </li>
                                          <li>
                                            <a href="https://online.gmeremit.com/Website/news_detail6.aspx">
                                              Granted Prepaid E-Payment License
                                            </a>
                                          </li>
                                        </ul>{" "}
                                        <p></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="timeline__item animated timeline__item--right fadeIn">
                              <div className="timeline__item__inner">
                                <div className="timeline__item__inner">
                                  <div className="timeline__content__wrap">
                                    <div className="timeline__content__wrap">
                                      <div className="timeline__content">
                                        <h2>2019 </h2>
                                        <p></p>
                                        <ul>
                                          <li>
                                            Domestic Transfer Service Launched
                                          </li>
                                          <li>
                                            <a href="https://online.gmeremit.com/Website/GMEBranches.aspx">
                                              12 Nationwide Branches Opened
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://online.gmeremit.com/Website/GMECenter.aspx">
                                              3 Nationwide Centers Opened
                                            </a>
                                          </li>
                                        </ul>{" "}
                                        <p></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="timeline__item animated timeline__item--left fadeIn">
                              <div className="timeline__item__inner">
                                <div className="timeline__item__inner">
                                  <div className="timeline__content__wrap">
                                    <div className="timeline__content__wrap">
                                      <div className="timeline__content">
                                        <h2>2018 </h2>
                                        <p></p>
                                        <ul>
                                          <li>
                                            Achieved $40 Million in Remittance
                                          </li>
                                          <li>
                                            <a href="https://online.gmeremit.com/Website/GMESCRRO.aspx">
                                              Selected as Seoul City Recommended
                                              Remittance Operator
                                            </a>
                                          </li>
                                        </ul>{" "}
                                        <p></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="timeline__item animated timeline__item--right fadeIn">
                              <div className="timeline__item__inner">
                                <div className="timeline__item__inner">
                                  <div className="timeline__content__wrap">
                                    <div className="timeline__content__wrap">
                                      <div className="timeline__content">
                                        <h2>2017 </h2>
                                        <p></p>
                                        <ul>
                                          <li>First Online Service Launched</li>
                                          <li>
                                            <a href="https://online.gmeremit.com/Website/FirstDay.aspx">
                                              First Service Provider in Korea​
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://online.gmeremit.com/Website/GMELicense.aspx">
                                              First Remittance License in Korea​
                                            </a>
                                          </li>
                                        </ul>{" "}
                                        <p></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="timeline__item animated timeline__item--left fadeIn">
                              <div className="timeline__item__inner">
                                <div className="timeline__item__inner">
                                  <div className="timeline__content__wrap">
                                    <div className="timeline__content__wrap">
                                      <div className="timeline__content">
                                        <h2>2016 </h2>
                                        <p>Establishment of GME </p>
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
        </div>
      </div> */}
    </>
  );
};
export default History;
