import styled from "styled-components";
import React, {useState} from "react";

const ProjectContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
`;

const ProjectContent = styled.div`
  flex: 1; /* 내용이 차지할 수 있는 모든 공간을 차지하게 함 */
`;
const ProjectPeriod = styled.p`
    color: #555;
    font-weight: bold;
`;

const ProjectTitle = styled.h3`
    color: #333;
    margin: 0.5rem 0;
`;

const CompanyName = styled.h4`
    color: #777;
    margin: 0;
`;

const Role = styled.p`
    color: #555;
    margin: 0.5rem 0;
`;

const TechStack = styled.p`
    color: #555;
    font-weight: bold;
`;

const KeyTech = styled.p`
  color: #555;
`;
// const MoreButton = styled.button`
//     border: none;
//     background: none;
//     cursor: pointer;
//     padding: 0.5rem;
//     font-size: 1.5rem;
//     line-height: 1;
//     color: #333;
//     position: absolute;
//     top: 0.5rem;
//     right: 0.5rem;
// `;
const MoreButton = styled.button`
    margin-left: 20px; /* 내용과 버튼 사이의 공간 */
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    display: flex; /* 버튼 안의 '...' 아이콘을 가운데 정렬하기 위함 */
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */
    height: 40px; /* 버튼의 높이 */
    //width: 40px; /* 버튼의 너비 */
`;
const ImageModal = styled.div`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    z-index: 1000; // z-index를 높게 설정하여 다른 요소 위에 표시
`;

const ModalContent = styled.div`
    background: #fff;
    //padding: 20px;
    border-radius: 8px;
    max-width: 80%; // 모달의 최대 너비를 화면 너비의 80%로 설정
    max-height: 80vh; // 모달의 최대 높이를 화면 높이의 80%로 설정
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    position: relative;
`;

const ModalImage = styled.img`
  max-width: 100%; // 이미지의 최대 너비를 모달의 너비에 맞춤
  max-height: 100%; // 이미지의 최대 높이를 모달의 높이에 맞춤
  display: block; // 이미지가 원래 크기보다 작을 때 중앙에 배치
  margin: 0 auto; // 이미지가 원래 크기보다 작을 때 중앙에 배치
    border-radius: 8px;
`;
const Project = ({period, title, company, role, techStack, keyTech, imageUrl}) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <ProjectContainer>
            <ProjectContent>
                <ProjectPeriod>{period}</ProjectPeriod>
                <ProjectTitle>{title}</ProjectTitle>
                <CompanyName>{company}</CompanyName>
                <Role>{role}</Role>
                <TechStack>{techStack}</TechStack>
                <KeyTech>{keyTech}</KeyTech>
            </ProjectContent>
            {imageUrl && (
                <MoreButton onClick={() => setModalOpen(true)}>이미지 보기</MoreButton>
            )}
            <ImageModal isOpen={modalOpen} onClick={() => setModalOpen(false)}>
                <ModalContent onClick={e => e.stopPropagation()}>
                    <ModalImage src={imageUrl} alt="Project Image" />
                </ModalContent>
            </ImageModal>
        </ProjectContainer>
    );
};

export default Project;