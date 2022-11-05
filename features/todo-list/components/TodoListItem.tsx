import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FC } from "react";
import { Alert, Pressable, Switch, Text } from "react-native";
import { useDispatch } from "react-redux";
import { TodoItem } from "../../../types";
import { removeTodo, toggleTodo } from "../todoSlice";
import { ItemActions, ItemView } from "./styled";

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
  const toggleSwitch = () => {
    dispatch(toggleTodo(todoItem.id));
  };
  return (
    <ItemView>
      <Text>{todoItem.text}</Text>
      <ItemActions>
        <Switch
          trackColor={{ false: "gray", true: "black" }}
          thumbColor="#f4f3f4"
          onValueChange={toggleSwitch}
          value={todoItem.checked}
        />
        <Pressable onPress={createConfirmation}>
          <FontAwesomeIcon size={20} icon={faTrash} />
        </Pressable>
      </ItemActions>
    </ItemView>
  );
};

export default TodoListItem;
