import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../../theme";
import { debounce } from "lodash";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import axios from "axios";
const ratio = 0.85;
const GlobalStyle = createGlobalStyle`	
    @font-face {
        font-family: "NanumSquareExtraBold";
        font-display: fallback;
        src: url("./asset/fonts/NanumSquareExtraBold.woff") format("woff");
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: "NanumSquareRegular";
        font-display: fallback;
        src: url("./asset/fonts/NanumSquareRegular.woff") format("woff");
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: "NanumSquareLight";
        font-display: fallback;
        src: url("./asset/fonts/NanumSquareLight.woff") format("woff");
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: "SDSwagger";
        font-display: fallback;
        src: url("./asset/fonts/SDSwagger.woff") format("woff");
        font-weight: 400;
        font-style: normal;
    }
`;
const ImageNumber1 = (width, props) => {
  return (
    <EmptyDiv width={width} number={1}>
      <TopLineDiv width={width}>
        <TopLineTitle
          width={width}
          onClick={() => {
            props.PageChangeValue("home");
          }}
        >
          투닝
        </TopLineTitle>
        <TopLineButton width={width}></TopLineButton>
      </TopLineDiv>
    </EmptyDiv>
  );
};
const TextNumber4 = (width, props, PagenationChangeValue) => {
  return (
    <EmptyDiv2 width={width}>
      {/* <BottomTopDiv width={width}>
        <BottomTopText width={width}>이벤트 및 공지 안내</BottomTopText>
        <BottomTopBoxDiv width={width}>
          {props.Notice.map((item, index) => (
            <BoardOne
              width={width}
              onClick={() => {
                props.ChangeBoardViewData(item);
                props.PageChangeValue("boardView");
              }}
            >
              <BoardOneTitle width={width}>{item.title}</BoardOneTitle>
              <BoardOneDate width={width}>
                {moment(item.createdAt).format("YYYY.MM.DD")}
              </BoardOneDate>
            </BoardOne>
          ))}
          <PageDiv width={width}>
            <Pagination
              defaultCurrent={props.NoticePage}
              total={props.NoticeCount}
              onChange={PagenationChangeValue}
            />
          </PageDiv>
        </BottomTopBoxDiv>
      </BottomTopDiv> */}
      <BottomBottomDiv width={width}>
        <BottomBottomDivDiv width={width}>
          <BottomBottomDivText width={width} number={1}>
            오토베이크 | 대표이사 : 백준열 | 메일 : info@tuuning.co.kr{" "}
          </BottomBottomDivText>
          <BottomBottomDivText width={width} number={2}>
            주소 : 서울특별시 서초구 매헌로 16 하이브랜드 1312호 | 전화 :
            010-2557-9497
          </BottomBottomDivText>
          <BottomBottomDivText width={width} number={3}>
            <BottomBottomDivTextSpan
              width={width}
              onClick={() => {
                props.PageChangeValue("term1");
                //props.history.push("/term1");
              }}
            >
              이용약관
            </BottomBottomDivTextSpan>
            <BottomBottomDivTextSpan
              width={width}
              onClick={() => {
                props.PageChangeValue("term2");
                //props.history.push("/term2");
              }}
            >
              {" "}
              개인정보처리방침
            </BottomBottomDivTextSpan>
            <BottomBottomDivTextSpan width={width}>
              사업자정보확인
            </BottomBottomDivTextSpan>
          </BottomBottomDivText>
        </BottomBottomDivDiv>
      </BottomBottomDiv>
    </EmptyDiv2>
  );
};

const Board = (props) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 100);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { width } = windowSize;
  const PagenationChangeValue = async (value) => {
    try {
      let data = await axios.get(
        //"http://localhost:3000/api/notice/get/owner",
        "https://tuuningback.shop/api/notice/get/owner",
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: { page: value },
        }
      );
      if (data.data.success === true) {
        props.NoticeChangeValue(data.data.result);
        props.NoticePageChangeValue(value);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {ImageNumber1(width, props)}
      {TextNumber4(width, props, PagenationChangeValue)}
    </ThemeProvider>
  );
};
export default Board;

const EmptyDiv = styled.div`
  width: ${(props) => parseFloat(props.width) + "px"};
  height: ${(props) => parseFloat(props.width / 2.73) + "px"};
  background-size: cover;
  background-image: url(${(props) =>
    props.number ? `./asset/img/header2.png` : null});
`;
const EmptyDiv2 = styled.div`
  width: ${(props) => parseFloat(props.width) + "px"};

  background-size: cover;
  background-image: url(${(props) =>
    props.number ? `./asset/img/${props.number}.jpg` : null});
`;
const TextDiv = styled.div`
  width: ${(props) => parseFloat(props.width) + "px"};
  height: ${(props) => parseFloat(props.width / 1.7777777) + "px"};
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const EmptyDivTitle = styled.div`
  font-family: "NanumSquareExtraBold";
  text-align: center;
  width: ${(props) => parseInt(props.width / 2.5) + "px"};
  font-size: ${(props) => parseInt((props.width * ratio) / 22.5) + "px"};
  line-height: ${(props) => parseInt((props.width * ratio) / 15.4) + "px"};
  margin-bottom: ${(props) => parseInt(props.width / 64) + "px"};
