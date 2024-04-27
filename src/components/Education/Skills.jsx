import React, {useEffect, useRef, useState} from 'react';
import styled, { keyframes, css } from 'styled-components';


const Section = styled.section`
  background-color: #fff;
  padding: 5rem 1rem;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;


const SectionHeading = styled.h2`
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 2rem;
  text-align: left;
`;
const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const fillUp = percentage => keyframes`
  from { width: 0; }
  to { width: ${percentage}%; }
`;
const SkillsWrapper = styled.div`
  max-width: 960px; // 원하는 컨테이너의 최대 너비를 설정
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // 각 스킬 카드의 최소 너비를 300px로 설정
  gap: 20px; // 스킬 카드 사이의 간격
`;
const SkillContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const SkillName = styled.span`
    font-size: 1rem;
    width: 100px;
`;

const SkillBarOuter = styled.div`
    background: #e1e1e1;
    flex-grow: 1;
    height: 10px;
    border-radius: 5px;
    margin: 0 10px;
    overflow: hidden;
`;


const SkillBarInner = styled.div`
        background: #007bff;
        height: 100%;
        border-radius: 5px;
        width: 0; // 초기 너비를 0으로 설정
        animation: ${(props) => props.isAnimated ? css`${fillUp(props.percentage)} 2s ease-in-out forwards` : 'none'};
    `;
const Percentage = styled.span`
    font-size: 1rem;
    animation: ${(props) => props.isAnimated ? css`${fadeIn} 1s ease-in-out 2s forwards` : 'none'};

    opacity: 0;
`;

const skills = [
    { name: 'ReactJS', percentage: 70 },
    { name: 'NodeJS', percentage: 85 },
    { name: 'Spring Boot', percentage: 80 },
    { name: 'Javascript', percentage: 90 },
    { name: 'Typescript', percentage: 70 },
    { name: 'Java', percentage: 85 },
    { name: 'C++', percentage: 60 },
    { name: 'MariaDB', percentage: 90 },
    { name: 'MySQL', percentage: 90 },
    { name: 'Git', percentage: 85 },
    { name: 'AWS', percentage: 50 },
    { name: 'Jira', percentage: 60 },
];

const Skills = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const skillsRef = useRef(null); // skills 섹션을 참조하기 위한 ref

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsAnimated(true); // 뷰포트에 들어오면 애니메이션 상태를 true로 설정
                    observer.disconnect(); // 애니메이션 시작 후 observer를 끊어 성능 향상
                }
            },
            {
                root: null, // 뷰포트를 root로 설정
                rootMargin: '0px',
                threshold: 0.1 // 타겟 요소의 10%가 보이면 콜백 실행
            }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current); // skillsRef를 관찰 대상으로 추가
        }

        return () => {
            observer.disconnect(); // 컴포넌트 언마운트 시 observer 해제
        };
    }, []);
    return (
        <Section ref={skillsRef}>
            <SectionHeading>Skills</SectionHeading>
            <SkillsWrapper>
                {skills.map(skill => (
                    <SkillContainer key={skill.name}>
                        <SkillName>{skill.name}</SkillName>
                        <SkillBarOuter>
                            <SkillBarInner percentage={skill.percentage} isAnimated={isAnimated}/>
                        </SkillBarOuter>
                        <Percentage isAnimated={isAnimated}>{skill.percentage}%</Percentage>
                    </SkillContainer>
                ))}
            </SkillsWrapper>
        </Section>

    );
};

export default Skills;
