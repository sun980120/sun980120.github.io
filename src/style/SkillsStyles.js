import styled, { keyframes } from 'styled-components';

// 페이드인 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

// export const SkillCard = styled.div`
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 10px;
//   text-align: center;
//   transition: transform 0.3s ease;
//   animation: ${fadeIn} 1s ease-out;
//   &:hover {
//     transform: scale(1.1);
//   }
// `;

export const SkillName = styled.h3`
  margin: 0;
`;

export const SkillCard = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  animation: ${fadeIn} 1s ease-out forwards;
  opacity: 0;
`;
