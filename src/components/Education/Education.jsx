// components/Education.js
import React from 'react';
import styled from 'styled-components';
import { FaLandmark, FaSchool } from 'react-icons/fa'; // 이 아이콘은 예시이며 적절한 아이콘으로 교체해주세요.

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

const EducationContainer = styled.div`
  border-left: 2px solid #000;
  position: relative;
  margin-left: 20px;
`;

const EducationItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 40px;
  &:before {
    content: '';
    position: absolute;
    left: -30px;
    top: 0;
    height: 100%;
    width: 20px;
    background-color: #e9ecef;
    z-index: -1;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  left: -60px;
  top: 0;
  color: #007bff;
  font-size: 1.5rem;
`;

const SchoolName = styled.h3`
  font-size: 1.25rem;
  color: #007bff;
`;

const Degree = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;

const Education = () => {
    return (
        <Section>
            <Container>
                <SectionHeading>Education</SectionHeading>
                <EducationContainer>
                    <EducationItem>
                        <IconWrapper><FaLandmark /></IconWrapper>
                        <SchoolName>호서대학교</SchoolName>
                        <Degree>컴퓨터 공학 전공, 2017.03 - 2023.02</Degree>
                        <Description>UIT-LAB 연구실 활동과 현장실습을 통해 함께 일하는 법을 배웠습니다. 알고리즘 및 서버 개발을 4년간 탄탄히 쌓아 빠르고 올바른 방향으로 성장할 수 있는 개발자가 되었습니다.</Description>
                    </EducationItem>
                    <hr/>
                    <EducationItem>
                        <IconWrapper><FaSchool /></IconWrapper>
                        <SchoolName>천안 업성고등학교</SchoolName>
                        <Degree>인문계열, 2014.03 - 2017.02</Degree>
                        <Description>고등학교 시절 프로그래밍 코딩에 매력을 느껴 충남정보올림피아드 프로그래밍 부문의 대회에 참여하여 은상, 동상을 수여받았으며, 이로인해 개발자의 꿈을 가지게 되었습니다.</Description>
                    </EducationItem>
                </EducationContainer>
            </Container>
        </Section>
    );
};

export default Education;
