import styled from 'styled-components';

export const RegisterFormEl = styled.form`
  display: block;
  width: 400px;

  margin: 0 auto;
  margin-top: 220px;
`;

export const RegisterFormInput = styled.input`
  display: block;
  width: 100%;

  padding: 10px 0 10px 8px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
  opacity: 0.8;
  outline: none;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const RegisterFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 18px;
  margin: 0 auto;

  transition: scale 300ms;

  border: 1px solid grey;
  border-radius: 4px;

  &:hover,
  focus {
    scale: 1.05;
  }
`;
