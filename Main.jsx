import React ,{useEffect,useState}from "react";
import styled, { ThemeProvider,createGlobalStyle } from "styled-components";
import theme from "./theme";
import {debounce} from 'lodash';
const GlobalStyle = createGlobalStyle `	
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
`
const ImageNumber1 = (width)=>{
    return(
        <EmptyDiv width={width} number={1}>
            <TopLineDiv  width={width}>
                <TopLineTitle  width={width}>투닝</TopLineTitle>
                <TopLineButton  width={width}>
                    <TopLineButtonText  width={width}>회사소개</TopLineButtonText>
                    <TopLineButtonText  width={width}>입점문의</TopLineButtonText>
                </TopLineButton>
            </TopLineDiv>
            <TopLineMessage  width={width}>
                내 자동차의 부족함을<br></br>업그레이드 할 때
            </TopLineMessage>
            <TopLineMessage2  width={width}>
                투닝을 사용해보세요.
            </TopLineMessage2>
            <AppButtonDiv width={width}>
                <AppButton width={width}></AppButton>
                <AppButton2 width={width}></AppButton2>
            </AppButtonDiv>
        </EmptyDiv>
    )
}
const ImageNumber2 = (width)=>{
    return(
        <EmptyDiv width={width} number={2}></EmptyDiv>
    )
}
const ImageNumber3 = (width)=>{
    return(
        <EmptyDiv width={width} number={3}>
            <Div4 width={width}>
                <TextDivDiv width={width}>
                    <TextDivTitle width={width}>드레스업</TextDivTitle>
                    <TextDivContent width={width}>드레스업 튜닝은 나의 자동차를 취향대로 꾸밀 수 있도록 도와주는 튜닝입니다. 비교적 적은 튜닝 대비 많은 효과를 줄 수 있습니다.</TextDivContent>
                </TextDivDiv>
                <TextDivDiv width={width}>
                    <TextDivTitle width={width}>퍼포먼스</TextDivTitle>
                    <TextDivContent width={width}>퍼포먼스(튠업) 튜닝은 나의 자동차 성능이 높아지도록 도와주는 튜닝입니다. 고성능 퍼포먼스 튜닝을 경험해보세요.</TextDivContent>
                </TextDivDiv>
                <TextDivDiv width={width}>
                    <TextDivTitle width={width}>편의장치</TextDivTitle>
                    <TextDivContent width={width}>집 다음으로 오래 머무르는 공간인 나의 자동차, 편의장치(순정옵션을 포함한) 튜닝을 통해 더욱 편리하고 즐거운 자동차 생활을 즐기세요.</TextDivContent>
                </TextDivDiv>
                <TextDivDiv width={width}>
                    <TextDivTitle width={width}>캠핑카</TextDivTitle>
                    <TextDivContent width={width}>답답한 도심을 벗어나 자동차와 함께하는 캠핑라이프를 즐기기 위해 간단한 차박을 위한 튜닝부터 다양한 옵션이 들어간 캠핑카 튜닝을 경험해보세요.</TextDivContent>
                </TextDivDiv>
            </Div4>
        </EmptyDiv>
    )
}
const ImageNumber4 = (width)=>{
    return(
        <EmptyDiv width={width} number={4}>
            <Number3Div  width={width}><Number3Text  width={width}>이제는 <Number3TextBold   width={width}>아끼는 나의 자동차</Number3TextBold>를 위해서 ‘투닝’ 하세요</Number3Text></Number3Div>
            <Number3Div2 width={width}>
                <Number3ButtonDiv width={width}>
                    <Number3Button width={width} number={1}></Number3Button>
                </Number3ButtonDiv>
                <Number3ButtonDiv width={width}>
                    <Number3Button width={width} number={2}></Number3Button>
                </Number3ButtonDiv>
            </Number3Div2>
            <Number3Div3 width={width}>
                <Number3Div3Button width={width}></Number3Div3Button>
            </Number3Div3>
        </EmptyDiv>
    )
}
const TextNumber1 = (width) =>{
    return (
        <TextDiv  width={width}>
            <EmptyDivTitle width={width}>자동차 튜닝을 위해<br></br>발품을 파는 일은 그만</EmptyDivTitle>
            <EmptyDivSubTitle width={width}>투명하고 선별된 자동차 튜닝정보를 쉽게 찾을 수 있도록 투닝이 실력있는 사장님들의 작업들을 모았습니다.</EmptyDivSubTitle>
        </TextDiv>
    )
}
const TextNumber2 = (width) =>{
    return (
        <TextDiv  width={width}>
            <EmptyDivTitle2 width={width}>모든 자동차 튜닝은 투닝에서</EmptyDivTitle2>
            <EmptyDivSubTitle2 width={width}>틴팅, 블랙박스 시공 등 편의장치부터<br></br>다양한 드레스업, 퍼포먼스, 캠핑카 튜닝까지<br></br>쉽게 해결할 수 있도록 선별되고 투명한 튜닝작업을 모으고 있습니다.</EmptyDivSubTitle2>
        </TextDiv>
    )
}
const TextNumber3 = (width) =>{
    return (
        <TextDiv  width={width}>
            <EmptyDivTitle3 width={width}>자동차를 사랑하는 모든 분들이<br></br>열린 튜닝환경에서 작업을 받으실 수 있도록 투닝은 더욱 열심히 노력하겠습니다.</EmptyDivTitle3>
            <EmptyDivSubTitle3 width={width}>투닝은 현재 시범 서비스 중에 있습니다.<br></br>여러분께 지속적으로 선별된 튜닝관련 콘텐츠를 제공드릴 수 있는<br></br>발전하는 투닝이 되겠습니다.</EmptyDivSubTitle3>
        </TextDiv>
    )
}
const TextNumber4 = (width) =>{
    return (
        <EmptyDiv width={width} >
            <BottomTopDiv width={width}>
                <BottomTopText width={width}>이벤트 및 공지 안내</BottomTopText>
                <BottomTopBoxDiv>
                    <BottomTopBox  width={width}>투닝 베타서비스 오픈</BottomTopBox>
                    <BottomTopBox  width={width}>후기 이벤트</BottomTopBox>
                </BottomTopBoxDiv>
            </BottomTopDiv>
            <BottomBottomDiv>
                <BottomBottomDivDiv  width={width}>
                    <BottomBottomDivText   width={width} number={1}>(주)투닝  |  대표이사 : 백준열  |  메일 : info@tuuning.com </BottomBottomDivText>
                    <BottomBottomDivText   width={width} number={2}>주소 : 광주광역시 북구 용봉로77 산학협력2호관 107호  |  전화 : 010-2902-9497</BottomBottomDivText>
                </BottomBottomDivDiv>
            </BottomBottomDiv>
        </EmptyDiv>
    )
}
const Main = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const handleResize =  debounce(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    },100)
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { // cleanup 
        window.removeEventListener('resize', handleResize);
        }
    }, []);
    const {width} = windowSize
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {ImageNumber1(width)}
        {TextNumber1(width)}
        {ImageNumber2(width)}
        {TextNumber2(width)}
        {ImageNumber3(width)}
        {TextNumber3(width)}
        {ImageNumber4(width)}
        {TextNumber4(width)}
    </ThemeProvider>
  );
};
export default Main;

