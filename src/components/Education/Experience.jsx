// components/WorkExperience.js
import React from 'react';
import styled from 'styled-components';
import { FaCity, FaLandmark } from 'react-icons/fa'; // 사용하고 있는 아이콘 팩에 따라 변경하세요.

const ExperienceSection = styled.section`

    background-color: #fff;
    padding: 5rem 1rem;
`;
const SectionHeading = styled.h2`
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 2rem;
  text-align: left;
`;
const ExperienceContainer = styled.div`
    max-width: 960px;
    margin: auto;
    background: white;
`;

const JobTitle = styled.h3`
    font-size: 1.75rem;
    color: #007bff;
    margin-bottom: 10px;
`;

const CompanyName = styled.h4`
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 10px;
`;

const JobDuration = styled.p`
    color: #6c757d;
    margin-bottom: 20px;
`;

const JobDescription = styled.p`
    margin-bottom: 10px;
`;

const SkillsList = styled.ul`
    margin-top: 10px;
    margin-bottom: 20px;
`;

const SkillItem = styled.li`
  display: inline-block;
  background: #e9ecef;
  padding: 5px 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #495057;
`;

const RoleTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  color: #343a40;
  margin-top: 20px;
`;

const Duties = styled.ul`
  list-style-type: square;
  margin-left: 20px;
  color: #495057;
`;

const DutyItem = styled.li`
  margin-bottom: 5px;
`;

const Experience = () => {
    return (
        <ExperienceSection>
            <SectionHeading>Experience</SectionHeading>
            <ExperienceContainer>
                <FaCity size={30} color="#007bff"/>
                <JobTitle>BackEnd Developer & DevOps</JobTitle>
                <CompanyName>주식회사 인트인</CompanyName>
                <JobDuration>2022.09 - Present</JobDuration>
                <JobDescription>
                    SBOM 시스템 구축, 정자분석기 알고리즘 고도화, Multi-DTx 서버 개발 및 인프라 구축, 정자분석기 서버 개발 및 인프라 구축, 삼성생명 TheHealth X 인트인
                    콜라보, 통합관리자웹
                </JobDescription>

                <RoleTitle>기술 스택</RoleTitle>
                <SkillsList>
                    <SkillItem>ReactJS</SkillItem>
                    <SkillItem>NodeJS</SkillItem>
                    <SkillItem>Spring Boot</SkillItem>
                    <SkillItem>Javascript</SkillItem>
                    <SkillItem>Typescript</SkillItem>
                    <SkillItem>Java</SkillItem>
                    <SkillItem>C++</SkillItem>
                    <SkillItem>MariaDB</SkillItem>
                    <SkillItem>MySQL</SkillItem>
                    <SkillItem>Git</SkillItem>
                    <SkillItem>GitLab</SkillItem>
                    <SkillItem>Gitea</SkillItem>
                    <SkillItem>Wrike</SkillItem>
                    <SkillItem>Jira</SkillItem>
                    <SkillItem>Confluence</SkillItem>
                    <SkillItem>Bitbucket</SkillItem>
                    <SkillItem>AWS EC2</SkillItem>
                    <SkillItem>AWS VPC</SkillItem>
                    <SkillItem>AWS RDS</SkillItem>
                    <SkillItem>AWS EC2</SkillItem>
                    <SkillItem>AWS S3 static hosting</SkillItem>
                </SkillsList>

                <RoleTitle>주요 업무</RoleTitle>
                <Duties>
                    <DutyItem>React + Javascript 기반 웹 서비스 개발 & 운영</DutyItem>
                    <DutyItem>Spring Boot + Java 기반 서버 서비스 개발 & 운영</DutyItem>
                    <DutyItem>AWS 서버 인프라 구축</DutyItem>
                    <DutyItem>CI/CD 구축</DutyItem>
                    <DutyItem>SRS & SDS 문서 작성 및 유지보수</DutyItem>
                </Duties>
            </ExperienceContainer>
            <hr/>
            <ExperienceContainer>
                <FaLandmark size={30} color="#007bff"/>
                <JobTitle>BackEnd Developer</JobTitle>
                <CompanyName>UIT-LAB</CompanyName>
                <JobDuration>2021.01 - 2022.05</JobDuration>
                <JobDescription>
                    호서대 HCIC 연구센터, 해양 IT 융합 기술 연구소
                </JobDescription>

                <RoleTitle>기술 스택</RoleTitle>
                <SkillsList>
                    <SkillItem>NodeJS</SkillItem>
                    <SkillItem>Javascript</SkillItem>
                    <SkillItem>MySQL</SkillItem>
                    <SkillItem>Git</SkillItem>
                    <SkillItem>Github</SkillItem>
                </SkillsList>

                <RoleTitle>주요 업무</RoleTitle>
                <Duties>
                    <DutyItem>NodeJS + Javascript 기반 서버 서비스 개발 & 운영</DutyItem>
                    <DutyItem>연구자료 및 연혁 관리 서비스</DutyItem>
                </Duties>
            </ExperienceContainer>
            <hr/>
            <ExperienceContainer>
                <FaLandmark size={30} color="#007bff"/>
                <JobTitle>BackEnd Developer</JobTitle>
                <CompanyName>UCK</CompanyName>
                <JobDuration>2021.07 - 2021.12</JobDuration>
                <JobDescription>
                    HUB
                </JobDescription>

                <RoleTitle>기술 스택</RoleTitle>
                <SkillsList>
                    <SkillItem>NodeJS</SkillItem>
                    <SkillItem>ReactJS</SkillItem>
                    <SkillItem>Javascript</SkillItem>
                    <SkillItem>MySQL</SkillItem>
                    <SkillItem>Git</SkillItem>
                    <SkillItem>GitLab</SkillItem>
                    <SkillItem>Notion</SkillItem>
                    <SkillItem>Firebase</SkillItem>
                </SkillsList>

                <RoleTitle>주요 업무</RoleTitle>
                <Duties>
                    <DutyItem>NodeJS + Javascript 기반 서버 서비스 개발 & 운영</DutyItem>
                    <DutyItem>ReactJS + Javascript 기반 관리자웹 Firebase 개발 & 운영</DutyItem>
                </Duties>
            </ExperienceContainer>
        </ExperienceSection>
    );
};

export default Experience;