import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useToDoDispatch } from "../../reducers/ToDoContext";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.status &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.status &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, status, text }) {
  const dispatch = useToDoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });
  return (
    <TodoItemBlock>
      <CheckCircle status={status} onClick={onToggle}>
        {status && <MdDone />}
      </CheckCircle>
      <Text status={status}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
