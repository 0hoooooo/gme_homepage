import { useEffect, useState } from "react";
import "../css/Header/Header.css";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  useEffect(() => {
    console.log(scrollPosition);
  });
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
  const goHome = () => {
    console.log("홈으로 이동");
    navigate("/main/home");
    window.location.reload();
  };
  const goAboutUs = () => {
    console.log("이동");
    navigate("/company/aboutUs");
    window.location.reload();
  };
  return (
    <div id={scrollPosition < 100 ? "header_outer" : "header_outer_scrolled"}>
      <header id="top">
        <div className="container">
          <div className="row">
            <div className="logo" onClick={goHome}>
              <a id="logo">
                <img
                  className="logo"
                  width={180}
                  height={50}
                  src="https://www.gmeremit.com/wp-content/uploads/2021/07/GME-LOGO-HD.png"
                />
              </a>
            </div>
            <div className="menu">
              <div className="widget-area">
                <div></div>
              </div>
              <nav className="menu_nav">
                <ul className="sf-menu">
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
                    <a href="https://www.gmeremit.com/business/">
                      <span className="menu-title-text">Business</span>
                    </a>
                    <ul className="sub_menu">
                      <li id="menu-item-16863" className="business_left">
                        <a
                          onClick={goSolution}
                          className="business_solutions_a"
                        >
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
                      <li id="menu-item-16714" className="developers">
                        <a
                          className="business_solutions_a"
                          onClick={goSolution}
                        >
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
                                <span className="menu_title_text">
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
                                <span className="menu_title_text">
                                  GME – SPS
                                </span>
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
                                <span className="menu-title-text">
                                  GME – VAS
                                </span>
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
                                <span className="menu-title-text">
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
                                <span className="menu-title-text">
                                  Partners
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-16716" className="developers">
                        <a
                          className="business_solutions_a"
                          onClick={goDeveloper}
                        >
                          <span className="menu-title-text">Developers</span>
                        </a>
                        <ul className="sub-menu">
                          <li id="menu-item-16778" className="sub-menu-li">
                            <a
                              href="https://www.gmeremit.com/api-documentation/"
                              className="nectar-menu-item-with-icon2"
                            >
                              <img
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/api.png"
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">API</span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-16780" className="sub-menu-li">
                            <a
                              href="https://www.gmeremit.com/api-documentation/"
                              className="nectar-menu-item-with-icon2"
                              onClick={goSolution}
                            >
                              <img
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/view.png"
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  View Documentation
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-16717" className="developers">
                        <a
                          className="business_solutions_a"
                          onClick={goPlatform}
                        >
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
                                <span className="menu-title-text">GME-HoM</span>
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
                                <span className="menu-title-text">
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
                                <span className="menu-title-text">
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
                                <span className="menu-title-text">
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
                                <span className="menu-title-text">
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
                    <a href="https://www.gmeremit.com/about-us/">
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
                              href="https://www.gmeremit.com/about-us/#ceo"
                              className="nectar-menu-item-with-icon3"
                            >
                              <img
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/ceo.png"
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu_title_text">
                                  CEO’s Message
                                </span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-17533" className="sub-menu-li">
                            <a
                              href="https://www.gmeremit.com/about-us/#services"
                              className="nectar-menu-item-with-icon3"
                            >
                              <img
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/micro-services.png"
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu_title_text">
                                  Services
                                </span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-17534" className="sub-menu-li">
                            <a
                              href="https://www.gmeremit.com/about-us/#history"
                              className="nectar-menu-item-with-icon3"
                            >
                              <img
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/history.png"
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">History</span>
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
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">All</span>
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
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">Event</span>
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
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">News</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-39950" className="careers">
                        <a
                          href="https://www.gmeremit.com/careers/"
                          className="business_solutions_a"
                        >
                          <span className="menu-title-text">Careers</span>
                        </a>
                        <ul className="sub-menu">
                          <li id="menu-item-17544" className="sub-menu-li">
                            <a
                              href="https://www.gmeremit.com/careers/#perks"
                              className="nectar-menu-item-with-icon3"
                            >
                              <img
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/financial-rewards.png"
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu_title_text">
                                  Perks &amp; Benefits
                                </span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-17545" className="sub-menu-li">
                            <a
                              href="https://www.gmeremit.com/careers/#staff"
                              className="nectar-menu-item-with-icon3"
                            >
                              <img
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/staff-training.png"
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu_title_text">
                                  Our Staff
                                </span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-17546" className="sub-menu-li">
                            <a
                              href="https://www.gmeremit.com/job-application/"
                              className="nectar-menu-item-with-icon3"
                            >
                              <img
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/add-user.png"
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">Join Us</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-17547" className="careers">
                        <a
                          href="https://www.gmeremit.com/contact-us/"
                          className="business_solutions_a"
                        >
                          <span className="menu-title-text">Contact Us</span>
                        </a>
                        <ul className="sub-menu">
                          <li id="menu-item-17550" className="sub-menu-li">
                            <a
                              href="https://www.gmeremit.com/contact-us/#help"
                              className="nectar-menu-item-with-icon3"
                            >
                              <img
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/customer-service.png"
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  Customer Service
                                </span>
                              </span>
                            </a>
                          </li>
                          <li id="menu-item-17552" className="sub-menu-li">
                            <a
                              href="https://www.gmeremit.com/contact-us/#branches"
                              className="nectar-menu-item-with-icon3"
                            >
                              <img
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/banking-network.png"
                                className="icon_image"
                                alt=""
                                width="96"
                                height="96"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  Branches
                                </span>
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
            <RightContents>
              <MenuNav>
                <MenuUl>
                  <MenuLi>
                    <MenuA
                      href="https://www.gmeremit.com/contact-us/#help"
                      aria-current="page"
                    >
                      <span className="menu-title-text">Help</span>
                    </MenuA>
                  </MenuLi>
                  <MenuLi>
                    <MenuA
                      href="https://online.gmeremit.com/Login"
                      aria-current="page"
                    >
                      <span className="menu-title-text">Login</span>
                    </MenuA>
                  </MenuLi>
                  <MenuLi>
                    <MenuA href="https://www.gmeremit.com/" aria-current="page">
                      <span className="menu-title-text">English</span>
                    </MenuA>
                  </MenuLi>
                </MenuUl>
              </MenuNav>
            </RightContents>
          </div>
        </div>
      </header>
    </div>
  );
};
const HeaderOuter = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  padding: 30px 0 0 0;
  background-color: #fff;
  z-index: 9999;
  overflow: visible;
