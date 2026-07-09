import React from 'react';
import HeadLine from '../UI/HeadLine';
import HashTag from '../UI/HashTag';

const Project = ({ title, period, description, tasks, tags }) => {
  return (
    <>
      <span className='font-semibold text-left pt-3 first:pt-0'>{title}</span>
      {period && <span className='text-left text-sm pb-1'>{period}</span>}
      {description && (
        <p className='text-left text-sm break-keep pb-1'>{description}</p>
      )}
      {tasks && (
        <ul>
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      )}
      {tags && (
        <div className='flex flex-wrap justify-start gap-x-2 gap-y-2 pb-3'>
          {tags.map((tag) => (
            <HashTag key={tag}>{tag}</HashTag>
          ))}
        </div>
      )}
    </>
  );
};

const Company = ({ name, role, period, children }) => {
  return (
    <>
      <div className='flex flex-col justify-center space-y-1 md:flex-row md:justify-start pb-8'>
        <div className='inner-left-box '>
          <span className='font-semibold text-[1.25rem]'>{name}</span>
          <span className='text-sm text-gray-500'>{role}</span>
          <span className='text-sm text-gray-500'>{period}</span>
        </div>
        <div className='inner-right-box'>{children}</div>
      </div>
      <div className='border-b-[0.1rem] border-dotted border-gray-200 mx-2 mb-6' />
    </>
  );
};

const Experience = () => {
  return (
    <section className='flex flex-col'>
      <HeadLine>Experience</HeadLine>
      <Company
        name='퓨즈'
        role='IT개발팀 대리 / 프리랜서'
        period='2025.11 - 현재'
      >
        <Project
          title='한화생명보험 운영 업무'
          tasks={[
            '보험시스템 가입설계 파트 운영',
            '개정 상품 개발',
            'AI Agent용 가입설계 업무 API 개발',
          ]}
          tags={[
            'Java18',
            'Spring Boot',
            'Oracle',
            'React',
            'Next.js',
            'TypeScript',
          ]}
        />
      </Company>

      <Company
        name='팬택씨앤아이'
        role='플랫폼개발팀 책임매니저 / 정규직'
        period='2023.02 - 2025.10'
      >
        <Project
          title='상시 업무'
          tasks={[
            '전체 계열사 그룹웨어 및 홈페이지 운영',
            '내부 인사시스템 운영',
          ]}
        />
        <Project
          title='인사시스템 모바일앱 고도화'
          period='2024.03 - 2024.12'
          description='모바일 사용환경 개선을 위해 네이티브앱 웹뷰 방식의 하이브리드 앱 개발'
          tags={['React18', 'Next.js15', 'Java17', 'Oracle19', 'AWS']}
        />
        <Project
          title='계열사 내부 인사시스템 확산'
          period='2023.11 - 2025.10'
          description='6개 계열사 대상으로 기존 인사시스템에서 프리즘(내부 인사시스템)으로 전환'
          tags={['Nexacro14', 'Java8', 'Oracle19', 'AWS']}
        />
        <Project
          title='오픈 소스 기반 피싱 메일 모의 훈련 시스템 구축'
          period='2023.05 - 2023.06'
          description='계열사 구성원들에게 악성 스팸 메일의 경각심을 갖도록 교육하기 위한 피싱 훈련 시스템 구축'
          tags={['goPhish']}
        />
        <Project
          title='계열사 그룹웨어 통합'
          period='2023.02 - 2023.10'
          description='이원화된 계열사 그룹웨어 통합을 위한 각 사 요구사항 분석 및 기능 설계'
        />
      </Company>

      <Company
        name='타이호인스트'
        role='IT개발팀 대리 / 프리랜서'
        period='2021.12 - 2022.12'
      >
        <Project
          title='푸본현대생명 STT/TA 시스템 개발/운영'
          period='2022.10 - 2022.12'
          description='TM센터에서 유선으로 진행하는 청약건의 녹취파일을 분석하여 항목별로 점수화하고 심사 업무에 활용하는 시스템'
          tasks={[
            'STT와 관련된 배치 서비스 개발',
            '사내 타시스템 기능 연계를 위한 API 개발',
          ]}
          tags={['JavaScript', 'jQuery', 'Java', 'Spring', 'MySQL', 'MariaDB']}
        />
        <Project
          title='푸본현대생명 GA WEB청약 시스템 개발/운영'
          period='2021.12 - 2022.12'
          description='설계사 및 고객 등록부터 가입 설계, 청약 확정, 초회 보험료 입금처리까지 이루어지는 시스템'
          tasks={[
            '사내 타시스템 SSO 연동 기능 구현',
            '"청약 확정" 함수 중복 호출로 인해 약 2분 소요되던 상세 정보 조회를 30초 이내로 성능 개선',
            '메인 페이지를 사용자 경험 중심의 디자인으로 리뉴얼하여 일 평균 접속자 수 증가에 기여',
          ]}
          tags={['JavaScript', 'jQuery', 'Nexacro', 'Java', 'Spring']}
        />
      </Company>

      <Company
        name='포엠에스'
        role='SI사업본부 사원 / 정규직'
        period='2019.08 - 2021.11'
      >
        <Project
          title='농협 금융지주 연결결산 시스템 재구축'
          period='2021.05 - 2021.10'
          description='재무제표 조회, 수기/패턴 전표 관리, 연결정산표 생성 관리, 결산자료 관리, 연결조정 검증 관리 구현'
          tags={['JavaScript', 'jQuery', 'Frontend']}
        />
        <Project
          title='농협 목우촌 차세대 전산시스템 구축(회계 파트)'
          period='2020.08 - 2021.04'
          description='지급/회수회의서 관리, 자금 관리, 입출금 조회/정산, 법인카드 사용현황 조회, 재무제표 보정 후 조회 구현'
          tags={['Nexacro', 'Java', 'eGov', 'Oracle']}
        />
        <Project
          title='LG전자 RPA 프로세스 구축'
          period='2020.04 - 2020.08'
          description='재고 확인, 배송 현황 확인 등 반복 업무를 자동화하는 프로세스 구현'
          tags={['UiPath', 'RPA Developer Advanced Certificate']}
        />
        <Project
          title='농협 NH멤버스 앱 고도화'
          period='2020.01 - 2020.03'
          description='웹 접근성 표준 적용 지원'
          tags={['Frontend']}
        />
        <Project
          title='농축협 우선출자 시스템 재구축'
          period='2019.08 - 2019.12'
          description='회원 정보 관리, 집계 내역, 소각 현황 등 다수의 조회 페이지 구현'
          tags={['JavaScript', 'jQuery', 'Frontend']}
        />
      </Company>
    </section>
  );
};

export default Experience;
