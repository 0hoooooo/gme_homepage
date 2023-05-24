import "../../../css/Careers/Staff.css";
const Staff = () => {
  const members = [
    {
      id: 1,
      name: "Jason Kim",
      position: "Compliance Team Leader",
      content: `“Unlike ordinary Korean Companies, GME is very
      flexible and fast in terms of decision making. That
      drive GME staffs to think more creative, energetic
      and enthusiastic in their tasks. Probably that is
      the main fuel of GME’s great success in South Korean
      Remittance Market. Now, to step-up as a global
      company, we will follow the next 3 laws. 1) Equal
      Opportunity 2) Fair Process 3) Righteous Result.”`,
      src: "https://www.gmeremit.com/wp-content/uploads/2023/02/jason-gme.jpg",
      direction: "right",
    },
    {
      id: 2,
      name: "Yukiko Ramadhanti Hadi",
      position: "Marketing Officer of Indonesia",
      content: `“Global Money Express has an environment that
      employees can access equal rewards, treatment, and
      opportunities to speak out opinions regardless of
      gender. 70% of women have leadership roles,
      especially in the marketing department. GME
      implements a transparent performance measurement
      that reflected on the results of the monthly and
      annual targets.”`,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Yukiko.png",
      direction: "left",
    },
    {
      id: 3,
      name: "Sundariya Munkhbileg",
      position: "Marketing Officer of Mongolia",
      content: ` “Balancing career with motherhood is not very easy
        in Korea. However, if you find the right employer
        who gets it, it should not be very difficult. I am
        very happy to be part of GME. Its friendly coworkers
        and employers offering flexible working schedule
        made it possible for me to grow not only as a career
        woman, but as a mother too.”`,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Sundarya.png",
      direction: "right",
    },
    {
      id: 4,
      name: "Suhito Domingo",
      position: "Graphic Artist",
      content: ` "In this pandemic, much has changed, it has been a
        huge struggle for workers like me to go to the
        office. GME made the impossible possible to have my
        presence in the office. Even I'm in my bedroom. I
        want to thank GME for their support and for
        providing me high-end computers and fast connections
        to make my environment a better place to work."`,
      src: "https://www.gmeremit.com/wp-content/uploads/2021/08/Screen-Shot-2021-08-05-at-3.20.20-AM.png",
      direction: "left",
    },
  ];
  return (
    <>
      {members.map((item, index) => {
        return (
          <div id="fws_646d5d8e320ec" className="wbp_row_staff" key={index}>
            <div className="row_bg_wrap_staff">
              <div className="inner_wrap_staff">
                <div className="row_bg_staff"></div>
              </div>
            </div>
            <div className="dark_left_staff">
              <div className="padding_phone_staff">
                <div className="vc_column_inner_staff">
                  <div className="wpb_wrapper_staff">
                    <div id="fws_646d5d8e32969" className="inner_row_staff">
                      <div className="row_bg_wrap_staff">
                        <div className="row_bg_staff"></div>
                      </div>
                      <div className="dark_left_staff">
                        {item.direction === "right" ? (
                          <>
                            <div className="padding_left_staff">
                              <div className="vc_column_inner_left_staff">
                                <div className="wpb_wrapper_staff">
                                  <p className="vc_custom_content_staff">
                                    {item.content}
                                  </p>
                                  <h3 className="vc_custom_name_staff">
                                    {item.name}
                                  </h3>
                                  <h3 className="vc_custom_position_staff">
                                    {item.position}
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div className="padding_right_staff">
                              <div className="vc_column_inner_right_staff">
                                <div className="wpb_wrapper_staff">
                                  <div className="img_wrap_staff">
                                    <div className="inner_staff">
                                      <div className="hover_wrap_staff">
                                        <div className="hover_wrap_img_loaded_staff">
                                          <img
                                            className="img_staff"
                                            data-delay="0"
                                            height="2024"
                                            width="1811"
                                            data-animation="fade-in"
                                            src={item.src}
                                            alt=""
                                            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="padding_right_staff">
                              <div className="vc_column_inner_right_staff">
                                <div className="wpb_wrapper_staff">
                                  <div className="img_wrap_staff">
                                    <div className="inner_staff">
                                      <div className="hover_wrap_staff">
                                        <div className="hover_wrap_img_loaded_staff">
                                          <img
                                            className="img_staff"
                                            data-delay="0"
                                            height="2024"
                                            width="1811"
                                            data-animation="fade-in"
                                            src={item.src}
                                            alt=""
                                            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="padding_left_staff">
                              <div className="vc_column_inner_left_staff">
                                <div className="wpb_wrapper_staff">
                                  <p className="vc_custom_content_staff">
                                    {item.content}
                                  </p>
                                  <h3 className="vc_custom_name_staff">
                                    {item.name}
                                  </h3>
                                  <h3 className="vc_custom_position_staff">
                                    {item.position}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Staff;