`;
const Top = styled.header`
  display: block;
  position: relative;
  z-index: 9998;
  width: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  @media only screen and (min-width: 1300px) {
    max-width: 1100px;
  }
`;

const Row = styled.div`
  display: flex;
  padding-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  @media only screen and (min-width: 1000px) {
    float: none;
    width: auto;
  }
`;

const Logo = styled.div`
  @media only screen and (min-width: 1000px) {
    display: flex;
    float: none;
    width: auto;
  }
  margin-right: 25px;
`;
const LogoA = styled.a`
  width: auto;
  max-width: none;
  line-height: 22px;
  font-size: 22px;
  letter-spacing: -1px;
  color: #444;
  font-family: "Open Sans";
  font-weight: 600;
  align-self: center;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  float: none;
  width: auto;
  vertical-align: baseline;
`;
const WidgetArea = styled.div`
  display: none;
  z-index: 10000;
`;
const MenuNav = styled.nav`
  display: flex;
  margin: 0px;
  padding: 10px;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;
const MenuUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none outside none;
  vertical-align: middle;
  padding: 0;
  z-index: 10;
  overflow: visible;
  transition: padding 0.8s ease, margin 0.25s ease;
  min-height: 1px;
  line-height: 1px;
c
`;

const MenuLi = styled.li`
  outline: 0 none;
  line-height: 0;
  font-size: 20px;
  align-items: center;
  display: flex;
  float: left;
  list-style: none;
`;

const DetailMenuUl = styled.ul`
  border-radius: 20px;
  list-style: none outside none;
  display: none;
`;
const MenuA = styled.a`
  position: relative;
  text-decoration: none;
  outline: 0 none;
  font-family: "Poppins";
  font-size: 15px;
  line-height: 28px;
  font-weight: 400;
  padding-left: 10px;
  padding-right: 10px;
  color: #191c1f;
  &:hover:after + ${DetailMenuUl} {
    display: block;
    color: red;
    border-bottom: solid 3px #ea2129;
  }
  &:hover {
    color: red;
    border-bottom: solid 3px #ea2129;
  }
  &:hover:after {
    border-bottom: solid 3px #ea2129;
  }
  &:hover + ${DetailMenuUl} {
    display: block;
  }
`;

const DetailMenuLi = styled.li`
  width: 25%;
  flex: none;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
`;
const DetailMenuA = styled.a`
  padding: 35px !important;
`;

const ItemStyleDefault = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 300px;
  display: flex;
  text-align: left;
`;
const ImageLayerOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: left;
`;
const ImageLayerLoaded = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("https://www.gmeremit.com/wp-content/uploads/2021/08/digital-design-businessman-trading-online-stock-market-teblet-screen.jpg");
  opacity: 1;
  transition: opacity 0.25s ease 0.1s;
`;
const ColorOverlay = styled.div`
  background: linear-gradient(360deg, transparent, #f6653c);
  opacity: 1;
`;

const InnerContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
`;
const InnerSpan = styled.span`
  font-family: Poppins;
  font-size: 30px;
  line-height: 30px;
  font-weight: 600;
`;
const RightContents = styled.div`
  margin-left: auto;
  @media only screen and (min-width: 1000px) {
    display: flex;
    float: none;

    width: auto;
  }
`;
export default Header;