`;
const EmptyDivSubTitle = styled.div`
  font-family: "NanumSquareRegular";
  text-align: center;
  width: ${(props) => parseInt(props.width / 2.3) + "px"};
  font-size: ${(props) => parseInt((props.width * ratio) / 53.3) + "px"};
  line-height: ${(props) =>
    parseInt((props.width * ratio) / 35) > 13
      ? parseInt((props.width * ratio) / 35) + "px"
      : "13px"};
  margin-top: ${(props) => parseInt(props.width / 64) + "px"};
`;
const TopLineDiv = styled.div`
  width: ${(props) => parseInt(props.width / 1.1) + "px"};
  margin: 0 auto;
  display: flex;
  color: #ffffff;
  flex-direction: row;
`;
const TopLineTitle = styled.span`
  margin-top: ${(props) => parseInt(props.width / 31) + "px"};
  font-size: ${(props) => parseInt((props.width * ratio) / 24) + "px"};
  line-height: ${(props) =>
    parseInt((props.width * ratio) / 23) > 13
      ? parseInt((props.width * ratio) / 23) + "px"
      : "13px"};
  font-family: "SDSwagger";
  cursor: pointer;
`;
const TopLineButton = styled.div`
  margin: 0 0 0 auto;
  display: flex;
  align-items: flex-end;
`;

const BottomTopDiv = styled.div`
  height: ${(props) => parseInt(props.width / 0.86) + "px"};
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin-left: ${(props) => parseInt(props.width / 18.4) + "px"};
`;
const BottomTopBoxDiv = styled.div`
  margin-top: ${(props) => parseInt(props.width / 28.2) + "px"};
  width: ${(props) => parseInt(props.width / 1.18) + "px"};
  margin-right: "auto";
  margin-left: "auto";
  border-top: 1px solid #d7d7d7;
  flex-direction: "column";
`;
const BottomTopText = styled.span`
  font-family: "NanumSquareRegular";
  font-weight: 800;
  font-size: ${(props) => parseInt((props.width * ratio) / 30) + "px"};
  line-height: ${(props) =>
    parseInt((props.width * ratio) / 20.6) > 13
      ? parseInt((props.width * ratio) / 20.6) + "px"
      : "13px"};
  margin-top: ${(props) => parseInt(props.width / 35) + "px"};
`;
const BottomTopBox = styled.div`
  font-family: "NanumSquareRegular";
  font-weight: 800;
  border: 1px solid #c4c4c4;
  background: #c4c4c4;
  width: ${(props) => parseFloat(props.width / 5.8) + "px"};
  height: ${(props) => parseFloat(props.width / 15.3) + "px"};
  margin-top: ${(props) => parseInt(props.width / 25.2) + "px"};
  margin-right: ${(props) => parseInt(props.width / 42.6) + "px"};
  font-size: ${(props) => parseInt((props.width * ratio) / 77) + "px"};
  line-height: ${(props) =>
    parseInt((props.width * ratio) / 53.3) + "px" > 13
      ? parseInt((props.width * ratio) / 20.6) + "px"
      : "13px"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const BottomBottomDiv = styled.div`
  height: ${(props) => parseInt(props.width / 5.5) + "px"};
  background: #f9f9f9;
`;
const BottomBottomDivDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => parseInt(props.width / 25) + "px"};
`;
const BottomBottomDivText = styled.span`
  font-family: "NanumSquareRegular";
  font-size: ${(props) => parseInt((props.width * ratio) / 80) + "px"};
  line-height: ${(props) =>
    parseInt((props.width * ratio) / 55) > 13
      ? parseInt((props.width * ratio) / 55) + "px"
      : "13px"};
  margin-top: ${(props) =>
    parseInt(
      props.width / (props.number === 1 ? 33 : props.number === 2 ? 384 : 120)
    ) + "px"};
`;
const BottomBottomDivTextSpan = styled.span`
  margin-right: ${(props) => parseInt(props.width / 64) + "px"};
  cursor: pointer;
`;
const BottomTopBoxDivDiv = styled.div`
  display: flex;
  float: right;
  margin-top: ${(props) => parseInt(props.width / 48) + "px"};
`;

const BoardOne = styled.div`
  cursor: pointer;
  vertical-align: center;
  border-bottom: 1px solid #d7d7d7;
  padding-top: ${(props) => parseInt(props.width / 35) + "px"};
  padding-bottom: ${(props) => parseInt(props.width / 35) + "px"};
`;

const BoardOneTitle = styled.span`
  font-family: "NanumSquareRegular";
  font-weight: 700;
  font-size: ${(props) => parseInt((props.width * ratio) / 53) + "px"};
`;
const BoardOneDate = styled.span`
  float: right;
  font-family: "NanumSquareRegular";
  font-weight: 700;
  font-size: ${(props) => parseInt((props.width * ratio) / 62) + "px"};
  color: #848484;
`;

const PageDiv = styled.div`
  margin-top: ${(props) => parseInt((props.width * ratio) / 14.7) + "px"};
  text-align: center;
`;
