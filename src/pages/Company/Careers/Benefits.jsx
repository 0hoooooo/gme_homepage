import "../../../css/Company/Careers/Benefits.css";
const Benefits = () => {
  const perks = [
    {
      id: 1,
      content: "Education and Training",
      src: "https://www.gmeremit.com/wp-content/uploads/2022/04/Education-training.png",
    },
    {
      id: 2,
      content: "Incentive and Rewards",
      src: "https://www.gmeremit.com/wp-content/uploads/2022/04/Incentives.png",
    },
    {
      id: 3,
      content: "Sports Activity",
      src: "https://www.gmeremit.com/wp-content/uploads/2022/04/social-sports.png",
    },
    {
      id: 4,
      content: "Team Building Korea Tour",
      src: "https://www.gmeremit.com/wp-content/uploads/2022/04/tour-korea.png",
    },
    {
      id: 5,
      content: "Team Building World Tour",
      src: "https://www.gmeremit.com/wp-content/uploads/2022/04/World-tour.png",
    },
    {
      id: 6,
      content: "National Health Insurance",
      src: "https://www.gmeremit.com/wp-content/uploads/2022/04/National-health-insurance.png",
    },
  ];
  return (
    <div id="benefits" className="benefits">
      <div className="row_bg_wrap_benefits">
        <div className="inner_wrap_benefits">
          <div className="row_bg_benefits"></div>
        </div>
      </div>
      <div className="dark_left_benefits">
        <div className="padding_left_benefits">
          <div className="vc_column_inner_benefits">
            <div className="wpb_wrapper_benefits">
              <div className="divider_wrap_benefits">
                <div className="divider" style={{ height: 24 }}></div>
              </div>

              <div className="inner_row_benefits">
                <div className="row_bg_wrap_benefits">
                  <div className="row_bg_benefits"></div>
                </div>
                <div className="row_left_benefits">
                  {perks.map((item, index) => {
                    return (
                      <div className="padding_phone_benefits" key={index}>
                        <div className="padding_inner_benefits">
                          <a className="column_link_benefits"></a>
                          <div className="column_overlay_wrap_benefits">
                            <div className="column_overlay_benefits"></div>
                          </div>
                          <div className="wpb_wrapper_benefits">
                            <div className="imgae_animation_benefits">
                              <div className="inner_benefits">
                                <div className="hover_wrap_benefits">
                                  <div className="hover_wrap_inner_benefits">
                                    <img
                                      className="img_benefits"
                                      src={item.src}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <h3 className="vc_custom_heading_benefits">
                              <a href="" target="_blank">
                                {item.content}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
