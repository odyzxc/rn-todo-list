import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FC } from "react";
import { Alert, Text } from "react-native";
import { useDispatch } from "react-redux";
import { TodoItem } from "../../../types";
import { removeTodo } from "../todoSlice";
import { ItemView, RemoveButton } from "./styled";

type Props = {
  todoItem: TodoItem;
};
const TodoListItem: FC<Props> = ({ todoItem }) => {
  const dispatch = useDispatch();
  const createConfirmation = () =>
    Alert.alert(
      "Are you sure?",
      "Removing todo cannot be rolled back!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(removeTodo(todoItem.id)) },
      ],
      { cancelable: true }
    );
  return (
    <ItemView>
      <Text>{todoItem.text}</Text>
      <FontAwesomeIcon icon={faMugSaucer} />
      <RemoveButton color="#000000" onPress={createConfirmation} title="X" />
    </ItemView>
  );
};

export default TodoListItem;
