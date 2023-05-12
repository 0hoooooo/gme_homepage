import { useLayoutEffect, useRef, useState } from "react";
import "../../../css/Solutions/Service.css";

import Carousel from "react-elastic-carousel";

const Service = () => {
  // const listRef = useRef();
  // const btnRef = useRef();
  // const [startX, setstartX] = useState(0);

  // useLayoutEffect(() => {
  //   const getCoordinate = () => {
  //     const listLeft = listRef.current.getBoundingClientRect().left;

  //     setstartX(listLeft);
  //   };
  //   getCoordinate();
  // }, []);

  const product = [
    {
      id: 1,
      title: "Flexibility",
      content1: "Exchange Fund &amp; Pay",
      content2: "Pay as you Exchange",
      content3: "Self-managed FX",
      src: "https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility.png",
    },
    {
      id: 2,
      title: "Dynamic",
      content1: "Choose one of the methods",
      content2: "Track your transaction in real-time",
      content3: "Instant Payment&nbsp;Receipts",
      src: "https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic.png",
    },
    {
      id: 3,
      title: "Netout",
      content1: "Lower your cost",
      content2: "Leverage in your funding",
      content3: "No hidden commissions",
      src: "https://www.gmeremit.com/wp-content/uploads/2022/02/Netout.png",
    },
    {
      id: 4,
      title: "Technology",
      content1: "Micro Service Architecture",
      content2: "Embedded AML &amp; Verification",
      src: "https://www.gmeremit.com/wp-content/uploads/2022/02/Technology.png",
    },
  ];
  // const handleClick = (direction) => {
  //   let currenX = listRef.current.getBoundingClientRect().x;
  //   let btnLeft = btnRef.current.getBoundingClientRect().left;
  //   let listWidth = listRef.current.getBoundingClientRect().width;
  //   let listRef_NodeWidth =
  //     product.length > 0
  //       ? listRef.current.childNodes[0].getBoundingClientRect().width
  //       : 0;
  //   const slideDistance = listRef_NodeWidth * 3;

  //   let calculate_distance = 0;
  //   if (direction === "left") {
  //     calculate_distance = currenX + slideDistance;
  //     if (startX < calculate_distance) {
  //       calculate_distance = 0;
  //     }
  //   } else if (direction === "right") {
  //     calculate_distance = currenX - slideDistance;
  //     if (btnLeft - startX - listWidth > calculate_distance) {
  //       calculate_distance = btnLeft - startX - listWidth;
  //     }
  //   }
  //   listRef.current.style.transform = `translateX(${calculate_distance}px)`;
  // };
  return (
    <div id="service">
      <div className="row_bg_wrap_service">
        <div className="inner_wrap_using_image_service">
          <div className="image_load_service"></div>
        </div>
      </div>

      <div className="dark_center_service">
        <div className="padding_phone_service">
          <div className="carousel_main">
            <div className="carousel_container">
              {/* <div
                className="movie-row__button movie-row__button--left"
                onClick={() => handleClick("left")}
              >
                <button
                  className="flickity-button flickity-prev-next-button previous"
                  type="button"
                  aria-label="Previous"
                >
                  <svg className="flickity-button-icon" viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                      className="arrow"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="movie-row__button movie-row__button--right"
                onClick={() => handleClick("right")}
                ref={btnRef}
              >
                <button
                  className="flickity-button flickity-prev-next-button next"
                  type="button"
                  aria-label="Next"
                >
                  <svg className="flickity-button-icon" viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                      className="arrow"
                      transform="translate(100, 100) rotate(180) "
                    ></path>
                  </svg>
                </button>
              </div> */}
              <Carousel
                enableAutoPlay={true}
                itemsToShow={3}
                itemPadding={[15]}
                style={{ innerWidth: 400 }}
              >
                {product.length > 0 &&
                  product.map((item, index) => (
                    <div className="card_wrapper" key={index}>
                      <div className="card_image">
                        <img src={item.src} />
                      </div>
                      <div className="card_detail">
                        <div className="card_title">
                          <h6 className="item_title">{item.title}</h6>
                        </div>
                        <div className="card_content">
                          <ul>
                            <li>{item.content1}</li>
                            <li>{item.content2}</li>
                            <li>{item.content3}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div id="fws_645d7d8c03918" className="wpb_row_service">
        <div className="row-bg-wrap_service">
          {" "}
          <div className="row-bg"></div>{" "}
        </div>
        <div className="dark_left_service">
          <div className="padding_phone_service">
            <div className="vc_column_inner_service">
              <div className="wpb_wrapper">
                <div className="divider-wrap" data-alignment="default">
                  <div className="divider" style={{ height: 24 }}></div>
                </div>
                <h1
                  className="vc_custom_heading_service"
                  style={{ fontSize: 45, color: "#ffffff" }}
                >
                  ULTIMATE SOLUTIONS
                </h1>
                <h1
                  className="vc_custom_heading_service"
                  style={{ fontSize: 30, color: "#ffffff" }}
                >
                  GET THE REAL DEAL, NO COMMISSION IN TRANSITION
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="flickity-slider"
        style="left: 0px; transform: translateX(-0.45%);"
      >
        <div
          className="cell"
          aria-selected="false"
          style="position: absolute; left: 0%; height: 383.55px;"
        >
          <div className="inner-wrap-outer">
            <div className="inner-wrap" style=" background-color: #ffffff;">
              <div
                className="img-with-aniamtion-wrap center custom-width-60pct"
                data-max-width="custom"
                data-max-width-mobile="default"
                data-shadow="none"
                data-animation="fade-in"
              >
                <div className="inner">
                  <div className="hover-wrap" style="opacity: 1;">
                    <div className="hover-wrap-inner img-loaded">
                      <img
                        className="img-with-animation skip-lazy nectar-lazy loaded animated-in"
                        data-delay="0"
                        height="2480"
                        width="2480"
                        data-animation="fade-in"
                        src="https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility.png"
                        alt=""
                        sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                        srcset="https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility.png 2480w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-300x300.png 300w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-1024x1024.png 1024w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-150x150.png 150w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-768x768.png 768w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-1536x1536.png 1536w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-2048x2048.png 2048w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-100x100.png 100w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-140x140.png 140w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-500x500.png 500w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-350x350.png 350w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-1000x1000.png 1000w, https://www.gmeremit.com/wp-content/uploads/2022/02/Flexibility-800x800.png 800w"
                        style=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h6 style="text-align: center" className="vc_custom_heading">
                Flexibility
              </h6>
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                  <ul>
                    <li style="text-align: left;">Exchange Fund &amp; Pay</li>
                    <li style="text-align: left;">Pay as you Exchange</li>
                    <li style="text-align: left;">Self-managed FX</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cell is-selected"
          aria-selected="true"
          style="position: absolute; left: 33.64%; height: 383.55px;"
        >
          <div className="inner-wrap-outer">
            <div className="inner-wrap" style=" background-color: #ffffff;">
              <div
                className="img-with-aniamtion-wrap center custom-width-60pct"
                data-max-width="custom"
                data-max-width-mobile="default"
                data-shadow="none"
                data-animation="fade-in"
              >
                <div className="inner">
                  <div className="hover-wrap" style="opacity: 1;">
                    <div className="hover-wrap-inner img-loaded">
                      <img
                        className="img-with-animation skip-lazy nectar-lazy loaded animated-in"
                        data-delay="0"
                        height="2480"
                        width="2480"
                        data-animation="fade-in"
                        src="https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic.png"
                        alt=""
                        sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                        srcset="https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic.png 2480w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-300x300.png 300w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-1024x1024.png 1024w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-150x150.png 150w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-768x768.png 768w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-1536x1536.png 1536w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-2048x2048.png 2048w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-100x100.png 100w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-140x140.png 140w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-500x500.png 500w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-350x350.png 350w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-1000x1000.png 1000w, https://www.gmeremit.com/wp-content/uploads/2022/02/Dynamic-800x800.png 800w"
                        style=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h6 style="text-align: center" className="vc_custom_heading">
                Dynamic
              </h6>
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                  <ul>
                    <li style="text-align: left;">Choose one of the methods</li>
                    <li style="text-align: left;">
                      Track your transaction in real-time
                    </li>
                    <li style="text-align: left;">
                      Instant Payment&nbsp;Receipts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cell"
          aria-selected="false"
          style="position: absolute; left: 67.27%; height: 383.55px;"
        >
          <div className="inner-wrap-outer">
            <div className="inner-wrap" style=" background-color: #ffffff;">
              <div
                className="img-with-aniamtion-wrap center custom-width-60pct"
                data-max-width="custom"
                data-max-width-mobile="default"
                data-shadow="none"
                data-animation="fade-in"
              >
                <div className="inner">
                  <div className="hover-wrap" style="opacity: 1;">
                    <div className="hover-wrap-inner img-loaded">
                      <img
                        className="img-with-animation skip-lazy nectar-lazy loaded animated-in"
                        data-delay="0"
                        height="2480"
                        width="2480"
                        data-animation="fade-in"
                        src="https://www.gmeremit.com/wp-content/uploads/2022/02/Netout.png"
                        alt=""
                        sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                        srcset="https://www.gmeremit.com/wp-content/uploads/2022/02/Netout.png 2480w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-300x300.png 300w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-1024x1024.png 1024w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-150x150.png 150w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-768x768.png 768w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-1536x1536.png 1536w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-2048x2048.png 2048w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-100x100.png 100w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-140x140.png 140w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-500x500.png 500w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-350x350.png 350w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-1000x1000.png 1000w, https://www.gmeremit.com/wp-content/uploads/2022/02/Netout-800x800.png 800w"
                        style=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h6 style="text-align: center" className="vc_custom_heading">
                Netout
              </h6>
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                  <ul>
                    <li style="text-align: left;">Lower your cost</li>
                    <li style="text-align: left;">Leverage in your funding</li>
                    <li style="text-align: left;">No hidden commissions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cell"
          aria-selected="false"
          style="position: absolute; left: 100.91%; height: 383.55px;"
        >
          <div className="inner-wrap-outer">
            <div className="inner-wrap" style=" background-color: #ffffff;">
              <div
                className="img-with-aniamtion-wrap center custom-width-60pct"
                data-max-width="custom"
                data-max-width-mobile="default"
                data-shadow="none"
                data-animation="fade-in"
              >
                <div className="inner">
                  <div className="hover-wrap" style="opacity: 1;">
                    <div className="hover-wrap-inner img-loaded">
                      <img
                        className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                        data-delay="0"
                        height="2480"
                        width="2480"
                        data-animation="fade-in"
                        src="https://www.gmeremit.com/wp-content/uploads/2022/02/Technology.png"
                        alt=""
                        sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                        style=""
                        srcset="https://www.gmeremit.com/wp-content/uploads/2022/02/Technology.png 2480w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-300x300.png 300w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-1024x1024.png 1024w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-150x150.png 150w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-768x768.png 768w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-1536x1536.png 1536w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-2048x2048.png 2048w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-100x100.png 100w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-140x140.png 140w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-500x500.png 500w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-350x350.png 350w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-1000x1000.png 1000w, https://www.gmeremit.com/wp-content/uploads/2022/02/Technology-800x800.png 800w"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h6 style="text-align: center" className="vc_custom_heading">
                Technology
              </h6>
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                  <ul>
                    <li style="text-align: left;">
                      Micro Service Architecture
                    </li>
                    <li style="text-align: left;">
                      Embedded AML &amp; Verification
                    </li>
                  </ul>
                </div>
              </div>

              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cell"
          aria-selected="false"
          style="position: absolute; left: 134.54%; height: 383.55px;"
        >
          <div className="inner-wrap-outer">
            <div className="inner-wrap" style=" background-color: #ffffff;">
              <div
                className="img-with-aniamtion-wrap center custom-width-60pct"
                data-max-width="custom"
                data-max-width-mobile="default"
                data-shadow="none"
                data-animation="fade-in"
              >
                <div className="inner">
                  <div className="hover-wrap" style="opacity: 1;">
                    <div className="hover-wrap-inner img-loaded">
                      <img
                        className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                        data-delay="0"
                        height="2480"
                        width="2480"
                        data-animation="fade-in"
                        src="https://www.gmeremit.com/wp-content/uploads/2022/02/Account.png"
                        alt=""
                        sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                        style=""
                        srcset="https://www.gmeremit.com/wp-content/uploads/2022/02/Account.png 2480w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-300x300.png 300w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-1024x1024.png 1024w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-150x150.png 150w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-768x768.png 768w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-1536x1536.png 1536w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-2048x2048.png 2048w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-100x100.png 100w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-140x140.png 140w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-500x500.png 500w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-350x350.png 350w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-1000x1000.png 1000w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-800x800.png 800w"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h6 style="text-align: center" className="vc_custom_heading">
                Accounting
              </h6>
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                  <ul>
                    <li style="text-align: left;">Easy Reconciliation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cell"
          aria-selected="false"
          style="position: absolute; left: 168.18%; height: 383.55px;"
        >
          <div className="inner-wrap-outer">
            <div className="inner-wrap" style=" background-color: #ffffff;">
              <div
                className="img-with-aniamtion-wrap center custom-width-60pct"
                data-max-width="custom"
                data-max-width-mobile="default"
                data-shadow="none"
                data-animation="fade-in"
              >
                <div className="inner">
                  <div className="hover-wrap" style="opacity: 1;">
                    <div className="hover-wrap-inner img-loaded">
                      <img
                        className="img-with-animation skip-lazy nectar-lazy loaded animated-in"
                        data-delay="0"
                        height="2480"
                        width="2480"
                        data-animation="fade-in"
                        src="https://www.gmeremit.com/wp-content/uploads/2022/02/Account.png"
                        alt=""
                        sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                        srcset="https://www.gmeremit.com/wp-content/uploads/2022/02/Account.png 2480w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-300x300.png 300w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-1024x1024.png 1024w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-150x150.png 150w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-768x768.png 768w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-1536x1536.png 1536w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-2048x2048.png 2048w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-100x100.png 100w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-140x140.png 140w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-500x500.png 500w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-350x350.png 350w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-1000x1000.png 1000w, https://www.gmeremit.com/wp-content/uploads/2022/02/Account-800x800.png 800w"
                        style=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h6 style="text-align: center" className="vc_custom_heading">
                Payment on Behalf of
                <br />
                (POBO)
              </h6>
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                  <ul>
                    <li style="text-align: left;">
                      High Level of Transparency &amp;
                    </li>
                    <li style="text-align: left;">Maximum Efficiency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Service;
