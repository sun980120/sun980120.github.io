import React, {useEffect, useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from "styled-components";
import Message from "./Message";


const FormContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px; // 폼의 최대 너비
  margin: 2rem auto;
  text-align: center;
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem; // 각 필드 사이의 간격
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  height: 100px; // 텍스트 영역의 높이
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function Contact() {
    const [state, handleSubmit] = useForm("xeqyvyyw");
    const [messageInfo, setMessageInfo] = useState({
        type: null, // 'success', 'error', 'warning' 중 하나
        text: ''
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    const showSuccess = () => {
        setMessageInfo({ type: 'success', text: '메일을 전송하였습니다.' });
        setTimeout(() => {
            hideMessage();
        }, 5000);
        clearForm();
    };

    // 메시지를 숨기는 함수
    const hideMessage = () => {
        setMessageInfo({ type: null, text: '' });
    };

    // 상태가 '성공'으로 변경될 때만 showSuccess 함수를 호출
    useEffect(() => {
        if (state.succeeded) {
            showSuccess();
        }
    }, [state.succeeded]);
    return (
        <FormContainer>
            <FormTitle>Send Email to Me</FormTitle>
            <Form onSubmit={handleSubmit}>
                <Message type={messageInfo.type} text={messageInfo.text}/>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="성함을 입력하세요"
                    required
                />
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일 주소를 입력하세요"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <Input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="전화번호를 입력하세요 (선택 가능)"
                    required
                />
                <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="메시지를 입력하세요 (선택 가능)"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <SubmitButton type="submit" disabled={state.submitting}>Submit</SubmitButton>
            </Form>
        </FormContainer>
    );
};

export default Contact;
