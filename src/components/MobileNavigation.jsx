import { useEffect, useState } from "react";
import "../css/Header/Header.css";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("오픈2: ", open);
  });
  return (
    <>
      <div className="fullscreen_mobile">
        <div className="bg_inner_mobile"></div>
      </div>
      <div id="slide-out-widget-area" className="MobileHeader">
        <div className="inner_wrap_mobile">
          <div className="inner_mobile">
            <div className="container_mobile">
              <div className="menu_wrap_menuwrapper">
                <ul className="menuopen">
                  <li className="menu_item">
                    <a className="menu_page">Personal</a>
                  </li>
                  <li className="menu_item">
                    <button
                      className="menu_page"
                      onClick={() => setOpen(!open)}
                    >
                      Business
                    </button>
                    <ul
                      className={
                        open ? "sub_menu_mobile_open" : "sub_menu_mobile_close"
                      }
                    >
                      <li className="back">
                        <a href="#"> Back </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16863 nectar-extra-menu-item-spacing">
                        <a href="https://www.gmeremit.com/business/">
                          <div className="nectar-ext-menu-item style-default">
                            <div className="inner-content">
                              <span className="title">
                                <span className="menu-title-text">B2B</span>
                              </span>
                              <span className="item_desc">
                                Reduce Cost on Business Transfers
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16714">
                        <a href="https://www.gmeremit.com/business/#solutions">
                          Solutions
                        </a>
                        <ul className="sub-menu">
                          <li className="back">
                            <a href="#"> Back </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16718">
                            <a
                              href="https://www.gmeremit.com/business/#solutions"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="128"
                                height="128"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/financial.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                sizes="(max-width: 128px) 100vw, 128px"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  Financial Services
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16728">
                            <a
                              href="https://www.gmeremit.com/business/#sps"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/payment.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  GME – SPS
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16732">
                            <a
                              href="https://www.gmeremit.com/business/#vas"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/real-time-analysis.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  GME – VAS
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16738">
                            <a
                              href="https://www.gmeremit.com/business/#service"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/service-provider.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  Service Features
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16739">
                            <a
                              href="https://www.gmeremit.com/business/#partners"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/partnership.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
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
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16716">
                        <a href="https://www.gmeremit.com/developers/">
                          Developers
                        </a>
                        <ul className="sub-menu">
                          <li className="back">
                            <a href="#"> Back </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16778">
                            <a
                              href="https://www.gmeremit.com/api-documentation/"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/api.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">API</span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16780">
                            <a
                              href="https://www.gmeremit.com/api-documentation/"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/view.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
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
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16717">
                        <a href="https://www.gmeremit.com/developers/#platform">
                          Platform
                        </a>
                        <ul className="sub-menu">
                          <li className="back">
                            <a href="#"> Back </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16782">
                            <a
                              href="https://www.gmeremit.com/gme-hom/"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/financial-institutions.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">GME-HoM</span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16784">
                            <a
                              href="#collect"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/data-collection.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  Collect globally
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16788">
                            <a
                              href="#make"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/global-payments.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  Make payments globally
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16789">
                            <a
                              href="#multiple"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/multiple-targets.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  Multiple payment methods
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-16793">
                            <a
                              href="#collect"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/china.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
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
                  <li className="megamenu columns-5 menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-16712 nectar-extra-menu-item-spacing">
                    <a href="https://www.gmeremit.com/about-us/">Company</a>
                    <ul className="sub-menu">
                      <li className="back">
                        <a href="#"> Back </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17554 nectar-extra-menu-item-spacing">
                        <a href="#">
                          <div className="nectar-ext-menu-item style-default">
                            <div className="inner-content">
                              <span className="title">
                                <span className="menu-title-text">GME</span>
                              </span>
                              <span className="item_desc">
                                No.1 Money Transfer Company in South Korea
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-17530">
                        <a href="https://www.gmeremit.com/about-us/">
                          About Us
                        </a>
                        <ul className="sub-menu">
                          <li className="back">
                            <a href="#"> Back </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-17532">
                            <a
                              href="https://www.gmeremit.com/about-us/#ceo"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/ceo.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  CEO’s Message
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-17533">
                            <a
                              href="https://www.gmeremit.com/about-us/#services"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/micro-services.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  Services
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-17534">
                            <a
                              href="https://www.gmeremit.com/about-us/#history"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/history.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">History</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17744">
                        <a href="https://www.gmeremitblog.com/">Blog</a>
                        <ul className="sub-menu">
                          <li className="back">
                            <a href="#"> Back </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-17539">
                            <a
                              href="https://www.gmeremitblog.com/#all"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/blog.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">All</span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-17540">
                            <a
                              href="https://www.gmeremitblog.com/#event"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/event.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">Event</span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-17541">
                            <a
                              href="https://www.gmeremitblog.com/#businessnews"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/news.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">News</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-39950">
                        <a href="https://www.gmeremit.com/careers/">Careers</a>
                        <ul className="sub-menu">
                          <li className="back">
                            <a href="#"> Back </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-17544">
                            <a href="https://www.gmeremit.com/careers/#perks">
                              <div className="nectar-ext-menu-item style-img-above-text">
                                <div className="inner-content">
                                  <span className="title inherit-default">
                                    <img
                                      width="96"
                                      height="96"
                                      src="https://www.gmeremit.com/wp-content/uploads/2023/01/financial-rewards.png"
                                      className="nectar-menu-icon-img"
                                      alt=""
                                      decoding="async"
                                      loading="lazy"
                                    />
                                    <span className="menu-title-text">
                                      Perks &amp; Benefits
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-17545">
                            <a
                              href="https://www.gmeremit.com/careers/#staff"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/staff-training.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  Our Staff
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-17546">
                            <a
                              href="https://www.gmeremit.com/job-application/"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/add-user.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">Join Us</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-5432 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-17547">
                        <a
                          href="https://www.gmeremit.com/contact-us/"
                          aria-current="page"
                        >
                          Contact Us
                        </a>
                        <ul className="sub-menu">
                          <li className="back">
                            <a href="#"> Back </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-17550">
                            <a
                              href="#help"
                              aria-current="page"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/customer-service.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />
                              <span className="nectar-menu-icon-text">
                                <span className="menu-title-text">
                                  Customer Service
                                </span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-icon menu-item-17552">
                            <a
                              href="#branches"
                              aria-current="page"
                              className="nectar-menu-item-with-icon"
                            >
                              <img
                                width="96"
                                height="96"
                                src="https://www.gmeremit.com/wp-content/uploads/2023/01/banking-network.png"
                                className="nectar-menu-icon-img"
                                alt=""
                                decoding="async"
                                loading="lazy"
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
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5410">
                    <a href="#help" aria-current="page">
                      Help
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5411">
                    <a href="https://online.gmeremit.com/Login">Login</a>
                  </li>
                  <li className="menu-item wpml-ls-slot-5 wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-menu-item wpml-ls-first-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-has-children menu-item-wpml-ls-5-en">
                    <a
                      title="English"
                      href="https://www.gmeremit.com/contact-us/"
                    >
                      <img
                        className="wpml-ls-flag"
                        src="https://www.gmeremit.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                        alt=""
                      />
                      <span className="wpml-ls-native" lang="en">
                        English
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li className="back">
                        <a href="#"> Back </a>
                      </li>
                      <li className="menu-item wpml-ls-slot-5 wpml-ls-item wpml-ls-item-ko wpml-ls-menu-item wpml-ls-last-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-5-ko">
                        <a
                          title="Korean"
                          href="https://www.gmeremit.com/ko/%eb%ac%b8%ec%9d%98%ed%95%98%ea%b8%b0/"
                        >
                          <img
                            className="wpml-ls-flag"
                            src="https://www.gmeremit.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/ko.png"
                            alt=""
                          />
                          <span className="wpml-ls-native" lang="ko">
                            한국어
                          </span>
                          <span className="wpml-ls-display">
                            <span className="wpml-ls-bracket"> (</span>Korean
                            <span className="wpml-ls-bracket">)</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="menu-wrap menuwrapper">
              <ul className="menu secondary-header-items menuopen"></ul>
            </div>
          </div>
        </div>
        <div className="inner-wrap">
          <div className="bottom-meta-wrap"></div>
        </div>
      </div>
    </>
  );
};
export default MobileNavigation;
