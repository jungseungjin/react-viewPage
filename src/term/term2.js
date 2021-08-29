import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../../theme";
import { debounce } from 'lodash';
const ratio = 0.85
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
`
const ImageNumber1 = (width) => {
    return (
        <EmptyDiv width={width} number={1}>
            <TopLineDiv width={width}>
                <TopLineTitle width={width}>투닝</TopLineTitle>
                <TopLineButton width={width}>
                </TopLineButton>
            </TopLineDiv>
        </EmptyDiv>
    )
}
const TextNumber4 = (width,props) => {
    return (
        <EmptyDiv2 width={width} >
            <BottomTopDiv width={width}>
                <BottomTopText width={width}>개인정보처리방침</BottomTopText>
                <BottomTopBoxDiv width={width}>
                    <TermDiv width={width}>
                        <TermDivSpan width={width}>
                        오토베이크(이하 “회사”)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령에 따라 이용자의 개인정보를 보호하기 위해 최선을 다하고 있습니다,. 저희 회사는 다음과 같은 개인정보처리방침을 수립합니다.
                        </TermDivSpan>
                    </TermDiv>
                    <TermDiv width={width}>
                        <TermDivSpan width={width}>
                            <ul style={{paddingInlineStart: 3}}>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 1. </TermDivSpanSpan>
                                    <TermDivSpanSpan >개인정보 수집 항목 및 방법</TermDivSpanSpan>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 2. </TermDivSpanSpan>
                                    <TermDivSpanSpan >개인정보 수집 및 이용 목적</TermDivSpanSpan>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 3. </TermDivSpanSpan>
                                    <TermDivSpanSpan >개인정보 취급위탁</TermDivSpanSpan>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 4. </TermDivSpanSpan>
                                    <TermDivSpanSpan >개인정보 보유 및 이용기간</TermDivSpanSpan>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 5. </TermDivSpanSpan>
                                    <TermDivSpanSpan >개인정보 제 3자 제공</TermDivSpanSpan>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 6. </TermDivSpanSpan>
                                    <TermDivSpanSpan >개인정보 파기절차 및 방법</TermDivSpanSpan>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 7. </TermDivSpanSpan>
                                    <TermDivSpanSpan >이용자 및 법정대리인의 권리·의무 행사 방법</TermDivSpanSpan>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 8. </TermDivSpanSpan>
                                    <TermDivSpanSpan >개인정보 자동 수집 장치 설치, 운영 및 거부에 관한 사항</TermDivSpanSpan>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 9. </TermDivSpanSpan>
                                    <TermDivSpanSpan >링크 사이트에 대한 책임</TermDivSpanSpan>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 10. </TermDivSpanSpan>
                                    <TermDivSpanSpan >개인정보의 기술적/관리적 보호 대책</TermDivSpanSpan>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 11. </TermDivSpanSpan>
                                    <TermDivSpanSpan >개인정보 관리 책임자 및 담당자</TermDivSpanSpan>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                    <TermDivSpanSpan> 12. </TermDivSpanSpan>
                                    <TermDivSpanSpan >고지의 의무</TermDivSpanSpan>
                                </li>
                            </ul>
                        </TermDivSpan>
                    </TermDiv>

                    <TermDiv width={width}>
                        <TermDivTitle width={width}>
                        1. 개인정보 수집 항목 및 방법
                        </TermDivTitle>
                        <TermDivSpan width={width}>
                        모든 사용자는 회사가 제공하는 서비스를 이용할 수 있고 회사는 사용자의 원활한 서비스를 제공하기 위해 다음과 같은 개인정보를 수집하고 있습니다.
                        </TermDivSpan>
                    </TermDiv>
                    <TermDiv width={width}>
                    <table width={width} cellPadding="0" cellPadding="0" style={{
                        borderTop:'1px solid #000',
                        borderLeft:'1px solid #000',
                        alignItems:'center',
                        marginBottom: parseInt(width / 320) + 'px',
                        borderSpacing: '0',
                        width:parseInt(width / 1.23) + 'px',
                    }}>
                        <tr  style={{alignItems:'center',textAlign:'center'}}>
                            <Td style={{width:"21%"}} width={width}>구분</Td>
                            <Td style={{width:"39%"}} width={width}>수집이용목적</Td>
                            <Td style={{width:"40%"}} width={width}>수집이용항목</Td>
                        </tr>
                        <tr>
                            <td rowspan="3" style={{alignItems:'center',
                            fontFamily: 'NanumSquareRegular',textAlign:'center',
                            fontWeight:400,fontSize:parseInt(width * ratio / 48) + 'px',
                            padding:"3px 0px",
                            borderRight:'1px solid #000',
                            borderBottom:'1px solid #000'}} >회원</td>
                            <Td width={width} style={{textAlign:'center'}}>서비스 이용</Td>
                            <Td width={width}>휴대폰번호, 아이디(이메일), 비밀번호, 위치정보(선택), 차종정보</Td>
                        </tr>
                        <tr>
                            <Td width={width} style={{textAlign:'center'}}>이벤트 참여</Td>
                            <Td width={width}>성명, 수령지주소, 휴대폰번호</Td>	
                        </tr>
                        <tr>
                            <Td width={width} style={{textAlign:'center'}}>서비스 이용 중 자동수집</Td>
                            <Td width={width}>쿠키, IP Address, 방문일시, 이용자의 사용 OS 및 브라우저 종류, 기기 고유번호, 검색어, 서비스 이용기록, 불량이용기록, 불만 및 분쟁처리 기록, 결제기록</Td>	
                        </tr>
                    </table>
                    <table width={width} cellPadding="0" cellPadding="0" style={{
                        borderTop:'1px solid #000',
                        borderLeft:'1px solid #000',
                        alignItems:'center',
                        marginBottom: parseInt(width / 320) + 'px',
                        borderSpacing: '0',
                        width:parseInt(width / 1.23) + 'px',
                    }}>
                        <tr  style={{alignItems:'center',textAlign:'center'}}>
                            <Td style={{width:"33%"}} width={width}>위탁업무내용</Td>
                            <Td style={{width:"33%"}} width={width}>수탁업체</Td>
                            <Td style={{width:"33%"}} width={width}>개인정보의 보유 및 이용기간</Td>
                        </tr>
                        <tr>
                            <Td width={width} >휴대폰 문자 메시지(SMS, LMS, App Push) 발송 관련 서비스</Td>
                            <Td width={width}>네이버클라우드 주식회사</Td>
                            <td rowspan="2" style={{alignItems:'center',
                            fontFamily: 'NanumSquareRegular',textAlign:'center',
                            fontWeight:400,fontSize:parseInt(width * ratio / 48) + 'px',
                            padding:"3px 0px",
                            borderRight:'1px solid #000',
                            borderBottom:'1px solid #000'}} >회원탈퇴 시 혹은 위탁계약 종료시까지</td>
                        </tr>
                        <tr>
                            <Td width={width} >클라우드 컴퓨팅, DB보관 </Td>
                            <Td width={width} >Amazon Web Services, inc</Td>
                        </tr>
                    </table>
                    <table width={width} cellPadding="0" cellPadding="0" style={{
                        borderTop:'1px solid #000',
                        borderLeft:'1px solid #000',
                        alignItems:'center',
                        marginBottom: parseInt(width / 320) + 'px',
                        borderSpacing: '0',
                        width:parseInt(width / 1.23) + 'px',
                    }}>
                        <tr  style={{alignItems:'center',textAlign:'center'}}>
                            <Td style={{width:"33%"}} width={width}>보유 정보</Td>
                            <Td style={{width:"33%"}} width={width}>보유 근거</Td>
                            <Td style={{width:"33%"}} width={width}>보유 기간</Td>
                        </tr>
                        <tr>
                            <Td width={width} style={{textAlign:'center'}}>부정이용기록 보유</Td>
                            <Td width={width}>회사 내부 방침에 의한 정보 보유(부정 이용방지)</Td>
                            <Td width={width} style={{textAlign:'center'}}>1년</Td>
                        </tr>
                        <tr>
                            <Td width={width} >계약 또는 청약철회에 관한 기록</Td>
                            <Td width={width}>전자상거래 등에서의 소비자 보호에 관한 법률</Td>
                            <Td width={width} style={{textAlign:'center'}}>5년</Td>
                        </tr>
                        <tr>
                            <Td width={width} >대금 결제 및 재화 등의 공급에 관한 기록</Td>
                            <Td width={width}>전자상거래 등에서의 소비자 보호에 관한 법률, 국세기본법, 법인세법, 부가가치세법</Td>
                            <Td width={width} style={{textAlign:'center'}}>5년</Td>
                        </tr>
                        <tr>
                            <Td width={width} >소비자의 불만 또는 분쟁처리에 관한 기록</Td>
                            <Td width={width}>전자상거래 등에서의 소비자 보호에 관한 법률</Td>
                            <Td width={width} style={{textAlign:'center'}}>5년</Td>
                        </tr>
                        <tr>
                            <Td width={width} style={{textAlign:'center'}}>표시/광고에 관한 기록</Td>
                            <Td width={width}>전자상거래 등에서의 소비자 보호에 관한 법률</Td>
                            <Td width={width} style={{textAlign:'center'}}>6개월</Td>
                        </tr>
                        <tr>
                            <Td width={width} >신용정보의 수집, 처리 및 이용 등에 관한 기록</Td>
                            <Td width={width}>신용정보의 이용 및 보호에 관한 법률</Td>
                            <Td width={width} style={{textAlign:'center'}}>3년</Td>
                        </tr>
                        <tr>
                            <Td width={width} style={{textAlign:'center'}}>전자금융에 관한 기록</Td>
                            <Td width={width} style={{textAlign:'center'}}>전자금융거래법</Td>
                            <Td width={width} style={{textAlign:'center'}}>3년</Td>
                        </tr>
                        <tr>
                            <Td width={width} >사이트 방문(로그인 등)에 관한
기록</Td>
                            <Td width={width} style={{textAlign:'center'}}>통신비밀보호법</Td>
                            <Td width={width} style={{textAlign:'center'}}>3개월</Td>
                        </tr>
                    </table>
                    <table width={width} cellPadding="0" cellPadding="0" style={{
                        borderTop:'1px solid #000',
                        borderLeft:'1px solid #000',
                        alignItems:'center',
                        marginBottom: parseInt(width / 320) + 'px',
                        borderSpacing: '0',
                        width:parseInt(width / 1.23) + 'px',
                    }}>
                        <tr  style={{alignItems:'center',textAlign:'center'}}>
                            <Td style={{width:"25%"}} width={width}>제공 받는 대상자</Td>
                            <Td style={{width:"25%"}} width={width}>제공목적</Td>
                            <Td style={{width:"25%"}} width={width}>제공목적</Td>
                            <Td style={{width:"25%"}} width={width}>보유 및 이용기간</Td>
                        </tr>
                        <tr>
                            <Td width={width}>튜닝업체, 회사의 상품 제공자 등 기타 자동차 튜닝 서비스를 제공하는 자</Td>
                            <Td width={width}>자동차 튜닝 및 관리 서비스의 제공</Td>
                            <Td width={width}>휴대폰 번호, 성명, 차종정보</Td>
                            <Td width={width}>서비스 목적 달성시까지(관계법령의 규정에 의하여 보존할 필요가 있는 경우 및 사전 동의를 얻은 경우 해당 보유 기간)</Td>
                        </tr>
                    </table>
                    </TermDiv>

                    <TermDiv width={width}>
                        <TermDivTitle width={width} style={{fontFamily: "NanumSquareRegular", fontWeight:'400'}}>
                        -개인정보처리방침 시행일자 : 2021년 09월 01일
                        </TermDivTitle>
                    </TermDiv>
                </BottomTopBoxDiv>
            </BottomTopDiv>
            <BottomBottomDiv width={width}>
                <BottomBottomDivDiv width={width}>
                    <BottomBottomDivText width={width} number={1}>오토베이크  |  대표이사 : 백준열  |  메일 : info@tuuning.co.kr </BottomBottomDivText>
                    <BottomBottomDivText width={width} number={2}>주소 :광주광역시 서구 상무대로 799, 국제빌딩 3층  |  전화 : 010-2902-9497</BottomBottomDivText>
                    <BottomBottomDivText width={width} number={3}><BottomBottomDivTextSpan width={width} onClick={()=>{props.history.push('/term1')}}>이용약관</BottomBottomDivTextSpan><BottomBottomDivTextSpan width={width} onClick={()=>{props.history.push('/term2')}}>개인정보처리방침</BottomBottomDivTextSpan><BottomBottomDivTextSpan width={width}>사업자정보확인</BottomBottomDivTextSpan></BottomBottomDivText>
                </BottomBottomDivDiv>
            </BottomBottomDiv>
        </EmptyDiv2>
    )
}


const Term2 = (props) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const handleResize = debounce(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, 100)
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { // cleanup 
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    const { width } = windowSize
    return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {ImageNumber1(width)}
                {TextNumber4(width,props)}
            </ThemeProvider>
    );
};
export default Term2;


const EmptyDiv = styled.div`
  width: ${props => parseFloat(props.width) + 'px'};
  height:${props => parseFloat(props.width / 2.73) + 'px'};
  background-size:cover;
  background-image:url(${props => props.number ? `./asset/img/header1.png` : null});
