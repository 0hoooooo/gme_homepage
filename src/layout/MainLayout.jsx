import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [loading, setLoading] = useState(false);
  const api = async () => {
    try {
      setLoading(true);
    } catch (e) {
      setLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      api();
    }, 1000);
  }, [loading]);

  return loading === false ? (
    <Loading />
  ) : (
    <MainWrapper>
      <Header />
      <MainBody>
        <MainContent>
          <MainContentRow>
            <Outlet />
          </MainContentRow>
        </MainContent>
      </MainBody>
      <Footer />
    </MainWrapper>
  );
};
export default MainLayout;
const MainWrapper = styled.div`
  min-width: 1300px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
`;
const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  padding-bottom: 0px;
  margin-top: 0 !important;
  padding-top: 0 !important;
  position: relative;
  z-index: 10;
  background: ${({ theme }) => theme.white};
`;
const MainContent = styled.div`
  margin: 0 auto;
  position: relative;
  @media screen and (min-width: 1300px) {
    max-width: 1100px;
  }
`;
const MainContentRow = styled.div`
  position: relative;
  margin-left: 0;
  margin-right: 0;
  padding-bottom: 0;
`;
const MainFooter = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
