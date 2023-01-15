import React from 'react';
import HeadLine from '../UI/HeadLine';
import HashTag from '../UI/HashTag';

const Experience = () => {
  return (
    <section className='flex flex-col'>
      <HeadLine>Experience</HeadLine>
      <div className='flex flex-col justify-center space-y-1 md:flex-row md:justify-start pb-8'>
        <div className='inner-left-box '>
          <span className='font-semibold text-[1.25rem]'>푸본현대생명</span>
          <span className='text-sm text-gray-500'>웹 개발자(프리랜서)</span>
          <span className='text-sm text-gray-500'>2021.12 - 2022.12</span>
        </div>
        <div className='inner-right-box'>
          <span className='font-semibold text-left'>
            GA 웹 청약 시스템 개발/운영
          </span>
          <span className='text-left text-sm pb-1'>2021.12 - 2022.12</span>
          <ul>
            <li>사내 타시스템 SSO 연동 기능 구현</li>
            <li>
              "청약 확정" 함수 중복 호출로 인해 대상 목록의 상세 정보 조회까지
              약 2분 소요되었던 문제를 중복 제거 및 로직 변경하여 30초 이내로
              성능 개선
            </li>
            <li>
              메인 페이지를 사용자 경험 중심의 디자인으로 리뉴얼하여 일 평균
              접속자 수 증가에 기여
            </li>
          </ul>
          <div className='flex flex-wrap justify-start gap-x-2 gap-y-2 pb-3'>
            <HashTag>Javascript</HashTag>
            <HashTag>jQuery</HashTag>
            <HashTag>Nexacro</HashTag>
            <HashTag>Java</HashTag>
            <HashTag>Spring</HashTag>
          </div>
          <span className='font-semibold text-left pt-3'>
            STT/TA 시스템 개발/운영
          </span>
          <span className='text-left text-sm pb-1'>2022.10 - 2022.12</span>
          <ul>
            <li>STT와 관련된 배치 서비스 개발</li>
            <li>사내 타시스템 기능 연계를 위한 API 개발</li>
          </ul>
          <div className='flex flex-wrap justify-start gap-x-2 gap-y-2'>
            <HashTag>Javascript</HashTag>
            <HashTag>jQuery</HashTag>
            <HashTag>Java</HashTag>
            <HashTag>Spring</HashTag>
          </div>
        </div>
      </div>
      <div className='border-b-[0.1rem] border-dotted border-gray-200 mx-2 mb-6' />
      <div className='flex flex-col justify-center space-y-1 md:flex-row md:justify-start pb-8'>
        <div className='inner-left-box'>
          <span className='font-semibold text-[1.25rem]'>(주)포엠에스</span>
          <span className='text-sm text-gray-500'>웹 개발자</span>
          <span className='text-sm text-gray-500'>2019.08 - 2021.11</span>
        </div>
        <div className='inner-right-box'>
          <span className='font-semibold text-left'>
            농협 금융지주 연결결산 시스템 재구축
          </span>
          <span className='text-left text-sm'>프론트엔드</span>
          <span className='text-left text-sm pb-2'>2021.05 - 2021.10</span>
          <ul>
            <li>"재무제표 조회" 구현</li>
            <li>"수기/패턴 전표 관리" 구현</li>
            <li>"연결정산표 생성 관리" 구현</li>
            <li>"결산자료 관리(시산표, 사채발행내역, 리스발행내역 등)" 구현</li>
            <li>"연결조정 검증 관리" 구현</li>
          </ul>
          <div className='flex flex-wrap justify-start gap-x-2 gap-y-2'>
            <HashTag>Javascript</HashTag>
            <HashTag>jQuery</HashTag>
          </div>
          <span className='font-semibold text-left pt-3'>
            농협 목우촌 차세대 전산시스템 구축(회계팀)
          </span>
          <span className='text-left text-sm pb-1'>2020.08 - 2021.04</span>
          <ul>
            <li>"지급/회수회의서 관리" 구현</li>
            <li>
              {'자금 관리(계획등록 > 일일자금신청 > 자금지급/CMS전송)'} 구현
            </li>
            <li>"입출금 조회/정산" 구현</li>
            <li>"법인카드 사용현황 조회" 구현</li>
            <li>"재무제표 보정 후 조회" 구현</li>
          </ul>
          <div className='flex flex-wrap justify-start gap-x-2 gap-y-2'>
            <HashTag>Nexacro</HashTag>
            <HashTag>Java</HashTag>
            <HashTag>eGov</HashTag>
            <HashTag>Oracle</HashTag>
          </div>
          <span className='font-semibold text-left pt-3'>
            LG전자 RPA 프로세스 구축
          </span>
          <span className='text-left text-sm pb-1'>2020.04 - 2020.08</span>
          <ul>
            <li>
              재고 확인, 배송 현황 확인 등 업무에서 반복되는 단순 작업을
              자동화하는 프로세스 구현
            </li>
          </ul>
          <div className='flex flex-wrap justify-start gap-x-2 gap-y-2'>
            <HashTag>RPA</HashTag>
          </div>
          <span className='font-semibold text-left pt-3'>
            농협 NH멤버스 앱 고도화
          </span>
          <span className='text-left text-sm pb-1'>프론트엔드</span>
          <span className='text-left text-sm pb-1'>2020.01 - 2020.03</span>
          <ul>
            <li>웹 접근성 표준 적용 지원</li>
          </ul>
          <span className='font-semibold text-left pt-3'>
            농축협 우선출자 시스템 재구축
          </span>
          <span className='text-left text-sm pb-1'>프론트엔드</span>
          <span className='text-left text-sm pb-1'>2019.08 - 2019.12</span>
          <ul>
            <li>"회원 정보 관리" 구현</li>
            <li>집계 내역, 소각 현황 등 다수의 조회 페이지 구현</li>
          </ul>
          <div className='flex flex-wrap justify-start gap-x-2 gap-y-2'>
            <HashTag>Javascript</HashTag>
            <HashTag>jQuery</HashTag>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