`;
const EmptyDiv2 = styled.div`
  width: ${props => parseFloat(props.width) + 'px'};
  
  background-size:cover;
  background-image:url(${props => props.number ? `./asset/img/${props.number}.jpg` : null});
`;
const TextDiv = styled.div`
    width: ${props => parseFloat(props.width) + 'px'};
    height:${props => parseFloat(props.width / 1.7777777) + 'px'};
    background: white;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const EmptyDivTitle = styled.div`
    font-family: 'NanumSquareExtraBold';
    text-align:center;
    width:${props => parseInt(props.width / 2.5) + 'px'};
    font-size:${props => parseInt(props.width * ratio / 22.5) + 'px'};
    line-height:${props => parseInt(props.width * ratio / 15.4) + 'px'};
    margin-bottom:${props => parseInt(props.width / 64) + 'px'};
`;
const EmptyDivSubTitle = styled.div`
    font-family: 'NanumSquareRegular';
    text-align:center;
    width:${props => parseInt(props.width / 2.3) + 'px'};
    font-size:${props => parseInt(props.width * ratio / 53.3) + 'px'};
    line-height:${props => parseInt(props.width * ratio / 35) > 13 ? parseInt(props.width * ratio / 35) + 'px' : '13px'};
    margin-top:${props => parseInt(props.width / 64) + 'px'};
`;
const TopLineDiv = styled.div`
    width:${props => parseInt(props.width / 1.1) + 'px'};
    margin:0 auto;
    display:flex;
    color:#FFFFFF;
    flex-direction:row;
`;
const TopLineTitle = styled.span`
    margin-top:${props => parseInt(props.width / 31) + 'px'};
    font-size:${props => parseInt(props.width * ratio / 24) + 'px'};
    line-height:${props => parseInt(props.width * ratio / 23) > 13 ? parseInt(props.width * ratio / 23) + 'px' : '13px'};
    font-family: 'SDSwagger';
`;
const TopLineButton = styled.div`
    margin:0 0 0 auto;
    display:flex;
    align-items:flex-end;
`;

