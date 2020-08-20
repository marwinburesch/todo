import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: ${(props) => (props.complete ? "#06D6A0" : "#EF476F")};
`;

export default function Todo({ todo }) {
  return <Container key={todo.id}>{todo.title}</Container>;
}
