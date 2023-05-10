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
    console.log(loading);
  }, [loading]);

  return loading === false ? (
    <Loading />
  ) : (
    <MainWrapper>
      <Header />
      <AjaxContentWrapper>
        <ContainerWrapper>
          <MainContent>
            <MainContentRow>
              <Outlet />
            </MainContentRow>
          </MainContent>
          <Footer />
        </ContainerWrapper>
      </AjaxContentWrapper>
    </MainWrapper>
  );
};
export default MainLayout;
const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
`;
const AjaxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ContainerWrapper = styled.div`
  padding-bottom: 0px;
  margin-top: 0 !important;
  padding-top: 0 !important;
  flex-grow: 1;
  background-color: #fafbfc;
  position: relative;
  z-index: 10;
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