const EmptyDiv = styled.div`
  width: ${props => parseFloat(props.width)+'px'};
  height:${props => parseFloat(props.width/1.7777777)+'px'};
  background-size:cover;
  background-image:url(${props => props.number ?  `./asset/img/${props.number}.png`: null});
`;
const TextDiv = styled.div`
    width: ${props => parseFloat(props.width)+'px'};
    height:${props => parseFloat(props.width/1.7777777)+'px'};
    background: white;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const EmptyDivTitle = styled.div`
    font-family: 'NanumSquareExtraBold';
    text-align:center;
    width:${props => parseInt(props.width/2.5)+'px'};
    font-size:${props => parseInt(props.width/22.5)+'px'};
    line-height:${props => parseInt(props.width/15.4)+'px'};
    margin-bottom:${props => parseInt(props.width/64)+'px'};
`;
const EmptyDivSubTitle = styled.div`
    font-family: 'NanumSquareRegular';
    text-align:center;
    width:${props => parseInt(props.width/2.3)+'px'};
    font-size:${props => parseInt(props.width/53.3)+'px'};
    line-height:${props => parseInt(props.width/35) > 13 ? parseInt(props.width/35)+'px' : '13px'};
    margin-top:${props => parseInt(props.width/64)+'px'};
`;
const EmptyDivTitle2 = styled.div`
    font-family: 'NanumSquareExtraBold';
    text-align:center;
    width:${props => parseInt(props.width/1.9)+'px'};
    font-size:${props => parseInt(props.width/22.5)+'px'};
    line-height:${props => parseInt(props.width/15.4)+'px'};
    margin-bottom:${props => parseInt(props.width/64)+'px'};
