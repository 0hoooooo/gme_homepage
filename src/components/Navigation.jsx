import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Link, ScrollLink } from "react-scroll";
const Navigation = (props) => {
  const { list, handleClick, arr } = props;
  useEffect(() => {
    console.log("navigation", list);
    console.log("menu:", arr);
  }, []);
  const navigate = useNavigate();
  const goPlatform = () => {
    console.log("이동");
    navigate("/business/platform");
    window.location.reload();
  };
  const goSolution = () => {
    console.log("이동");
    navigate("/business/solutions");
    window.location.reload();
  };
  const goDeveloper = () => {
    console.log("이동");
    navigate("/business/developers");
    window.location.reload();
  };

  const goAboutUs = () => {
    console.log("이동");
    navigate("/company/aboutUs");
    window.location.reload();
  };
  const goCareers = () => {
    console.log("이동");
    navigate("/company/careers");
    window.location.reload();
  };
  const goContactUs = () => {
    console.log("이동");
    navigate("/company/contactUs");
    window.location.reload();
  };
  const goHome = () => {
    console.log("홈으로 이동");
    navigate("/personal");
    window.location.reload();
  };

  const [locale, setLocale] = useState(localStorage.getItem("locale") ?? "ko");

  useEffect(() => {
    console.log("locale:", locale);
    localStorage.setItem("locale", locale);
  }, [locale]);
  const chooseLan = (e) => {
    setLocale(e.target.value);
    window.location.reload();
  };
  return (
    <>
      <div className="menu">
        <nav className="menu_nav">
          <ul className="sf-menu">
            {/* {list.map((item, index) => (
      <li
        className="menu_item1"
        key={index}
        onClick={() => handleClick(item.name)}
      >
        <a className="businee_solutions_a">
          <span
            className="menu-title-text"
            style={{
              listStyle: "none outside none",
              margin: 0,
              padding: 0,
            }}
          >
            {item.name}
          </span>
        </a>
        {item.sub1_category ? (
          <ul className="sub_menu">
            <li id="menu-item-16863" className="business_left">
              <a onClick={goSolution} className="business_solutions_a">
                <div className="business_left_banner">
                  <div className="business_left_image_layer">
                    <div className="business_left_image_layer_loaded"></div>
                    <div className="business_left_color_overlay"></div>
                  </div>
                  <div className="business_left_inner_content">
                    <span className="title_business">
                      <span className="title_menu">B2B</span>
                    </span>
                    <span className="menu_item_desc">
                      Reduce Cost on Business Transfers
                    </span>
                  </div>
                </div>
              </a>
            </li>
            {item.sub1_category?.map(
              (item, index) => (
                console.log("sub1_category:", item),
                (
                  <li
                    id="menu-item-16714"
                    className="developers"
                    key={index}
                  >
                    <a
                      className="business_solutions_a"
                      onClick={goSolution}
                    >
                      <span className="menu-title-text">
                        {item.name}
                      </span>
                    </a>

                    <ul className="sub-menu">
                      {item.sub2_category?.map((item, index) => (
                        <li
                          id="menu-item-16718"
                          className="sub-menu-li"
                        >
                          <a
                            href="#!"
                            className="nectar-menu-item-with-icon2"
                            onClick={goSolution}
                          >
                            <img
                              src="https://www.gmeremit.com/wp-content/uploads/2023/01/financial.png"
                              className="icon_image"
                              alt=""
                              width="128"
                              height="128"
                            />
                            <span className="nectar-menu-icon-text">
                              <span className="menu_title_text2">
                                {item.name}
                              </span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )
            )}
          </ul>
        ) : null}
      </li>
    ))} */}
            <li className="menu_item1">
              <a className="business_solutions_a" onClick={goHome}>
                <span
                  className="menu-title-text"
                  style={{
                    listStyle: "none outside none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  Personal
                </span>
              </a>
            </li>
            <li className="menu_item2">
              <a onClick={goSolution} className="business_solutions_a">
                <span className="menu-title-text">Business</span>
              </a>
              <ul className="sub_menu">
                <li id="menu-item-16863" className="business_left">
                  <a onClick={goSolution} className="business_solutions_a">
                    <div className="business_left_banner">
                      <div className="business_left_image_layer">
                        <div className="business_left_image_layer_loaded"></div>
                        <div className="business_left_color_overlay"></div>
                      </div>
                      <div className="business_left_inner_content">
                        <span className="title_business">
                          <span className="title_menu">
                            <FormattedMessage id="b2b" />
                          </span>
                        </span>
                        <span className="menu_item_desc">
                          <FormattedMessage id="Reduce Cost on Business Transfers" />
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li id="menu-item-16714" className="developers">
                  <a className="business_solutions_a" onClick={goSolution}>
                    <span className="menu-title-text">Solutions</span>
                  </a>
                  <ul className="sub-menu">
                    <li id="menu-item-16718" className="sub-menu-li">
                      <a
                        href="#!"
                        className="nectar-menu-item-with-icon2"
                        onClick={goSolution}
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/financial.png"
                          className="icon_image"
                          alt=""
                          width="128"
                          height="128"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">
                            Financial Services
                          </span>
                        </span>
                      </a>
                    </li>

                    <li id="menu-item-16728" className="sub-menu-li">
                      <a
                        className="nectar-menu-item-with-icon2"
                        onClick={goSolution}
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/payment.png"
                          className="icon_image"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">GME – SPS</span>
                        </span>
                      </a>
                    </li>

                    <li id="menu-item-16732" className="sub-menu-li">
                      <a
                        className="nectar-menu-item-with-icon2"
                        onClick={goSolution}
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/real-time-analysis.png"
                          className="icon_image"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">GME – VAS</span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-16738" className="sub-menu-li">
                      <a
                        className="nectar-menu-item-with-icon2"
                        onClick={goSolution}
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/service-provider.png"
                          className="icon_image"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">
                            Service Features
                          </span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-16739" className="sub-menu-li">
                      <a
                        className="nectar-menu-item-with-icon2"
                        onClick={goSolution}
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/partnership.png"
                          className="icon_image"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">Partners</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-16716" className="developers">
                  <a className="business_solutions_a" onClick={goDeveloper}>
                    <span className="menu-title-text">Developers</span>
                  </a>
                  <ul className="sub-menu">
                    <li id="menu-item-16778" className="sub-menu-li">
                      <a
                        className="nectar-menu-item-with-icon2"
                        onClick={goDeveloper}
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/api.png"
                          className="icon_image"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">API</span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-16780" className="sub-menu-li">
                      <a
                        className="nectar-menu-item-with-icon2"
                        href="/business/api-documentation"
                        target="_blank"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/view.png"
                          className="icon_image"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">
                            View Documentation
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-16717" className="developers">
                  <a className="business_solutions_a" onClick={goPlatform}>
                    <span className="menu-title-text">Platform</span>
                  </a>
                  <ul className="sub-menu">
                    <li id="menu-item-16782" className="sub-menu-li">
                      <a
                        className="nectar-menu-item-with-icon2"
                        onClick={goPlatform}
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/financial-institutions.png"
                          className="icon_image"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">GME-HoM</span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-16784" className="sub-menu-li">
                      <a
                        href="#collect"
                        className="nectar-menu-item-with-icon2"
                        onClick={goSolution}
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/data-collection.png"
                          className="icon_image"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">
                            Collect globally
                          </span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-16788" className="sub-menu-li">
                      <a
                        href="#make"
                        className="nectar-menu-item-with-icon2"
                        onClick={goSolution}
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/global-payments.png"
                          className="icon_image"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">
                            Make payments globally
                          </span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-16789" className="sub-menu-li">
                      <a
                        href="#multiple"
                        className="nectar-menu-item-with-icon2"
                        onClick={goSolution}
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/multiple-targets.png"
                          className="icon_image"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">
                            Multiple payment methods
                          </span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-16793" className="sub-menu-li">
                      <a
                        href="#collect"
                        className="nectar-menu-item-with-icon2"
                        onClick={goSolution}
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/china.png"
                          className="icon_image"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">
                            Collect&amp; Pay China
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu_item3">
              <a className="business_solutions_a" onClick={goAboutUs}>
                <span className="menu-title-text">Company</span>
              </a>
              <ul className="sub_menu2">
                <li id="menu-item-17554" className="business_left">
                  <a href="#" className="business_solutions_a">
                    <div className="business_left_banner">
                      <div className="business_left_image_layer">
                        <div className="business_left_image_layer_loaded2"></div>
                        <div className="business_left_color_overlay"></div>
                      </div>
                      <div className="business_left_inner_content">
                        <span className="title_business">
                          <span className="title_menu">GME</span>
                        </span>
                        <span className="menu_item_desc">
                          No.1 Money Transfer Company in South Korea
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li id="menu-item-17530" className="careers">
                  <a className="business_solutions_a" onClick={goAboutUs}>
                    <span className="menu-title-text">About Us</span>
                  </a>
                  <ul className="sub-menu">
                    <li id="menu-item-17532" className="sub-menu-li">
                      <a
                        onClick={goAboutUs}
                        className="nectar-menu-item-with-icon3"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/ceo.png"
                          className="icon_image2"
                          alt=""
                          width="48"
                          height="48"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">
                            CEO’s Message
                          </span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-17533" className="sub-menu-li">
                      <a
                        onClick={goAboutUs}
                        className="nectar-menu-item-with-icon3"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/micro-services.png"
                          className="icon_image2"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">Services</span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-17534" className="sub-menu-li">
                      <a
                        onClick={goAboutUs}
                        className="nectar-menu-item-with-icon3"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/history.png"
                          className="icon_image2"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">History</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-17744" className="careers">
                  <a className="business_solutions_a">
                    <span className="menu-title-text">Blog</span>
                  </a>
                  <ul className="sub-menu">
                    <li id="menu-item-17539" className="sub-menu-li">
                      <a
                        href="https://www.gmeremitblog.com/#all"
                        className="nectar-menu-item-with-icon3"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/blog.png"
                          className="icon_image2"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">All</span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-17540" className="sub-menu-li">
                      <a
                        href="https://www.gmeremitblog.com/#event"
                        className="nectar-menu-item-with-icon3"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/event.png"
                          className="icon_image2"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">Event</span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-17541" className="sub-menu-li">
                      <a
                        href="https://www.gmeremitblog.com/#businessnews"
                        className="nectar-menu-item-with-icon3"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/news.png"
                          className="icon_image2"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">News</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-39950" className="careers">
                  <a onClick={goCareers} className="business_solutions_a">
                    <span className="menu-title-text">Careers</span>
                  </a>
                  <ul className="sub-menu">
                    <li id="menu-item-17544" className="sub-menu-li">
                      <a
                        onClick={goCareers}
                        className="nectar-menu-item-with-icon3"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/financial-rewards.png"
                          className="icon_image2"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">
                            Perks &amp; Benefits
                          </span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-17545" className="sub-menu-li">
                      <a
                        onClick={goCareers}
                        className="nectar-menu-item-with-icon3"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/staff-training.png"
                          className="icon_image2"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">Our Staff</span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-17546" className="sub-menu-li">
                      <a
                        target="_blank"
                        href="/company/job-application/"
                        className="nectar-menu-item-with-icon3"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/add-user.png"
                          className="icon_image2"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">Join Us</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-17547" className="careers">
                  <a onClick={goContactUs} className="business_solutions_a">
                    <span className="menu-title-text">Contact Us</span>
                  </a>
                  <ul className="sub-menu">
                    <li id="menu-item-17550" className="sub-menu-li">
                      <a
                        onClick={goContactUs}
                        className="nectar-menu-item-with-icon3"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/customer-service.png"
                          className="icon_image2"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">
                            Customer Service
                          </span>
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-17552" className="sub-menu-li">
                      <a
                        onClick={goContactUs}
                        className="nectar-menu-item-with-icon3"
                      >
                        <img
                          src="https://www.gmeremit.com/wp-content/uploads/2023/01/banking-network.png"
                          className="icon_image2"
                          alt=""
                          width="96"
                          height="96"
                        />
                        <span className="nectar-menu-icon-text">
                          <span className="menu_title_text2">Branches</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="menu"
        style={{
          marginLeft: "auto",
          textAlign: "right",
          alignContent: "flex-end",
        }}
      >
        <nav className="menu_nav">
          <ul className="sf-menu">
            <li className="menu_item1">
              <a
                className="business_solutions_a"
                href="https://www.gmeremit.com/contact-us/#help"
                aria-current="page"
              >
                <span className="menu-title-text">
                  <FormattedMessage id="help" />
                </span>
              </a>
            </li>
            <li className="menu_item1">
              <a
                className="business_solutions_a"
                href="https://online.gmeremit.com/Login"
                aria-current="page"
              >
                <span className="menu-title-text">
                  <FormattedMessage id="login" />
                </span>
              </a>
            </li>
            {/* <li>
      <select
        id="locale"
        className="lang_menu"
        value={locale}
        onChange={(e) => chooseLan(e)}
      >
        <option value="ko" className="menu_item1">
          한국어(KOREAN)
        </option>
        <option value="eng">English</option>
        <option value="chi">Chinese</option>
      </select>
    </li> */}

            <li className="menu_item1">
              <a
                className="business_solutions_a"
                href="https://www.gmeremit.com/"
                rent="page"
              >
                <img
                  className="flag_image"
                  src="https://www.gmeremit.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                  alt=""
                  width="18"
                  height="12"
                />
                <span className="lang_name">English</span>
              </a>
              <ul className="lang_menu">
                <li id="menu-item-wpml-ls-5-ko" className="lang">
                  <a title="Korean" href="https://www.gmeremit.com/ko/">
                    <span className="menu-title-text">
                      <img
                        className="flag_image"
                        src="https://www.gmeremit.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/ko.png"
                        alt=""
                      />
                      <span className="lang_name" lang="ko">
                        한국어
                      </span>
                      <span className="wpml-ls-display">
                        <span className="wpml-ls-bracket"> (</span>Korean
                        <span className="wpml-ls-bracket">)</span>
                      </span>
                    </span>
                  </a>
                </li>
                <li id="menu-item-wpml-ls-5-zh-hans" className="lang">
                  <a
                    title="Chinese (Simplified)"
                    href="https://www.gmeremit.com/zh-hans/"
                  >
                    <span className="menu-title-text">
                      <img
                        className="flag_image"
                        src="https://www.gmeremit.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/zh.png"
                        alt=""
                      />
                      <span className="lang_name" lang="zh-hans">
                        简体中文
                      </span>
                      <span className="wpml-ls-display">
                        <span className="wpml-ls-bracket"> (</span>Chinese
                        <span className="wpml-ls-bracket">)</span>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navigation;
