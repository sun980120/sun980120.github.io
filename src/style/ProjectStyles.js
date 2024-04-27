// import styled from 'styled-components';
//
// export const ProjectsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   padding: 20px;
//   gap: 20px; // 프로젝트 카드 사이의 간격
// `;
//
// export const ProjectCard = styled.div`
//   width: 300px; // 카드의 너비
//   border: 1px solid #ddd;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
// `;
//
// export const ProjectImage = styled.img`
//   width: 100%;
//   height: 200px; // 이미지 높이
//   object-fit: cover; // 이미지가 카드를 잘 채우도록 조정
// `;
//
// export const ProjectInfo = styled.div`
//   padding: 15px;
// `;
//
// export const ProjectTitle = styled.h3`
//   margin-top: 0;
// `;
//
// export const ProjectDescription = styled.p`
//   font-size: 14px;
// `;
//
// export const ProjectLink = styled.a`
//   display: inline-block;
//   margin-top: 10px;
//   color: #0077b6;
//   text-decoration: none;
//
//   &:hover {
//     text-decoration: underline;
//   }
// `;

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

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

// export const ProjectCard = styled.div`
//   width: 300px;
//   border: 1px solid #ddd;
//   border-radius: 10px;
//   overflow: hidden;
//   transition: transform 0.3s ease;
//   animation: ${fadeIn} 1s ease-out;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectInfo = styled.div`
  padding: 15px;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
`;

export const ProjectDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #0077b6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectCard = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.12), 0 4px 5px rgba(0,0,0,0.2);
  }
`;