`;
const EmptyDivSubTitle2 = styled.div`
    font-family: 'NanumSquareRegular';
    text-align:center;
    width:${props => parseInt(props.width/1.9)+'px'};
    font-size:${props => parseInt(props.width/53.3)+'px'};
    line-height:${props => parseInt(props.width/35) > 13 ? parseInt(props.width/35)+'px' : '13px'};
    margin-top:${props => parseInt(props.width/64)+'px'};
`;
const EmptyDivTitle3 = styled.div`
    font-family: 'NanumSquareExtraBold';
    text-align:center;
    width:${props => parseInt(props.width/1.8) > 230 ? parseInt(props.width/1.8)+'px' : '230px'};
    font-size:${props => parseInt(props.width/32)+'px'};
    line-height:${props => parseInt(props.width/22)+'px'};
    margin-bottom:${props => parseInt(props.width/64)+'px'};
`;
const EmptyDivSubTitle3 = styled.div`
    font-family: 'NanumSquareRegular';
    text-align:center;
    width:${props => parseInt(props.width/2) > 280 ? parseInt(props.width/2)+'px' : '280px'};
    font-size:${props => parseInt(props.width/53.3)+'px'};
    line-height:${props => parseInt(props.width/35) > 13 ? parseInt(props.width/35)+'px' : '13px'};
    margin-top:${props => parseInt(props.width/64)+'px'};
`;
const TopLineDiv = styled.div`
    width:${props => parseInt(props.width/1.1)+'px'};
    margin:0 auto;
    display:flex;
    color:#FFFFFF;
    flex-direction:row;
`;
const TopLineTitle = styled.span`
    margin-top:${props => parseInt(props.width/31)+'px'};
    font-size:${props => parseInt(props.width/24)+'px'};
    line-height:${props => parseInt(props.width/23) > 13 ? parseInt(props.width/23)+'px' : '13px'};
    font-family: 'SDSwagger';
`;
const TopLineButton = styled.div`
    margin:0 0 0 auto;
    display:flex;
    align-items:flex-end;
`;
const TopLineButtonText = styled.span`
    margin-left:${props => parseInt(props.width/48)+'px'};
    margin-top:${props => parseInt(props.width/31)+'px'};
    font-size:${props => parseInt(props.width/48)+'px'};
    line-height:${props => parseInt(props.width/38.4) > 13 ? parseInt(props.width/38.4)+'px' : '13px'};
    font-family: 'NanumSquareRegular';
`;
const TopLineMessage = styled.div`
    margin-top:${props => parseInt(props.width/14)+'px'};
    margin-left:${props => parseInt(props.width/21.8)+'px'};
    font-size:${props => parseInt(props.width/20)+'px'};
    line-height:${props => parseInt(props.width/16) > 13 ? parseInt(props.width/16)+'px' : '13px'};
    font-family: 'NanumSquareRegular';
    font-weight:800;
    color:#FFFFFF;
`;
const TopLineMessage2 = styled.div`
    margin-top:${props => parseInt(props.width/31)+'px'};
    margin-left:${props => parseInt(props.width/19.6)+'px'};
    font-size:${props => parseInt(props.width/54.8)+'px'};
    line-height:${props => parseInt(props.width/40) > 13 ? parseInt(props.width/40)+'px' : '13px'};
    font-family: 'NanumSquareRegular';
    font-weight:800;
    color:#FFFFFF;
`;
const AppButtonDiv = styled.div`
    margin-top:${props => parseInt(props.width/18.4)+'px'};
    margin-left:${props => parseInt(props.width/19.6)+'px'};
    display:flex;
    flex-direction:row;
`;
const AppButton = styled.div`
    width:${props => parseInt(props.width/6.57)+'px'};
    height:${props => parseInt(props.width/22.3)+'px'};
    background-image:URL('./asset/img/Group1.png');
    background-size:cover;
    margin-right:${props => parseInt(props.width/87)+'px'};
`;
const AppButton2 = styled.div`
    width:${props => parseInt(props.width/6.57)+'px'};
    height:${props => parseInt(props.width/22.3)+'px'};
    background-image:URL('./asset/img/Group2.png');
    background-size:cover;
