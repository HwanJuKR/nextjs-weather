# 🌤️ 미니 날씨 위젯

이 프로젝트는 **Next.js 15**와 **TypeScript**로 제작한 실시간 날씨 정보 위젯입니다.  
사용자의 현재 위치를 자동으로 감지하여 실시간 날씨 정보를 표시하며,  
아름다운 그라디언트 UI와 반응형 디자인으로 날씨 정보를 편리하게 확인할 수 있습니다.
가벼운 사이드 프로젝트로 만들어보았습니다.

---

## 🛠 사용된 기술 스택

- **Next.js**: 15.5.6 - React 기반 풀스택 프레임워크
- **React**: 19.1.0 - UI 라이브러리
- **TypeScript**: ^5 - 정적 타입을 지원하는 JavaScript
- **Tailwind CSS**: ^4 - 유틸리티 우선 CSS 프레임워크
- **OpenWeather API** - 실시간 날씨 정보 제공 API

---

## ✨ 주요 기능

1. **위치 자동 감지** - Geolocation API를 활용한 사용자 현재 위치 자동 감지
2. **실시간 날씨 정보** - 온도, 날씨 상태, 습도, 풍속, 기압 등 상세 정보 표시
3. **그라디언트 UI** - 아름다운 그라디언트 디자인으로 시각적 효과 제공
4. **반응형 디자인** - 다양한 디바이스에서 최적화된 화면 제공

---

## 🚀 설치 및 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/HwanJuKR/nextjs-weather.git
cd nextjs-weather
```

### 2. OpenWeather API 키 발급

[OpenWeather](https://openweathermap.org/api)에서 무료 API 키를 발급받으세요.

### 3. 환경 변수 설정

`.env.local` 파일을 열고 API 키를 입력하세요:

```bash
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

### 4. 의존성 설치

```bash
npm install
```

### 5. 개발 서버 실행

```bash
npm run dev
```
애플리케이션은 http://localhost:3000 에서 확인할 수 있습니다.

---

## 📁 디렉토리 구조

```
nextjs-weather/
├── src/                        # 소스 코드
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 메인 페이지
│   │   ├── layout.tsx         # 레이아웃
│   │   ├── globals.css        # 전역 스타일
│   │   └── favicon.ico        # 파비콘
│   ├── components/             # UI 컴포넌트
│   │   └── WeatherCard.tsx    # 날씨 카드 컴포넌트
│   ├── hooks/                  # 커스텀 훅
│   │   └── useWeather.ts      # 날씨 데이터 훅
│   └── types/                  # TypeScript 타입 정의
│       └── weather.ts         # 날씨 관련 타입
├── .env.local                  # 환경 변수
├── .gitignore                  # Git 무시 파일
├── eslint.config.mjs           # ESLint 설정 파일
├── next.config.ts              # Next.js 설정 파일
├── package.json                # 프로젝트 설정 파일
├── package-lock.json           # 의존성 잠금 파일
├── postcss.config.mjs          # PostCSS 설정 파일
├── tsconfig.json               # TypeScript 설정 파일
└── README.md                   # 프로젝트 설명 파일
```

---

## 🎯 주요 특징

### 위치 기반 날씨 정보
- Geolocation API를 활용한 사용자 위치 자동 감지
- 실시간 날씨 데이터 제공

### 스타일링
- Tailwind CSS를 활용한 유틸리티 우선 스타일링
- 그라디언트 기반 아름다운 UI 디자인
- 반응형 디자인으로 다양한 디바이스 지원

---

## 📝 참고사항

- 브라우저에서 위치 정보 접근을 허용해야 합니다.
- API 요청 제한이 있을 수 있으니 OpenWeather의 무료 플랜 제한을 확인하세요.
- HTTPS 환경에서 Geolocation API가 더 안정적으로 작동합니다.
- 새 API 키는 활성화되는 데 최대 2시간이 걸릴 수 있습니다.

---

감사합니다 :)
