// components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem;
  background-color: #e9ecef;
  color: #495057;
`;

const AboutContent = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  flex: 1.4;
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoHeading = styled.h2`
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const InfoItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;

  & > span {
    font-weight: bold;
  }
`;

const ResumeLink = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const About = () => {
    return (
        <AboutContainer>
            <AboutContent>
                <ImageContainer>
                    <Image src={process.env.PUBLIC_URL + '/woosung.jpg'} alt="About Me" />
                </ImageContainer>
                <InfoContainer>
                    <InfoHeading>About Me</InfoHeading>
                    <InfoText>
                        언제 어디서나 도전하는 2년차 개발자 홍우성입니다.
                    </InfoText>
                    <InfoList>
                        <InfoItem><span>Name:</span> 홍우성</InfoItem>
                        <InfoItem><span>Address:</span> 천안시 서북구 불당동</InfoItem>
                        <InfoItem><span>Email:</span> woosung9801@naver.com</InfoItem>
                        <InfoItem><span>Phone:</span> +82-10-4143-1174</InfoItem>
                    </InfoList>
                    <ResumeLink href="https://drive.google.com/file/d/1H-2PAvIma9NomEYJbpoLNnqwNlJbB_jv/view?usp=sharing" target="_blank">이력서 다운받기</ResumeLink>
                </InfoContainer>
            </AboutContent>
        </AboutContainer>
    );
};

export default About;
