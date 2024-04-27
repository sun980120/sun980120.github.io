import React from 'react'
import { Section, SectionTitle } from '../style/HomeStyles';
import Contact from "../components/Contact";
import About from "../components/About";
import EducationPage from "./EducationPage";
import SideProject from "../components/SideProject";



function Home() {
    return (
        <div>
            <Section id="home-section">
                {/*<Introduction />*/}
            </Section>
            <Section id="about-section">
                {/*<SectionTitle>About Me</SectionTitle>*/}
                <About />
            </Section>
            <Section id="education-section">
                {/*<SectionTitle>About Me</SectionTitle>*/}
                <EducationPage />
            </Section>
            <Section id="sub-projects-section">
                {/*<SectionTitle>About Me</SectionTitle>*/}
                <SideProject />
            </Section>
            {/*<Section id="projects-section">*/}
            {/*    <SectionTitle>프로젝트</SectionTitle>*/}
            {/*    <Projects />*/}
            {/*</Section>*/}
            {/*<Section id="skills">*/}
            {/*    <SectionTitle>기술 스택</SectionTitle>*/}
            {/*    <Skills />*/}
            {/*</Section>*/}
            <Section id="contact-section">
                <SectionTitle>연락처</SectionTitle>
                <Contact />
            </Section>
        </div>
    );
    // return (
    //     <HomeContainer>
    //       <ProfileImage src="profile-image-url-here" alt="Profile" />
    //       <h1>안녕하세요, 저는 [이름]입니다.</h1>
    //       <Introduction>
    //         서버 개발자로서 [경력 년수]년의 경험을 가지고 있으며, [기술/프로젝트]에 관심이 많습니다.
    //       </Introduction>
    //       <h2>기술 스택</h2>
    //       <SkillsContainer>
    //         <Skill>Node.js</Skill>
    //         <Skill>Express</Skill>
    //         <Skill>GraphQL</Skill>
    //         {/* 추가 기술 스택 */}
    //       </SkillsContainer>
    //     </HomeContainer>
    //   );
}

export default Home
