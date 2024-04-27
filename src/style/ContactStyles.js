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

export const ContactContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  animation: ${fadeIn} 1.5s ease-out;
`;

// export const ContactInfo = styled.p`
//   margin: 10px 0;
//   font-size: 18px;
//   &:hover {
//     color: #0077b6; // 호버 시 색상 변경
//     cursor: pointer;
//   }
// `;

// export const SocialLink = styled.a`
//   margin: 0 10px;
//   color: #666;
//   transition: color 0.3s ease;
//
//   &:hover {
//     color: #0077b6; // 호버 시 색상 변경
//   }
// `;

export const ContactInfo = styled.p`
  margin: 10px 0;
  transition: color 0.3s ease;
  &:hover {
    color: #0077b6;
  }
`;

export const SocialLink = styled.a`
  margin: 0 10px;
  transition: color 0.3s ease;
  &:hover {
    color: #0077b6;
  }
`;
