import { useEffect } from "react";
import "../css/Hamburger/Hamburger.css";
const Hamburger = ({ isOpen }) => {
  useEffect(() => {
    console.log("isOpen:", isOpen);
  }, [isOpen]);
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>
      <style jsx>
        {`
          .hamburger {
            cursor: pointer;
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            float: left;
            z-index: 10;
            position: absolute !important;
            right: 0;
            top: 0;
            z-index: 200;
          }
          .burger {
            cursor: pointer;
            width: 2rem;
            height: 0.25rem;
            border-radius: 10px;
            background-color: black;
            transform-origin: 1px;
            transition: all 0.3s linear;
          }
          .burger1 {
            cursor: pointer;
            transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
          }
          .burger2 {
            cursor: pointer;
            transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
            opacity: ${isOpen ? 0 : 1};
          }
          .burger3 {
            cursor: pointer;
            transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
          }
        `}
      </style>
    </>
  );
};
export default Hamburger;
