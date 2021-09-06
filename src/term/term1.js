import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../../theme";
import { debounce } from "lodash";
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
const TextNumber4 = (width, props) => {
  return (
    <EmptyDiv2 width={width}>
      <BottomTopDiv width={width}>
        <BottomTopText width={width}>이용약관</BottomTopText>
        <BottomTopBoxDiv width={width}>
          <TermDiv width={width}>
            <TermDivTitle width={width}>제1조(목적)</TermDivTitle>
            <TermDivSpan width={width}>
              이 약관은 오토베이크(이하 “회사”라 합니다)가 제공하는 투닝
              서비스(이하 “서비스”라 합니다)와 관련하여 “회사”와 “이용자”의
              권리, 의무 및 책임사항을 규정함을 목적으로 합니다. 본 약관은
              PC통신, 스마트폰 앱 등을 이용하는 경우에 대해서도 그 성질에 반하지
              않는 한 이 약관을 준용합니다.
            </TermDivSpan>
          </TermDiv>
          <TermDiv width={width}>
            <TermDivTitle width={width}>제2조(정의)</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “플랫폼”이란 “업주가 “이용자”에게 재화 또는 서비스 상품을
                    예약 및 판매하기 위해 “회사”가 제공하는 가상의 영업장을
                    말합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “이용자”란 “플랫폼”을 통하여 이 약관에 따라 서비스를
                    이용하는 자를 말하며, 회원과 비회원을 모두 포함합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”이라 함은 “플랫폼”에 개인정보를 제공하여 회원등록을 한
                    자로서, “플랫폼”이 제공하는 투닝 서비스를 계속적으로 이용할
                    수 있는 자를 말합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “비회원”이라 함은 “회원”에 가입하지 않고 “플랫폼”이 제공하는
                    서비스를 이용하는 자를 말합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 5. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “게시물”이라 함은 “회원”이 “플랫폼”을 이용함에 있어서 게시한
                    문자·화상·동영상·음성·음향 등의 정보를 포함한 글, 사진,
                    동영상 등 각종 파일과 링크 등을 의미합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 6. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “비밀번호(Password)”라 함은 “회원”의 식별과 회원의 정보를
                    보호하기 위하여 회원 스스로가 설정하여 등록한 영문과 숫자
                    등의 조합을 말합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 7. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “업주”란 “회사”가 제공하는 “서비스”를 이용해 재화 또는
                    서비스 상품에 대한 정보를 게재 및 판매(예약, 작업 및
                    A/S포함)하는 주체를 말합니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>
          <TermDiv width={width}>
            <TermDivTitle width={width}>
              제3조(약관 등의 명시와 개정)
            </TermDivTitle>
            <TermDivSpan width={width}>
              이 약관은 오토베이크(이하 “회사”라 합니다)가 제공하는 투닝
              서비스(이하 “서비스”라 합니다)와 관련하여 “회사”와 “이용자”의
              권리, 의무 및 책임사항을 규정함을 목적으로 합니다. 본 약관은
              PC통신, 스마트폰 앱 등을 이용하는 경우에 대해서도 그 성질에 반하지
              않는 한 이 약관을 준용합니다.
            </TermDivSpan>
          </TermDiv>
        </BottomTopBoxDiv>
      </BottomTopDiv>
      <BottomBottomDiv width={width}>
        <BottomBottomDivDiv width={width}>
          <BottomBottomDivText width={width} number={1}>
            오토베이크 | 대표이사 : 백준열 | 메일 : info@tuuning.co.kr{" "}
          </BottomBottomDivText>
          <BottomBottomDivText width={width} number={2}>
            주소 :광주광역시 서구 상무대로 799, 국제빌딩 3층 | 전화 :
            010-2902-9497
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

const Term1 = (props) => {
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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {ImageNumber1(width, props)}
      {TextNumber4(width, props)}
    </ThemeProvider>
  );
};
export default Term1;

const EmptyDiv = styled.div`
  width: ${(props) => parseFloat(props.width) + "px"};
  height: ${(props) => parseFloat(props.width / 2.73) + "px"};
  background-size: cover;
  background-image: url(${(props) =>
    props.number ? `./asset/img/header1.png` : null});
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
  /* border-top: 1px solid #000; */
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
const TermDiv = styled.div`
  margin-bottom: ${(props) => parseInt(props.width / 38.4) + "px"};
`;

const TermDivTitle = styled.span`
  font-family: "NanumSquareExtraBold";
  font-weight: 800;
  font-size: ${(props) => parseInt((props.width * ratio) / 48) + "px"};
`;

const TermDivSpan = styled.span`
  margin-top: ${(props) => parseInt(props.width / 384) + "px"};
  font-family: "NanumSquareRegular";
  font-weight: 400;
  font-size: ${(props) => parseInt((props.width * ratio) / 48) + "px"};
  display: block;
`;
const TermDivSpanSpan = styled.span`
  display: table-cell;
  text-decoration: inherit;
`;
