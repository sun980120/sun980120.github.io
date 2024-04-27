import styled, { keyframes } from 'styled-components';

// 페이드인 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const IntroTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

export const IntroText = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export const IntroContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  animation: ${fadeIn} 2s ease-out;
`;

// const typing = keyframes`
//   from { width: 0 }
//   to { width: 100% }
// `;
//
// const blinkCaret = keyframes`
//   50% { border-color: transparent }
// `;

// export const Typewriter = styled.h1`
//   font-family: 'Courier New', Courier, monospace;
//   overflow: hidden; /* Ensures the content is not revealed until the animation */
//   border-right: .15em solid orange; /* The typwriter cursor */
//   white-space: nowrap; /* Keeps the content on a single line */
//   margin: 0 auto; /* Centers the content */
//   letter-spacing: .15em; /* Adjust as needed */
//   animation: ${typing} 3.5s steps(40, end) 1s forwards, ${blinkCaret} .75s step-end infinite;
// `;