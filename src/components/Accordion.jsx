import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import "../css/Accordion/Accordion.css";
import { useEffect, useState } from "react";
const Accordion = (props) => {
  const [open, setOpen] = useState(false);
  const toggleHandler = (e) => {
    setOpen(!open);
  };
  useEffect(() => {
    console.log("props:", props);
  }, []);
  return (
    <div className="accordion_item">
      <div
        className={open ? "open_accordion_header" : "accordion_header"}
        onClick={toggleHandler}
      >
        {open ? (
          <FaMinusCircle color="white" />
        ) : (
          <FaPlusCircle color="#000000a6" />
        )}
        <h4>{props.eng_title}</h4>
      </div>
      <div className={open ? "open_accordion_content" : "accordion_content"}>
        <div className="accordion_inner_wrap">
          <div className="accordion_text_content_element">
            <p className="accordion_kor_title">
              <strong>{props.kor_title}</strong>
            </p>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