const BottomTopDiv = styled.div`
    height:${props => parseInt(props.width / 0.546) + 'px'};
    display:flex;
    flex-direction:column;
    background:#FFFFFF;
    margin-left:${props => parseInt(props.width / 18.4) + 'px'};
`;
const BottomTopBoxDiv = styled.div`
    margin-top: ${props => parseInt(props.width / 28.2) + 'px'};
    width: ${props => parseInt(props.width / 1.18) + 'px'};
    margin-right: 'auto';
    margin-left: 'auto';
    /* border-top: 1px solid #000; */
    flex-direction: 'column';
`;
const BottomTopText = styled.span`
    font-family: 'NanumSquareRegular';
    font-weight:800;
    font-size:${props => parseInt(props.width * ratio / 30) + 'px'};
    line-height:${props => parseInt(props.width * ratio / 20.6) > 13 ? parseInt(props.width * ratio / 20.6) + 'px' : '13px'};
    margin-top:${props => parseInt(props.width / 35) + 'px'};
`;
const BottomTopBox = styled.div`
    font-family: 'NanumSquareRegular';
    font-weight:800;
    border:1px solid #C4C4C4;
    background:#C4C4C4;
    width: ${props => parseFloat(props.width / 5.8) + 'px'};
    height:${props => parseFloat(props.width / 15.3) + 'px'};
    margin-top:${props => parseInt(props.width / 25.2) + 'px'};
    margin-right:${props => parseInt(props.width / 42.6) + 'px'};
    font-size:${props => parseInt(props.width * ratio / 77) + 'px'};
    line-height:${props => parseInt(props.width * ratio / 53.3) + 'px' > 13 ? parseInt(props.width * ratio / 20.6) + 'px' : '13px'};
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
`;
const BottomBottomDiv = styled.div`
    height:${props => parseInt(props.width / 5.5) + 'px'};
    background:#F9F9F9;
`;
const BottomBottomDivDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:${props => parseInt(props.width / 25) + 'px'};
`;
const BottomBottomDivText = styled.span`
    font-family: 'NanumSquareRegular';
    font-size:${props => parseInt(props.width * ratio / 80) + 'px'};
    line-height:${props => parseInt(props.width * ratio / 55) > 13 ? parseInt(props.width * ratio / 55) + 'px' : '13px'};
    margin-top:${props => parseInt(props.width / (props.number === 1 ? 33 : props.number === 2 ? 384 : 120)) + 'px'};
