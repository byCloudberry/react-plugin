import styled from "styled-components";

export const AccordionDiv = styled.div``;

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: white;
  color: #444;
  cursor: pointer;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
`;

export const AccordionTitle = styled.p`
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  font-family: "Quicksand-Regular";
`;

export const AccordionContent = styled.div`
  background-color: white;
  overflow: hidden;
  font-size: 14px;
  font-family: "Quicksand-Regular";
  padding-top: 20px;
  transition: max-height 0.6s ease;
`;
