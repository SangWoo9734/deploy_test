import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          제발 배포해주세요
        </a>
        <p>캐싱이 되나요?</p>
        <p>캐싱이 아ㅏㄴ되는거 가튼뎅?</p>
        <p>찐막 테스트</p>
      </header>
    </div>
  );
}

export default App;
