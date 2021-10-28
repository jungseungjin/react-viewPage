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
        <BottomTopText width={width}>개인정보처리방침</BottomTopText>
        <BottomTopBoxDiv width={width}>
          <TermDiv width={width}>
            <TermDivSpan width={width}>
              오토베이크(이하 “회사”)는 정보통신망 이용촉진 및 정보보호 등에
              관한 법률, 개인정보보호법 등 관련 법령에 따라 이용자의 개인정보를
              보호하기 위해 최선을 다하고 있습니다,. 저희 회사는 다음과 같은
              개인정보처리방침을 수립합니다.
            </TermDivSpan>
          </TermDiv>
          <TermDiv width={width}>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>개인정보 수집 항목 및 방법</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>개인정보 수집 및 이용 목적</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>개인정보 취급위탁</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>개인정보 보유 및 이용기간</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 5. </TermDivSpanSpan>
                  <TermDivSpanSpan>개인정보 제 3자 제공</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 6. </TermDivSpanSpan>
                  <TermDivSpanSpan>개인정보 파기절차 및 방법</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 7. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    이용자 및 법정대리인의 권리·의무 행사 방법
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 8. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    개인정보 자동 수집 장치 설치, 운영 및 거부에 관한 사항
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 9. </TermDivSpanSpan>
                  <TermDivSpanSpan>링크 사이트에 대한 책임</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 10. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    개인정보의 기술적/관리적 보호 대책
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 11. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    개인정보 관리 책임자 및 담당자
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 12. </TermDivSpanSpan>
                  <TermDivSpanSpan>고지의 의무</TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              1. 개인정보 수집 항목 및 방법
            </TermDivTitle>
            <TermDivSpan width={width}>
              모든 사용자는 회사가 제공하는 서비스를 이용할 수 있고 회사는
              사용자의 원활한 서비스를 제공하기 위해 다음과 같은 개인정보를
              수집하고 있습니다.
            </TermDivSpan>
          </TermDiv>
          <TermDiv width={width}>
            <table
              width={width}
              cellPadding="0"
              cellPadding="0"
              style={{
                borderTop: "1px solid #000",
                borderLeft: "1px solid #000",
                alignItems: "center",
                marginBottom: parseInt(width / 320) + "px",
                borderSpacing: "0",
                width: parseInt(width / 1.23) + "px",
              }}
            >
              <tr style={{ alignItems: "center", textAlign: "center" }}>
                <Td style={{ width: "21%" }} width={width}>
                  구분
                </Td>
                <Td style={{ width: "39%" }} width={width}>
                  수집이용목적
                </Td>
                <Td style={{ width: "40%" }} width={width}>
                  수집이용항목
                </Td>
              </tr>
              <tr>
                <td
                  rowspan="3"
                  style={{
                    alignItems: "center",
                    fontFamily: "NanumSquareRegular",
                    textAlign: "center",
                    fontWeight: 400,
                    fontSize: parseInt((width * ratio) / 48) + "px",
                    padding: "3px 0px",
                    borderRight: "1px solid #000",
                    borderBottom: "1px solid #000",
                  }}
                >
                  회원
                </td>
                <Td width={width} style={{ textAlign: "center" }}>
                  서비스 이용
                </Td>
                <Td width={width}>
                  휴대폰번호, 아이디(이메일), 비밀번호, 위치정보(선택), 차종정보
                </Td>
              </tr>
              <tr>
                <Td width={width} style={{ textAlign: "center" }}>
                  이벤트 참여
                </Td>
                <Td width={width}>성명, 수령지주소, 휴대폰번호</Td>
              </tr>
              <tr>
                <Td width={width} style={{ textAlign: "center" }}>
                  서비스 이용 중 자동수집
                </Td>
                <Td width={width}>
                  쿠키, IP Address, 방문일시, 이용자의 사용 OS 및 브라우저 종류,
                  기기 고유번호, 검색어, 서비스 이용기록, 불량이용기록, 불만 및
                  분쟁처리 기록, 결제기록
                </Td>
              </tr>
            </table>

            <TermDiv width={width}>
              <TermDivTitle width={width}>가. 개인정보 수집 방법</TermDivTitle>
              <TermDivSpan width={width}>
                <ul style={{ paddingInlineStart: 3 }}>
                  <li style={{ listStyle: "none" }}>
                    <TermDivSpanSpan>1. </TermDivSpanSpan>
                    <TermDivSpanSpan>
                      서비스 이용, 이메일, 이벤트 참여, 고객센터 등
                    </TermDivSpanSpan>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <TermDivSpanSpan>2. </TermDivSpanSpan>
                    <TermDivSpanSpan>
                      회사는 서비스 제공에 필요한 최소한의 개인정보만을 수집하며
                      사용자의 소중한 인권을 침해할 우려가 있는 민감한
                      정보(인종, 종교, 사상, 정치적 성향 및 범죄기록, 의료정보
                      등)는 수집하지 않습니다. 만약 법력에서 정한 의무에 따라
                      불가피하게 수집하는 경우에는 반드시 사용자에게 사전 동의를
                      거치겠습니다. 다만, 해당정보는 사용자가 확인한 시점을
                      기준으로 한 정보이며, 사용자의 개인정보를 추가 수집하는
                      경우에는 반드시 사전에 사용자에게 해당 사실을 알리고
                      동의를 거치겠습니다.
                    </TermDivSpanSpan>
                  </li>
                </ul>
              </TermDivSpan>
            </TermDiv>

            <TermDiv width={width}>
              <TermDivTitle width={width}>
                2. 개인정보 수집 및 이용 목적
              </TermDivTitle>
              <TermDivSpan width={width}>
                <ul style={{ paddingInlineStart: 3 }}>
                  <li style={{ listStyle: "none" }}>
                    <TermDivSpanSpan> </TermDivSpanSpan>
                    <TermDivSpanSpan>
                      회사는 사용자의 개인정보를 다음과 같은 목적을 위해
                      이용합니다.
                    </TermDivSpanSpan>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <TermDivSpanSpan> </TermDivSpanSpan>
                    <TermDivSpanSpan>
                      - 기기의 고유한 번호로 사용자를 식별하고 불량 회원의
                      부정한 이용을 방지하기 위하여 사용합니다.
                    </TermDivSpanSpan>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <TermDivSpanSpan> </TermDivSpanSpan>
                    <TermDivSpanSpan>
                      - 사용자에게 회사의 다양한 서비스를 제공하고 서비스 이용
                      과정에서 사용자의 문의사항이나 불만을 처리하고 공지사항
                      등을 전달하기 위해 사용합니다.
                    </TermDivSpanSpan>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <TermDivSpanSpan> </TermDivSpanSpan>
                    <TermDivSpanSpan>
                      - 사용자와 약속한 서비스를 제공하고 유료 서비스 구매 및
                      이용이 이루어지는 경우 이에 따른 요금 정산을 위해
                      사용합니다.
                    </TermDivSpanSpan>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <TermDivSpanSpan> </TermDivSpanSpan>
                    <TermDivSpanSpan>
                      - 신규 서비스가 개발되거나 이벤트 행사 시 참여 기회를
                      알리기 위한 정보 전달 및 마케팅, 광고 등에도 사용됩니다.
                    </TermDivSpanSpan>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <TermDivSpanSpan> </TermDivSpanSpan>
                    <TermDivSpanSpan>
                      - 사용자의 이용패턴과 접속 빈도 북석 및 서비스 이용에 대한
                      통계 및 이를 통한 맞춤형 서비스 제공 및 서비스 개선에도
                      사용됩니다.
                    </TermDivSpanSpan>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <TermDivSpanSpan> </TermDivSpanSpan>
                    <TermDivSpanSpan>
                      - Google, Facbook 등 외부 애드서버 제휴업체에서 사용자나
                      유사 잠재고객에게 인터넷 탐색 시 방문하는 웹사이트에
                      광고를 개재하는 등의 적절한 광고메세지를 전달할 수
                      있습니다.
                    </TermDivSpanSpan>
                  </li>
                </ul>
              </TermDivSpan>
            </TermDiv>

            <TermDiv width={width}>
              <TermDivTitle width={width}>3. 개인정보 취급위탁</TermDivTitle>
              <TermDivSpan width={width}>
                <ul style={{ paddingInlineStart: 3 }}>
                  <li style={{ listStyle: "none" }}>
                    <TermDivSpanSpan></TermDivSpanSpan>
                    <TermDivSpanSpan>
                      회사는 이용자의 개인정보를 제1조에 명시한 목적 범위
                      안에서만 사용하며, 예외적으로 이용자의 명시적 동의가
                      있거나 법률의 특별한 규정이 있는 경우 및 이용자의 생명,
                      안전에 급박한 위험이 발생하여 이를 해소하기 위한 경우에
                      한하여 개인정보를 제3자에게 제공합니다.
                    </TermDivSpanSpan>
                  </li>
                </ul>
              </TermDivSpan>
            </TermDiv>
            <table
              width={width}
              cellPadding="0"
              cellPadding="0"
              style={{
                borderTop: "1px solid #000",
                borderLeft: "1px solid #000",
                alignItems: "center",
                marginBottom: parseInt(width / 320) + "px",
                borderSpacing: "0",
                width: parseInt(width / 1.23) + "px",
              }}
            >
              <tr style={{ alignItems: "center", textAlign: "center" }}>
                <Td style={{ width: "33%" }} width={width}>
                  위탁업무내용
                </Td>
                <Td style={{ width: "33%" }} width={width}>
                  수탁업체
                </Td>
                <Td style={{ width: "33%" }} width={width}>
                  개인정보의 보유 및 이용기간
                </Td>
              </tr>
              <tr>
                <Td width={width}>
                  휴대폰 문자 메시지(SMS, LMS, App Push) 발송 관련 서비스
                </Td>
                <Td width={width}>네이버클라우드 주식회사</Td>
                <td
                  rowspan="2"
                  style={{
                    alignItems: "center",
                    fontFamily: "NanumSquareRegular",
                    textAlign: "center",
                    fontWeight: 400,
                    fontSize: parseInt((width * ratio) / 48) + "px",
                    padding: "3px 0px",
                    borderRight: "1px solid #000",
                    borderBottom: "1px solid #000",
                  }}
                >
                  회원탈퇴 시 혹은 위탁계약 종료시까지
                </td>
              </tr>
              <tr>
                <Td width={width}>클라우드 컴퓨팅, DB보관 </Td>
                <Td width={width}>Amazon Web Services, inc</Td>
              </tr>
            </table>

            <TermDiv width={width}>
              <TermDivTitle width={width}>
                4. 개인정보 보유 및 이용기간
              </TermDivTitle>
              <TermDivSpan width={width}>
                <ul style={{ paddingInlineStart: 3 }}>
                  <li style={{ listStyle: "none" }}>
                    <TermDivSpanSpan></TermDivSpanSpan>
                    <TermDivSpanSpan>
                      회사는 사용자가 회원으로서 서비스를 이용하는 동안 사용자의
                      개인정보를 제한적으로 이용하고 있습니다. 사용자가
                      회원탈퇴를 요청한 경우나 개인정보의 수집 및 이용목적이
                      달성하거나 보유 및 이용기간이 종료한 경우 해당 사용자의
                      개인정보는 지체 없이 파기합니다. 단, 관계 법령의 규정에
                      따라 일정한 기간 동안 회원정보를 보관하며 자세한 내용을
                      아래와 같습니다.
                    </TermDivSpanSpan>
                  </li>
                </ul>
              </TermDivSpan>
            </TermDiv>
            <table
              width={width}
              cellPadding="0"
              cellPadding="0"
              style={{
                borderTop: "1px solid #000",
                borderLeft: "1px solid #000",
                alignItems: "center",
                marginBottom: parseInt(width / 320) + "px",
                borderSpacing: "0",
                width: parseInt(width / 1.23) + "px",
              }}
            >
              <tr style={{ alignItems: "center", textAlign: "center" }}>
                <Td style={{ width: "33%" }} width={width}>
                  보유 정보
                </Td>
                <Td style={{ width: "33%" }} width={width}>
                  보유 근거
                </Td>
                <Td style={{ width: "33%" }} width={width}>
                  보유 기간
                </Td>
              </tr>
              <tr>
                <Td width={width} style={{ textAlign: "center" }}>
                  부정이용기록 보유
                </Td>
                <Td width={width}>
                  회사 내부 방침에 의한 정보 보유(부정 이용방지)
                </Td>
                <Td width={width} style={{ textAlign: "center" }}>
                  1년
                </Td>
              </tr>
              <tr>
                <Td width={width}>계약 또는 청약철회에 관한 기록</Td>
                <Td width={width}>
                  전자상거래 등에서의 소비자 보호에 관한 법률
                </Td>
                <Td width={width} style={{ textAlign: "center" }}>
                  5년
                </Td>
              </tr>
              <tr>
                <Td width={width}>대금 결제 및 재화 등의 공급에 관한 기록</Td>
                <Td width={width}>
                  전자상거래 등에서의 소비자 보호에 관한 법률, 국세기본법,
                  법인세법, 부가가치세법
                </Td>
                <Td width={width} style={{ textAlign: "center" }}>
                  5년
                </Td>
              </tr>
              <tr>
                <Td width={width}>소비자의 불만 또는 분쟁처리에 관한 기록</Td>
                <Td width={width}>
                  전자상거래 등에서의 소비자 보호에 관한 법률
                </Td>
                <Td width={width} style={{ textAlign: "center" }}>
                  5년
                </Td>
              </tr>
              <tr>
                <Td width={width} style={{ textAlign: "center" }}>
                  표시/광고에 관한 기록
                </Td>
                <Td width={width}>
                  전자상거래 등에서의 소비자 보호에 관한 법률
                </Td>
                <Td width={width} style={{ textAlign: "center" }}>
                  6개월
                </Td>
              </tr>
              <tr>
                <Td width={width}>
                  신용정보의 수집, 처리 및 이용 등에 관한 기록
                </Td>
                <Td width={width}>신용정보의 이용 및 보호에 관한 법률</Td>
                <Td width={width} style={{ textAlign: "center" }}>
                  3년
                </Td>
              </tr>
              <tr>
                <Td width={width} style={{ textAlign: "center" }}>
                  전자금융에 관한 기록
                </Td>
                <Td width={width} style={{ textAlign: "center" }}>
                  전자금융거래법
                </Td>
                <Td width={width} style={{ textAlign: "center" }}>
                  3년
                </Td>
              </tr>
              <tr>
                <Td width={width}>사이트 방문(로그인 등)에 관한 기록</Td>
                <Td width={width} style={{ textAlign: "center" }}>
                  통신비밀보호법
                </Td>
                <Td width={width} style={{ textAlign: "center" }}>
                  3개월
                </Td>
              </tr>
            </table>

            <table
              width={width}
              cellPadding="0"
              cellPadding="0"
              style={{
                borderTop: "1px solid #000",
                borderLeft: "1px solid #000",
                alignItems: "center",
                marginBottom: parseInt(width / 320) + "px",
                borderSpacing: "0",
                width: parseInt(width / 1.23) + "px",
              }}
            >
              <tr style={{ alignItems: "center", textAlign: "center" }}>
                <Td style={{ width: "25%" }} width={width}>
                  제공 받는 대상자
                </Td>
                <Td style={{ width: "25%" }} width={width}>
                  제공목적
                </Td>
                <Td style={{ width: "25%" }} width={width}>
                  제공목적
                </Td>
                <Td style={{ width: "25%" }} width={width}>
                  보유 및 이용기간
                </Td>
              </tr>
              <tr>
                <Td width={width}>
                  튜닝업체, 회사의 상품 제공자 등 기타 자동차 튜닝 서비스를
                  제공하는 자
                </Td>
                <Td width={width}>자동차 튜닝 및 관리 서비스의 제공</Td>
                <Td width={width}>휴대폰 번호, 성명, 차종정보</Td>
                <Td width={width}>
                  서비스 목적 달성시까지(관계법령의 규정에 의하여 보존할 필요가
                  있는 경우 및 사전 동의를 얻은 경우 해당 보유 기간)
                </Td>
              </tr>
            </table>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>5. 개인정보 제 3자 제공</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    회사는 원칙적으로 사용자의 동의 없이 개인정보를 제3자에게
                    제공하지 않으며, 개인정보를 제3자에게 제공해야 하는 경우
                    법령에 따른 동의를 받고 있습니다. 다만 다음의 경우는 예외로
                    하고 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    - 사용자가 사전에 공개하거나 또는 제3자 제공에 동의한 경우
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    - 법원 등 국가기관이 법령에 근거하여 사용자의 개인정보를
                    제공하도록 강제한 경우
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>
          <TermDiv width={width}>
            <TermDivTitle width={width}>
              6. 개인정보 파기절차 및 방법
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    회사는 이용자의 개인정보의 수집 및 이용목적이 달성된 후에는
                    해당정보를 재생할 수 없는 기술적인 방법을 이용하여 완전하게
                    삭제하게 되고, 종이로 출력된 개인정보는 분쇄하거나 소각하여
                    지체 없이 파기합니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              7. 이용자 및 법정대리인의 권리·의무 행사 방법
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나
                    수정할 수 있으며 가입해지(동의철회)를 요청할 수도 있습니다.
                    이용자의 개인정보 조회, 수정을 위해서는 '개인정보변경'(또는
                    '회원정보수정' 등)을, 가입해지(동의철회)를 위해서는
                    ’회원탈퇴’를 클릭하여 본인 확인 절 차를 거치신 후 직접 열람,
                    정정 또는 탈퇴가 가능합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로
                    연락하시면 지체 없이 조치하겠습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는
                    정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지
                    않습니다. 또한 잘못된 개인정 보를 제3자에게 이미 제공한
                    경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이
                    이루어지도록 하겠습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는
                    삭제된 개인정보는 "개인정보 보유 및 이용기간"에 명시된 바에
                    따라 처리하고 그 외의 용도 로 열람 또는 이용할 수 없도록
                    처리하고 있습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              8. 개인정보 자동 수집 장치 설치 , 운영 및 거부에 관한 사항
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    회사는 서비스를 제공하기 위해서 이용자들의 정보를 저장하고
                    수시로 불러오는 쿠키를 사용합니다. 쿠키는 서비스를
                    운영하는데 이용되는 서버가 이용자의 컴퓨터 브라우저에게
                    보내는 소량의 정보이며 이용자들의 컴퓨터 하드디스크에
                    저장되기도 합니다. 따라서 이용자는 스스로가 쿠키의 설치 및
                    수집에 대해 자율적으로 선택할 수 있으므로 수집을 거부할 수
                    있습니다. 다만, 쿠키의 저장을 거부할 경우 로그인이 필요한
                    일부 서비스의 이용에 제한이 생길 수 있습니다.
                  </TermDivSpanSpan>
                </li>

                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan></TermDivSpanSpan>
                </li>

                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>쿠키 설정 거부 방법</TermDivSpanSpan>
                </li>

                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>Internet Explorer의 경우</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    - 웹 브라우저 상단의 “도구” 메뉴 > “인터넷 옵션” 메뉴 >
                    “개인정보” 탭 > 직접 설정
                  </TermDivSpanSpan>
                </li>

                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan></TermDivSpanSpan>
                </li>

                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>Chrome의 경우</TermDivSpanSpan>
                </li>

                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    - 웹 브라우저 우측 상단의 “아이콘” 선택 > “설정”선택 > 화면
                    하단의 “고급 설정 표시” 선택 >개인정보 섹션의 “콘텐츠 설정”
                    버튼 > 쿠키 섹션에서 직접 설정
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              9. 링크 사이트에 대한 책임
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    회사는 사용자에게 다른 웹사이트에 대한 링크를 제공할 수
                    있습니다. 다만, 링크되어 있는 웹사이트들이 개인정보를
                    수집하는 행위에 대해서는 본 "개인정보처리방침"이 적용되지
                    않습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              10. 개인정보의 기술적/관리적 보호 대책
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    회사는 사용자들의 개인정보를 취급함에 있어 개인정보가 분실,
                    도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여
                    다음과 같은 기술적/관리적 대책을 강구하고 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan></TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    - 개인정보 암호화 : 사용자의 주요 개인정보는 암호화하여 저장
                    및 관리되고 있으며, 개인정보의 확인 및 변경도 개인정보를
                    알고 있는 본인에 의해서만 가능합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    - 해킹 등에 대비한 대책 : 회사는 해킹이나 컴퓨터 바이러스
                    등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기
                    위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서
                    자료를 수시로 백업하고 있고, 최신 백신프로그램을 이용하여
                    사용자들의 개인정보나 자료가 누출되거나 손상되지 않도록
                    방지하고 있으며, 암호화통신 등을 통하여 네트워크상에서
                    개인정보를 안전하게 전송할 수 있도록 하고 있습니다. 그리고
                    침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고
                    있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든
                    기술적 장치를 갖추려 노력하고 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    - 취급 직원의 최소화 및 교육 : 회사의 개인정보관련 취급
                    직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를
                    부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시
                    교육을 통하여 개인정보처리방침의 준수를 항상 강조하고
                    있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    - 개인정보보호 전담기구의 운영 : 사내 개인정보보호 전담기구
                    등을 통하여 개인정보처리방침의 이행사항 및 담당자의
                    준수여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로
                    잡을 수 있도록 노력하고 있습니다. 단, 사용자 본인의 부주의나
                    인터넷상의 문제로 ID, 비밀번호 등 개인정보가 유출되어 발생한
                    문제에 대해 회사는 일체의 책임을 지지 않습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              11. 개인정보 관리 책임자 및 담당자
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
                    개인정보 처리 업무를 담당하는 개인정보 관리 책임자를
                    지정하고 있습니다.
                  </TermDivSpanSpan>
                </li>

                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan></TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>- 이름 : </TermDivSpanSpan>
                  <TermDivSpanSpan> 정승진</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>- 소속 : </TermDivSpanSpan>
                  <TermDivSpanSpan> 오토베이크</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>- 전화 :</TermDivSpanSpan>
                  <TermDivSpanSpan> 010-2765-5361</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>- 이메일 :</TermDivSpanSpan>
                  <TermDivSpanSpan> tc20@tuuning.co.kr</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    또한 개인정보가 침해되어 이에 대한 신고나 상담이 필요하신
                    경우에는 아래 기관에 문의하셔서 도움을 받으실 수 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan></TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    - 개인정보 보호 종합지원 포털(안전행정부 운영)
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    www.privacy.go.kr / 02-2100-3343
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    -개인정보 침해신고센터 (한국인터넷진흥원 운영)
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    privacy.kisa.or.kr / (국번없이) 118
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    - 개인정보보호지원센터 (한국정보화진흥원)
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    privacy.nia.or.kr / 02-2131-0111
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>12. 고지의 의무</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan></TermDivSpanSpan>
                  <TermDivSpanSpan>
                    회사는 위 내용에 대한 추가, 삭제 및 수정이 있을 경우에는
                    개정 최소 7일 전부터 각 서비스의 공지사항 등을 통해
                    사용자에게 설명 드리겠습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>
          <TermDiv width={width}>
            <TermDivTitle
              width={width}
              style={{ fontFamily: "NanumSquareRegular", fontWeight: "400" }}
            >
              -개인정보처리방침 시행일자 : 2021년 09월 01일
            </TermDivTitle>
          </TermDiv>
          <TermDiv width={width}>
            <TermDivTitle
              width={width}
              style={{ fontFamily: "NanumSquareRegular", fontWeight: "400" }}
            >
              -개인정보처리방침 변경공고일자 : 2021년 09월 01일
            </TermDivTitle>
          </TermDiv>
        </BottomTopBoxDiv>
      </BottomTopDiv>
      <BottomBottomDiv width={width}>
        <BottomBottomDivDiv width={width}>
          <BottomBottomDivText width={width} number={1}>
            오토베이크 | 대표이사 : 백준열 | 메일 : help@tuuning.co.kr{" "}
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
              개인정보처리방침
            </BottomBottomDivTextSpan>
            <BottomBottomDivTextSpan
              width={width}
              onClick={() => {
                window.open(
                  "http://www.ftc.go.kr/bizCommPop.do?wrkr_no=6370701722",
                  "_blank"
                );
              }}
            >
              사업자정보확인
            </BottomBottomDivTextSpan>
          </BottomBottomDivText>
        </BottomBottomDivDiv>
      </BottomBottomDiv>
    </EmptyDiv2>
  );
};

const Term2 = (props) => {
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
export default Term2;

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
  //height: ${(props) => parseInt(props.width / 0.546) + "px"};
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
////table
const TableDiv = styled.div`
  width: ${(props) => parseInt(props.width / 1.238) + "px"};
`;
const Table = styled.table`
  border: 1px solid #000;
  align-items: center;
  margin-bottom: ${(props) => parseInt(props.width / 320) + "px"};
`;
const Td = styled.td`
  font-family: "NanumSquareRegular";
  font-weight: 400;
  font-size: ${(props) => parseInt((props.width * ratio) / 48) + "px"};
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 3px 0px;
`;
