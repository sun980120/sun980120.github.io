// components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const SidebarContainer = styled.nav`
    flex: 0 0 200px;
    padding: 2rem;
    height: 100vh; // 뷰포트 높이에 맞춤
    position: sticky;
    top: 70px; // 상단에서부터의 거리
    z-index: 10; // 다른 콘텐츠 위에 표시되도록 z-index 설정
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 0.5rem 0;
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &.active {
    color: #fff;
    background-color: #007bff;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarLink to="education-section" spy={true} smooth={true} duration={500} activeClass="active">Education</SidebarLink>
            <SidebarLink to="experience-section" spy={true} smooth={true} duration={500} activeClass="active">Experience</SidebarLink>
            <SidebarLink to="skills-section" spy={true} smooth={true} duration={500} activeClass="active">Skills</SidebarLink>
            <SidebarLink to="projects-section" spy={true} smooth={true} duration={500} activeClass="active">Projects</SidebarLink>
        </SidebarContainer>
    );
};

export default Sidebar;
