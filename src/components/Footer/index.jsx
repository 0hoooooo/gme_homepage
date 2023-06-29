import { styled } from "styled-components";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";

const Footer = () => {
  return (
    <FooterWrapper>
      <Footer1 />
      <Footer2 />
    </FooterWrapper>
  );
};
export default Footer;
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
