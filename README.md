# React Config

## 설정

#### 프로젝트 만들기

```CMD
npm init
npm i typescript
npm i react react-dom
npm i @types/react @types/react-dom
npm i -D prettier eslint eslint-plugin-prettier eslint-config-prettier
```

#### webpack 관련 설치

```CMD
npm i -D webpack@5.43 webpack-dev-server@3.11 webpack-cli@4.7.2 @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/preset-typescript @types/webpack @types/webpack-dev-server@3.11 ts-node
```

##### What is Babel?

```
바벨은 자바스크립트 es6 문법을 es5로 변환해주는 트렌스파일러(transpiler) 입니다.
이것을 통해 React를 일반 브라우저에서 실행시킬 수 있습니다.
babel 공식 사이트에서 간단하게 es6 문법으로 변환된 자바스크립트 코드를 확인할 수 있습니다.
```

#### css 모듈 설치

```CMD
npm i style-loader css-loader
```

#### react 리로드

```CMD
npm i @pmmmwh/react-refresh-webpack-plugin@0.4.3 react-refresh
```

#### 타입에 맞게 정확히 작성되었는지 check

```CMD
npm i -D fork-ts-checker-webpack-plugin@6.2.12
```

#### 개발 관련

```CMD
npm i react-router react-router-dom cross-env swr axios @emotion/react @emotion/styled
npm i -D @types/react-router-dom
```
