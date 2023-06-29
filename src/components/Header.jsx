import { useEffect, useState } from "react";
import "../css/Header/Header.css";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";

import { CgMenu, CgClose } from "react-icons/cg";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [location, setLocation] = useState([]);
  const toggleHamburger = () => {
    console.log("햄버거 메뉴 클릭:", hamburgerOpen);
    setHamburgerOpen(!hamburgerOpen);
  };

  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    console.log(window.location.pathname);
    const arr = window.location.pathname.split("/");
    setLocation(arr);
  }, []);
  const arrMenu = [
    {
      id: 1,
      name: "Personal",
    },
    {
      id: 2,
      name: "Business",
      sub1_category: [
        {
          id: 1,
          name: "Solutions",
          sub2_category: [
            {
              id: 1,
              name: "Financial Services",
            },
            {
              id: 2,
              name: "GME - SPS",
            },
            {
              id: 3,
              name: "GME - VAS",
            },
            {
              id: 4,
              name: "Service Features",
            },
            {
              id: 5,
              name: "Partners",
            },
          ],
        },
        {
          id: 2,
          name: "Developers",
          sub2_category: [
            {
              id: 1,
              name: "API",
            },
            {
              id: 2,
              name: "View Documenatation",
            },
          ],
        },
        {
          id: 3,
          name: "Platform",
          sub2_category: [
            {
              id: 1,
              name: "GME-HoM",
            },
            {
              id: 2,
              name: "Collect Globally",
            },
            {
              id: 3,
              name: "Make Payments Globally",
            },
            {
              id: 4,
              name: "Multiple Payment methods",
            },
            {
              id: 5,
              name: "Collects & Pay China",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Company",
      sub1_category: [
        {
          id: 1,
          name: "About Us",
          sub2_category: [
            {
              id: 1,
              name: "CEO's Message",
            },
            {
              id: 2,
              name: "Services",
            },
            {
              id: 3,
              name: "History",
            },
          ],
        },
        {
          id: 2,
          name: "Blog",
          sub2_category: [
            {
              id: 1,
              name: "All",
            },
            {
              id: 2,
              name: "Event",
            },
            {
              id: 3,
              name: "News",
            },
          ],
        },
        {
          id: 3,
          name: "Careers",
          sub2_category: [
            {
              id: 1,
              name: "Perks & Benefits",
            },
            {
              id: 2,
              name: "Our Staff",
            },
            {
              id: 3,
              name: "Join Us",
            },
          ],
        },
        {
          id: 4,
          "Contact Us": [
            {
              id: 1,
              name: "Customer Service",
            },
            {
              id: 2,
              name: "Branches",
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    console.log("hamburgerOpen:", hamburgerOpen);
  }, [hamburgerOpen]);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const goHome = () => {
    console.log("홈으로 이동");
    navigate("/personal");
    window.location.reload();
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("오픈: ", open);
  });
  const hamburgerIcon = (
    <CgMenu className="hamburger" onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <CgClose
      className="hamburger"
      style={{ color: "white" }}
      onClick={() => setOpen(!open)}
    />
  );
  const handleSubNavOn = (name) => {
    setActiveTab(name);
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
            <Navigation
              list={arrMenu}
              arr={location}
              handleClick={handleSubNavOn}
            />

            {/* <div className="hamburger" onClick={toggleHamburger}>
              <Hamburger isOpen={hamburgerOpen} />
            </div> */}
            {open ? closeIcon : hamburgerIcon}
          </div>
        </div>
      </header>
      {open ? <MobileNavigation /> : null}
      <style jsx>
        {`
          .hamburger {
            display: none;
          }
          @media (max-width: 999px) {
            .hamburger {
              cursor: pointer;
              width: 2rem;
              height: 3rem;
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
            .menu ul {
              display: ${hamburgerOpen ? "flex" : "none"};
              flex-direction: column;
              position: fixed;
              width: 100%;
              height: 100%;
              right: auto;
              left: 0;
              z-index: 9997;
              background-color: transparent !important;
              text-align: center;
              overflow-y: scroll;
              overflow-x: hidden;
              padding-right: 20px;
              padding-top: 54px;
              margin-right: -20px;
            }
          }
        `}
      </style>
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
