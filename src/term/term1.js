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
              이 약관은 투닝(이하 “회사”라 합니다)가 제공하는 투닝 사장님 사무실
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
                    “서비스”란 “회원”이 이용할 수 있는 투닝 사장님 사무실 관련
                    서비스를 의미합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “투닝”은 “회원”이 가게에 대한 상품을 노출하고,
                    전화/문자메시지 등을 이용해서 이용자로부터 예약을 받을 수
                    있도록 “회사”가 제공하는 인터넷 기반의 자동차 튜닝 작업 예약
                    중개 서비스를 말합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “투닝 사장님 사무실”이라 함은 “회사”가 “서비스”제공을 위하여
                    운영하는 인터넷 홈페이지를 의미합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”이라 함은 “서비스”에 접속하여 이 약관에 따라 “회사”와
                    이용계약을 체결하고 “회사”가 제공하는 “서비스”를 이용하는
                    고객을 말합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 5. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “ID”이라 함은 “회원”의 식별과 “서비스”이용을 위하여 “회원”이
                    정하고 “회사”가 승인하는 문자와 숫자의 조합을 의미합니다.
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
              </ul>
            </TermDivSpan>
          </TermDiv>
          <TermDiv width={width}>
            <TermDivTitle width={width}>
              제3조(약관 등의 명시와 개정)
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 이 약관의 내용을 “회원”이 쉽게 알 수 있도록 “투닝
                    사장님 사무실” 초기 화면에 게시합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 「전자상거래 등에서의 소비자보호에 관한 법률」,
                    「약관의 규제 등에 관한 법률」, 「전자문서 및
                    전자거래기본법」, 「전자서명법」,「정보통신망 이용촉진 및
                    정보보호 등에 관한 법률」, 「소비자기본법」 등 관련 법령을
                    위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”가 약관을 개정할 경우에는 적용일자 및 개정사유를
                    명시하여 현행약관과 함께 “투닝 사장님 사무실”의 초기화면에
                    그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만,
                    “회원”에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일
                    이상의 사전 유예기간을 두고 공지합니다. 이 경우 “회사”는
                    개정 전과 개정 후 내용을 “회원”이 알기 쉽도록 표시합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”이 제3항의 방법 등으로 “회사”가 별도로 고지한 약관
                    개정 공지 기간 내에 “회사”에 개정 약관에 동의하지 않는다는
                    반대의사를 표시하지 않고 “서비스”를 이용한 경우에는 약관에
                    동의한 것으로 간주합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 5. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”이 개정 약관의 적용에 명시적으로 동의하지 않는 경우
                    “회사”는 개정 약관의 내용을 적용할 수 없으며, 이 경우
                    “회원”은 이용계약을 해지할 수 있습니다. 다만, 기존 약관을
                    적용할 수 없는 특별한 사정이 있는 경우에는 “회사”는
                    이용계약을 해지할 수 있습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>
          <TermDiv width={width}>
            <TermDivTitle width={width}>
              제4조(서비스의 제공 및 변경)
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 다음과 같은 서비스를 제공합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ① </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    재화 또는 서비스 판매에 대한 광고플랫폼 서비스
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ② </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    재화 또는 서비스 판매에 대한 예약중개 및 튜닝작업중개 등
                    통신판매중개서비스
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ③ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    재화 또는 서비스 판매의 제공에 대한 판매 서비스
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ④ </TermDivSpanSpan>
                  <TermDivSpanSpan>기타 “회사”가 정하는 서비스</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 서비스 제공 및 운영과 관련한 회사 정책 변경 혹은
                    상당한 이유가 있는 경우 등에는 운영상, 기술상의 필요에 따라
                    제공하고 있는 “서비스”의 전부 또는 일부를 변경 또는 중단할
                    수 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “서비스”에 관한 변경 또는 중단이 있는 경우에는 변경 또는
                    중단될 “서비스”의 내용, 사유, 일자 등은 변경 또는 중단 전에
                    회사의 웹사이트 또는 “서비스”의 공지사항 등 “회원”이 충분히
                    인지할 수 있는 방법으로 사전에 공지합니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>
          <TermDiv width={width}>
            <TermDivTitle width={width}>
              제5조(서비스의 이용시간 및 중단)
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “서비스”의 이용은 특별한 사유가 없는 한 연중무휴 1일
                    24시간을 원칙으로 합니다. 다만,컴퓨터 등 정보통신설비의
                    보수점검, 교체 및 고장, 통신의 두절, 정기점검 등의 필요로
                    “회사”가 지정한 날 등의 경우에는 “서비스”를 일시적으로
                    중단할 수 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 “서비스”의 원활한 수행을 위하여 기간을 정하여
                    사전에 공지하고 “서비스”를 중지할 수 있으며, 다만 불가피하게
                    긴급한 조치를 하여야 하는 경우에는 사후 통지가 가능합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 불법프로그램의 제공 및 운영방해, 불법통신 및 해킹,
                    악성 프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을
                    위반한 경우에는 즉시 영구 이용정지를 할 수 있습니다. 본 항에
                    따른 영구이용정지 시 “서비스” 이용을 통해 획득한 혜택 등도
                    모두 소멸되며, “회사”는 이에 대해 별도로 보상하지 않습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              제6조(서비스 이용계약의 성립)
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    이용계약은 “회원”이 되고자 하는 자가 약관에 동의를 하고,
                    “회사”가 정한 가입 양식에 따라 회원정보를 입력하여
                    회원가입신청을 하고 “회사”가 이러한 신청에 대하여
                    승인함으로써 체결됩니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 다음 각 호에 해당하는 신청에 대하여 승인을 하지
                    않거나 사후에 이용계약을 해지할 수 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ① </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    가입을 신청한 자가 이 약관에 의하여 이전에 회원자격을 상실한
                    적이 있는 경우. 다만, 회원자격을 상실 후 4년이 경과한 자로서
                    “회사”의 회원재가입 승낙을 얻은 경우에는 예외로 함.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ② </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    실명이 아니거나 타인의 명의를 이용한 경우
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ③ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    회사가 실명확인절차를 실시할 경우에 이용자의 실명가입신청이
                    사실이 아님이 확인된 경우
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ④ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    등록내용에 허위정보 기재, 기재누락, 오기가 있는 경우
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑤ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    이미 가입된 회원과 전화번호, 전자우편주소가 동일한 경우
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑥ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    부정한 용도 또는 영리를 추구할 목적으로 본 서비스를 이용할
                    경우
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑦ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    만 14세 미만 아동이 가입한 것으로 확인된 경우
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑧ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    기타 이 약관에 위배되거나 위법 또는 부당한 이용신청임이
                    확인된 경우 및 회사가 합리적인 판단에 의하여 필요하다고
                    인정하는 경우
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    제1항에 따른 신청에 있어 “회사”는 “회원”에게 전문기관을 통한
                    실명확인 및 본인인증을 요청할 수 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 서비스관련설비의 여유가 없거나, 기술상 또는 업무상
                    문제가 있는 경우에는 승낙을 유보할 수 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 5. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”은 회원가입 시 등록한 사항에 변경이 있을 경우, 상당한
                    기간 내에 “회사”에 대하여 회원정보 수정 등의 방법으로 그
                    변경사항을 알려야 합니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>제7조(이용계약의 종료)</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    "회원"은 언제든지 고객센터(기타 팩스, 이메일 등의 방법도
                    포함) 또는 투닝 사장님 사무실을 통하여 이용계약 해지 신청을
                    할 수 있으며, "회사"는 관련법령 등이 정하는 바에 따라 이를
                    즉시 처리하여야 합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    "회원"이 계약을 해지할 경우, 관련법 및 개인정보취급방침에
                    따라 "회사"가 회원정보를 보유하는 경우를 제외하고는 해지
                    즉시 "회원"의 모든 데이터는 소멸되며 이는 복구할 수
                    없습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    "회원"이 계약을 해지하는 경우, "회원"을 식별할 수 있는
                    프로필 사진 등과 같이 본인계정에 등록된 내용 일체는
                    삭제됩니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 “회원”이 이용계약 또는 이 약관상의 의무를 위반하는
                    경우 7일 이상의 기간을 정하여 위반 사항의 시정을 최고한 후,
                    회원의 시정이 이루어지지 않을 경우 이용계약을 해지할 수
                    있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 5. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 “회원”이 다음 각 호의 사유에 해당하는 경우
                    이용계약을 즉시 해지할 수 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ① </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”에게 서비스 이용계약을 지속할 수 없는 사유가 발생하고,
                    회원에 대해서 해당 사유를 통보한 날로부터 30일이 경과한 경우
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ② </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”이 파산신청, 회사정리절차, 기업회생절차 신정, 해산,
                    영업취소, 영업정지, 강제집행, (가)압류, (가)처분, 체납처분
                    등 정상적인 영업활동을 할 수 없게 된 경우
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>제8조(“회원”의 의무)</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    이용자는 관계법령 및 “회사”서비스에 관하여 다음과 같은
                    행위를 하여서는 안되며, 기타 “회사” 업무에 방해되는 행위를
                    하여서는 안됩니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ① </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    서비스 신청 또는 변경시 허위 내용의 등록
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ② </TermDivSpanSpan>
                  <TermDivSpanSpan>타인의 정보 도용</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ③ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사” 또는 제3자의 저작권 등 지적재산권에 대한 침해
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ④ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신
                    또는 게시
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑤</TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사” 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는
                    행위
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑥ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    자신의 계정과 비밀번호를 제3자에게 양도하거나 대여하는 등의
                    행위
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑦ </TermDivSpanSpan>
                  <TermDivSpanSpan>타인의 정보 도용</TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑧ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에
                    반하는 정보를 “서비스”에 공개 또는 게시하는 행위
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑨ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    포인트 또는 쿠폰을 부정하게 적립하거나 양도하거나 사용하는
                    등의 행위
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑩ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    고객센터 상담 내용이 욕설, 폭언, 성희롱 등에 해당하는 행위
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑪ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    정당한 사유 없이 “회사”의 영업을 방해하는 내용을 기재하는
                    행위
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑫ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    리버스엔지니어링, 디컴파일, 디스어셈블 및 기타 일체의
                    가공행위를 통하여 서비스를 복제, 분해 또 모방 기타 변형하는
                    행위
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑬ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    자동 접속 프로그램 등을 사용하는 등 정상적인 용법과 다른
                    방법으로 서비스를 이용하여 회사의 서버에 부하를 일으켜,
                    회사의 정상적인 서비스를 방해하는 행위
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑭ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”의 서비스 제공 목적과 부합하지 않는 목적으로 서비스를
                    이용하여 “회사”의 서버, DB 등 정보처리차원을 소모하게 하는
                    행위
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ⑮ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”의 사전 동의 없이 ID, 패스워드를 제3자에게 양도 또는
                    대여하거나 제3자로부터 양도 또는 대여받아 사용하는 행위
                    &#9327; 저작권법, 형법, 정보통신망 이용촉진 및 정보보호 등에
                    관한 법률, 전산망 보급 확장과 이용촉진에 관한 법률,
                    전기통신사업법 등 통신망, 서버, 소프트웨어 등의 이용과
                    관련한 법령을 위반하는 행위
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              제9조(회원의 ID 및 비밀번호에 대한 의무)
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    ID와 비밀번호에 관한 관리책임은 “회원”에게 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는
                    안됩니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”이 자신의 ID 및 비밀번호를 도난당하거나 제3자가
                    사용하고 있음을 인지한 경우에는 바로 “회사”에 통보하고
                    “회사”의 안내가 있는 경우에는 그에 따라야 합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”이 제3항에 따른 통지를 하지 않거나 “회사”의 조치에
                    따르지 않아 발생하는 모든 불이익에 대한 책임은 “회원”에게
                    있습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              제10조(회원의 게시물의 관리)
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”의 “게시물”이 정보통신망법 및 저작권법 등 관련법에
                    위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에
                    따라 해당 “게시물”의 게시중단 및 삭제 등을 요청할 수 있으며,
                    “회사”는 관련법에 따라 조치를 취하여야 합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 전항에 따른 권리자의 요청이 없는 경우라도
                    권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및
                    관련법에 위반되는 경우에는 관련법에 따라 해당 “게시물”에
                    대해 임시조치 등을 취할 수 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    본 조에 따른 세부절차는 정보통신망법 및 저작권법이 규정한
                    범위 내에서 “회사”가 정한 게시중단 요청서비스에 따릅니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>
          <TermDiv width={width}>
            <TermDivTitle width={width}>제11조(이용제한 등)</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 “회원”가 이 약관의 의무를 위반하거나 “서비스”의
                    정상적인 운영을 방해한 경우, 주의, 경고, 일시정지,
                    영구이용정지, 계약해지 등의 (삭제)조치를 즉시 취할 수
                    있으며, “회원”는 법적책임을 부담합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 “주민등록법”을 위반한 명의도용 및 결제도용,
                    전화번호 도용, “저작권법”(삭제)을 위반한 불법프로그램의 제공
                    및 운영방해, “정보통신망 이용촉진 및 정보보호 등에 관한
                    법률”을 위반한 불법 통신 및 해킹, 악성프로그램의 배포,
                    접속권한 초과행위, “여신전문금융업법”을 위반한 “회원”의
                    신용카드 부정거래 등 이와 유사한 형태의 부정행위 등과 같이
                    관련법을 위반한 경우에는 주의, 경고, 일시정지, 영구이용정지,
                    계약해지 등의 조치를 즉시 취할 수 있으며, “회원”은
                    법적책임을 부담할 수 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 “회원”이 계속해서 1년 이상 로그인하지 않는 경우,
                    회원정보의 보호 및 운영의 효율성을 위해 이용을 제한할 수
                    있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    본 조의 이용제한 범위 내에서 제한의 조건 및 세부내용은
                    “회사”의 이용제한정책에서 정하는 바에 의합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 5. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    본 조에 따라 서비스 이용을 제한하거나 계약을 해지하는
                    경우에는 회사는 제13조[회원에 대한 통지]에 따라 통지합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 6. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”은 본 조에 따른 이용제한 등에 대해 “회사”가 정한
                    절차에 따라 이의신청을 할 수 있습니다. 이 때 이의가
                    정당하다고 “회사”가 인정하는 경우 “회사”는 즉시 서비스의
                    이용을 재개합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 7. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    본 조에 따라 이용제한이 되는 경우 서비스 이용을 통해 획득한
                    혜택 등도 모두 이용중단, 또는 소멸되며, “회사”는 이에 대해
                    별도로 보상하지 않습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              제12조(권리의 귀속 및 이용제한)
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”이 “투닝 사장님 사무실”에 게시한 “게시물”에 저작물이
                    포함되어 있는 경우 해당 저작물의 저작권은 원저작권자에게
                    귀속됩니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”은 “투닝 사장님 사무실”에 게시한 “게시물”이 타인의
                    저작권 등 권리를 침해하지 않도록 주의하여야 하고, 제 3 자가
                    “게시물”이 자신의 권리를 침해한다며 분쟁을 제기하는 경우
                    “회원”은 본인의 책임과 비용으로 해당 분쟁을 해결하며
                    “회사”를 면책하여야 합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”이 “투닝 사장님 사무실”에 게시하는 “게시물”은 “서비스”
                    및 관련 프로모션 등에 노출될 수 있으며, 해당 노출을 위해
                    필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수
                    있습니다. 이 경우, “회사”는 저작권법 규정을 준수하며,
                    “회원”은 언제든지 고객센터 또는 “서비스” 내 관리기능을 통해
                    해당 게시물에 대해 삭제, 비공개 등의 조치를 취할 수
                    있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 제 3 항 이외의 방법으로 “회원”의 “게시물”을
                    이용하고자 하는 경우에는 전화, 전자우편 등을 통해 사전에
                    “회원”의 동의를 얻어야 합니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>제13조(회원에 대한 통지)</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”가 “회원”에 대한 통지를 하는 경우, “회원”이 가입신청시
                    “회사”에 제출한 전자우편 주소나 휴대전화번호 등으로 할 수
                    있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 불특정다수 “회원”에 대한 통지의 경우, 1주일 이상
                    사이트에 게시함으로써 개별 통지에 갈음할 수 있습니다. 다만
                    회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에
                    대하여는 제1항에서 규정한 방법으로 개별 통지를 합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”은 “회사”에 실제로 연락이 가능한 전자우편,
                    (휴대)전화번호 등의 정보를 제공하고 해당 정보들을 최신으로
                    유지하여야 하며 “회사”의 통지를 확인하여야 합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    회원정보가 변경되었음에도 해당 사항을 수정하지 않음으로써
                    발생한 각종 손해와 잘못된 수정으로 인하여 발생한 손해는 당해
                    회원이 부담하여야 하며, 회사는 이에 대하여 아무런 책임을
                    지지 않습니다
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>제14조(회사의 의무)</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 법령과 이 약관이 금지하거나 공서양속에 반하는
                    행위를 하지 않으며, 이 약관이 정하는 바에 따라 지속적이고,
                    안정적으로 서비스를 제공하기 위하여 최선을 다하여
                    노력합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”는 “회원”이 안전하게 “서비스”를 이용할 수 있도록
                    “회원”의 개인정보(신용정보 포함) 보호를 위한 보안 시스템을
                    갖추어야 합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 이외에 관계 법령이 정한 의무사항을 준수합니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              제15조(개별 서비스에 대한 약관 및 이용조건)
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”는 개별 서비스와 관련한 별도의 약관 및 이용정책을 둘
                    수 있으며, 개별서비스에서 별도로 적용되는 약관에 대한 동의는
                    “회원”이 개별서비스를 최초로 이용할 경우 별도의 동의절차를
                    거치게 됩니다. 이 경우 개별 서비스에 대한 이용약관 등이 본
                    약관에 우선합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    전항에도 불구하고 “회사”는 개별 서비스에 대한 이용정책에
                    대해서는 “서비스”를 통해 공지할 수 있으며, “이용자”는
                    이용정책을 숙지하고 준수하여야 합니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>제16조(개인정보보호)</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”는 “회원”의 개인정보를 보호하기 위하여 정보통신망법 및
                    개인정보 보호법 등 관계법령에서 정하는 바를 준수합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”는 “회원”의 개인정보를 보호하기 위한
                    개인정보처리방침을 수립하여 서비스 초기하면에 게시합니다.
                    다만, 개인정보처리방침의 구체적 내용은 연결화면을 통하여 볼
                    수 있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 관련법령 및 개인정보처리방침에 따라 “회원”의
                    개인정보를 최대한 보호하기 위하여 노력합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”의 공식 사이트 이외의 링크된 사이트에서는 “회사”의
                    개인정보처리방침이 적용되지 않습니다. 링크된 사이트 및
                    구매상품이나 서비스를 제공하는 제3자의 개인정보 취급과
                    관련하여는 해당 사이트 및 해당 제3자의 개인정보처리방침을
                    확인할 책임이 “회원”에게 있으며, “회사”는 이에 대하여 책임을
                    부담하지 않습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>제17조(예약 및 결제)</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “서비스”에 대한 매매계약은 “회원”이 “고객”에게 제시한 상품의
                    판매 조건에 응하여 청약의 의사표시를 하고 이에 대하여
                    “회원”이 승낙의 의사표시를 함으로써 “회원”과 “고객”간에
                    체결됩니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”가 “회원”등 제3자에게 이용자의 개인정보를 제공할
                    필요가 있는 경우 가) 개인정보를 제공받는 자, 나) 개인정보를
                    제공받는 자의 개인정보 이용목적, 다) 제공하는 개인정보의
                    항목, 라) 개인정보를 제공받는 자의 개인정보 보유 및
                    이용기간을 구매자에게 알리고 동의를 받습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”가 제3자에게 구매자의 개인정보를 처리할 수 있도록
                    업무를 위탁하는 경우에는 가)개인정보 처리위탁을 받는 자,
                    나)개인정보 처리위탁을 하는 업무의 내용을 구매자에게 알리고
                    동의를 받습니다. 다만, &#8988;정보통신망 이용촉진 및
                    정보보호 등에 관한 법률&#8991;에서 정하고 있는 방법으로
                    개인정보 처리방침을 통해 알림으로써 동의절차를 갈음할 수
                    있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “고객”이 “회원”에게 전화를 통해 직접 주문을 하는 경우,
                    “회사”는 주문내역 및 취소, 환불, 거래정보 등에 대해
                    관여하거나, 이에 대한 일체의 책임을 부담하지 않습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>제18조(취소, 환불)</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “서비스”에 대한 취소 및 환불 규정은 전자상거래 등에서의
                    소비자보호에 관한 법률 등 관련 법령을 준수합니다. 또한,
                    예약완료 후에 튜닝작업이 시작된 이후에는 “회원”에게 회복할
                    수 없는 손해가 발생하므로 단순변심에 의한 청약철회 등은 할
                    수 없습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사” 및 “회원”은 별도의 취소 및 환불 관련 규정을 정할 수
                    있으며, 이 경우 별도 계약 및 이용조건상의 취소 및 환불
                    규정이 우선 적용됩니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 3. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 “고객”이 본 조에 따라 튜닝작업에 대한 예약에 대해
                    청약철회를 하고 “회원”의 승인이 있는 경우 또는 예약 신청한
                    상품이 제품 수급 부족 등의 사유로 “회원”의 서비스를 제공을
                    할 수 없음을 인지한 경우 지체없이 그 사유를 “고객”에게
                    통지하고, 예약내역을 취소하거나 대금을 받은 경우에는 환급에
                    필요한 조치를 취합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 4. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    취소와 환불은 “회원”과 확인 후 처리 하게 되며, 신용카드결제
                    및 핸드폰결제는 신용카드사 및 이동통신사의 환불기준에
                    의거하여 처리가 완료되는데 시일이 소요될 수 있습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>제19조(책임제한)</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> 1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”는 다음의 사항에 대해서는 책임을 지지 않습니다. 단,
                    “회사” 및 “회사”의 임직원, 대리인의 고의 또는 중대한 과실이
                    인정되는 경우에는 그러지 아니합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ① </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”는 “회원”와 “고객”간의 상품거래를 중개하는
                    플랫폼서비스만을 제공할 뿐, “회원”가 고객에게 제공하는
                    서비스에 대한 정보, 하자 등에 대한 책임은 “회원”에게
                    있습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> ② </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 “회원”이 게재한 정보, 자료, 사실의 신뢰도, 정확성
                    등 내용에 관해서는 책임을 지지 않습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>③ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”는 천재지변 또는 이에 준하는 불가항력으로 인하여 “투닝
                    사장님 사무실”서비스를 제공할 수 없는 경우에는 서비스 제공에
                    관한 책임이 면제됩니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>④ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”는 “회원”의 귀책사유로 인한 “서비스” 이용의 장애에
                    대하여는 책임을 지지 않습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>⑤ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”는 “회원” 및 “고객”이 게재한 이용후기, 리뷰, 사진 등
                    정보/자료/사실의 신뢰도, 정확성에 대해서는 책임을 지지
                    않습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>⑥ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”는 제3자가 서비스 내 화면 또는 링크된 웹사이트를
                    통하여 광고한 제품 또는 서비스의 내용과 품질에 대하여 감시할
                    의무 기타 어떠한 책임도 지지 아니합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>⑦ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”는 “회원”이 서비스를 이용하여 기대하는 수익을 상실한
                    것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은
                    자료로 인한 손해에 관하여 책임을 지지 않습니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>⑧ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사”는 “회원”간 또는 “회원”과 제3자 상호간에 서비스를
                    매개로 하여 거래 등을 한 경우에는 책임이 면제됩니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “회사” 및 “회사”의 임직원 그리고 대리인은 고의 또는 과실이
                    없는 한 다음과 같은 사항으로부터 발생하는 손해에 대해 책임을
                    지지 아니합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>① </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    회원 정보의 허위 또는 부정확성에 기인하는 손해
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>② </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    {" "}
                    “플랫폼”에 대한 접속 및 이용과정에서 “회원”의 귀책사유로
                    발생하는 손해
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>③ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    서버에 대한 제3자의 모든 불법적인 접속 또는 서버의 불법적인
                    이용으로부터 발생하는 손해 및 제3자의 불법적인 행위를
                    방지하거나 예방하는 과정에서 발생하는 손해
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>④ </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    제3자가 서비스를 이용하는 불법적으로 전송, 유포하거나 또는
                    전송, 유포되도록 한 모든 바이러스, 스파이웨어 및 기타 악성
                    프로그램으로 인한 손해
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>제20조(분쟁해결)</TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “서비스”는 “고객”을 위하여 “회원”과 “고객” 사이에서
                    중재역할을 합니다. 또한, “서비스”는 “회원”이 제기하는 정당한
                    의견이나 불만을 반영하고 처리하기 위한 인력 및 설비를 갖추고
                    운영합니다. “서비스”은 “회원”으로부터 제출되는 의견 및
                    불만사항의 신속한 처리가 곤란한 경우에는 “회원”에게 그
                    사유와 처리일정을 통보해야 합니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>

          <TermDiv width={width}>
            <TermDivTitle width={width}>
              제21조(권리, 의무의 양도금지)
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan> </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회원”은 “회사”의 사전 서면동의 없이 이 약관상의 권리 또는
                    의무의 전부 또는 일부를 제3자에게 양도, 이전, 증여하거나
                    이를 담보로 제공할 수 없습니다.
                  </TermDivSpanSpan>
                </li>
              </ul>
            </TermDivSpan>
          </TermDiv>
          <TermDiv width={width}>
            <TermDivTitle width={width}>
              제22조(준거법 및 관할법원)
            </TermDivTitle>
            <TermDivSpan width={width}>
              <ul style={{ paddingInlineStart: 3 }}>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>1. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “회사”와 “이용자”간에 발생한 분쟁에 관한 소송은 민사소송법에
                    의한 관할법원에 제소합니다.
                  </TermDivSpanSpan>
                </li>
                <li style={{ listStyle: "none" }}>
                  <TermDivSpanSpan>2. </TermDivSpanSpan>
                  <TermDivSpanSpan>
                    “플랫폼”과 “이용자” 간에 제기된 분쟁에 대하여는 대한민국의
                    법을 적용합니다.
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
              이 약관은 2021년 09월 01일부터 시행됩니다.
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
            주소 :광주광역시 서구 상무대로 799, 국제빌딩 3층 | 전화 :
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
  //height: ${(props) => parseInt(props.width / 0.86) + "px"};
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