`;
const BottomBottomDivTextSpan = styled.span`
    margin-right:${props => parseInt(props.width / 64) + 'px'};
    cursor: pointer;
`;
const BottomTopBoxDivDiv = styled.div`
display: flex;
float:right;
margin-top:${props => parseInt(props.width / 48) + 'px'};
`;
const TermDiv=styled.div`
margin-bottom:${props => parseInt(props.width / 38.4) + 'px'};
`

const TermDivTitle = styled.span`
font-family: 'NanumSquareExtraBold';
font-weight:800;
font-size:${props => parseInt(props.width * ratio / 48) + 'px'};
`

const TermDivSpan = styled.span`
margin-top:${props => parseInt(props.width / 384) + 'px'};
font-family: 'NanumSquareRegular';
font-weight:400;
font-size:${props => parseInt(props.width * ratio / 48) + 'px'};
display: block;
`
const TermDivSpanSpan = styled.span`
display: table-cell;
text-decoration: inherit;
`
////table
const TableDiv = styled.div`
width : ${props => parseInt(props.width / 1.238) + 'px'};
`
const Table = styled.table`
border:1px solid #000;
align-items:center;
margin-bottom: ${props => parseInt(props.width / 320) + 'px'};
`
const Td = styled.td`
font-family: 'NanumSquareRegular';
font-weight:400;
font-size:${props => parseInt(props.width * ratio / 48) + 'px'};
border-right:1px solid #000;
border-bottom:1px solid #000;
padding:3px 0px;
`