`;
const Div4 = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
`;
const TextDivDiv = styled.div`
    margin-top:${props => parseInt(props.width/5.4)+'px'};
    width:${props => parseInt(props.width/5)+'px'};
    margin-right:${props => parseInt(props.width/35.5)+'px'};
    display:flex;
    flex-direction:column;
`;
const TextDivTitle = styled.span`
    margin:0 auto;
    font-size:${props => parseInt(props.width/38.4)+'px'};
    line-height:${props => parseInt(props.width/26.3) > 13 ? parseInt(props.width/26.3)+'px' : '13px'};
    font-family: 'NanumSquareRegular';
    font-weight:800;
    color:#FFFFFF;
`;
const TextDivContent = styled.span`
    margin-top:${props => parseInt(props.width/27.8)+'px'};
    font-size:${props => parseInt(props.width/64)+'px'};
    line-height:${props => parseInt(props.width/41.3) > 13 ? parseInt(props.width/41.3)+'px' : '13px'};
    font-family: 'NanumSquareRegular';
    font-weight:400;
    color:#FFFFFF;
`;

const BottomTopDiv = styled.div`
    height:70%;
    display:flex;
    flex-direction:column;
    background:#FFFFFF;
    margin-left:${props => parseInt(props.width/18.4)+'px'};
`;
const BottomTopBoxDiv = styled.div`
    display:flex;
    flex-direction:row;
`;
const BottomTopText = styled.span`
    font-family: 'NanumSquareRegular';
    font-weight:800;
    font-size:${props => parseInt(props.width/30)+'px'};
    line-height:${props => parseInt(props.width/20.6) > 13 ? parseInt(props.width/20.6)+'px' : '13px'};
    margin-top:${props => parseInt(props.width/35)+'px'};
`;
const BottomTopBox = styled.div`
    font-family: 'NanumSquareRegular';
    font-weight:800;
    border:1px solid #C4C4C4;
    background:#C4C4C4;
    width: ${props => parseFloat(props.width/5.8)+'px'};
    height:${props => parseFloat(props.width/15.3)+'px'};
    margin-top:${props => parseInt(props.width/25.2)+'px'};
    margin-right:${props => parseInt(props.width/42.6)+'px'};
    font-size:${props => parseInt(props.width/77)+'px'};
    line-height:${props => parseInt(props.width/53.3)+'px' > 13 ? parseInt(props.width/20.6)+'px' : '13px'};
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
`;
const BottomBottomDiv = styled.div`
    height:30%;
    background:#F9F9F9;
`;
const BottomBottomDivDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:${props => parseInt(props.width/25)+'px'};
`;
const BottomBottomDivText = styled.span`
    font-family: 'NanumSquareRegular';
    font-size:${props => parseInt(props.width/80)+'px'};
    line-height:${props => parseInt(props.width/55) > 13 ? parseInt(props.width/55)+'px' : '13px'};
    margin-top:${props => parseInt(props.width/(props.number === 1 ? 33 : 120))+'px'};
`;
const Number3Div = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Number3Div2=styled.div`
    display: flex;
    flex-direction:row;
    margin-top:${props => parseInt(props.width/10.6)+'px'};
`;
const Number3Div3 = styled.div`
    display: flex;
    float:right;
    margin-top:${props => parseInt(props.width/14.7)+'px'};
`;
const Number3Div3Button = styled.div`
    width:${props => parseInt(props.width/11.4)+'px'};
    height:${props => parseInt(props.width/28.2)+'px'};
    background-image:URL('./asset/img/Group3.png');
    background-size:cover;
    margin-right:${props => parseInt(props.width/18.3)+'px'};
`;

const Number3Text = styled.span`
    font-family: 'NanumSquareLight';
    color:white;
    text-align:center;
    width:${props => parseInt(props.width/1.81)+'px'};
    font-size:${props => parseInt(props.width/26.6)+'px'};
    line-height:${props => parseInt(props.width/18.3) > 13 ? parseInt(props.width/18.3)+'px' : '13px'};
    margin-top:${props => parseInt(props.width/5.5)+'px'};
`;
const Number3TextBold = styled.span`
    font-family: 'NanumSquareExtraBold';
`;
const Number3ButtonDiv = styled.div`
    width:50%;
`;
const Number3Button = styled.div`
    float:${props => props.number === 1  ? 'right' : null};
    width:${props => parseInt(props.width/6.57)+'px'};
    height:${props => parseInt(props.width/22.3)+'px'};
    background-image:URL(${props => props.number === 1 ? './asset/img/Group1.png' : './asset/img/Group2.png'});
    background-size:cover;
    margin-right:1%;
`;

