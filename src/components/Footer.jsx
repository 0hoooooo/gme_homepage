import { styled } from "styled-components";
import Footer1 from "./Footer/Footer1";
import Footer2 from "./Footer/Footer2";
import Footer3 from "./Footer/Footer3";

const Footer = () => {
  return (
    <FooterWrapper>
      <Footer1 />
      <Footer2 />
      <Footer3 />
    </FooterWrapper>
  );
};
export default Footer;
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
