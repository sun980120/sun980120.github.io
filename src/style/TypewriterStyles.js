import styled, { keyframes } from 'styled-components';

// 커서 깜빡임 효과
const blinkCaret = keyframes`
    50% { border-color: transparent; }
`;

export const TypewriterWrapper = styled.div`
    font-family: 'Courier New', Courier, monospace;
`;

export const StaticText = styled.span`
    color: black;
    font-weight: bold;
`;

export const DynamicText = styled.span`
  color: blue;
  overflow: hidden; // 타이핑 효과를 위한 overflow 설정
  border-right: 2px solid blue; // 커서 역할
  white-space: nowrap; // 줄바꿈 방지
  display: inline; // 인라인으로 설정해 '저는'과 연결
  text-decoration: underline; // 밑줄 스타일 추가
`;

export const Cursor = styled.span`
    display: inline-block;
    width: 10px; // 커서의 너비를 설정
    border-right: 2px solid blue;
    padding-left: 2px; // 커서와 텍스트 사이의 간격 조정
    margin-left: 2px; // 커서와 텍스트 사이의 간격 조정
    animation: ${blinkCaret} 1s steps(1) infinite;
`;