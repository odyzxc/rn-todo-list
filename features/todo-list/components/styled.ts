import styled from "styled-components/native";

export const CreateTodoInput = styled.TextInput`
  height: 50px;
  margin: 15px 0;
  border-width: 2px;
  padding: 10px;
`;

export const CreateTodoForm = styled.View`
  margin: 10px 15px 25px;
`;

export const ListView = styled.ScrollView`
  padding: 5px 5px;
`;

export const ItemView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px;
`;

export const ItemActions = styled.View`
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
  align-items: center;
`;
