import { useState } from "react";
import { Alert, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { isTodoWithTextExisting } from "../selectors";
import { addTodo } from "../todoSlice";
import { CreateTodoForm, CreateTodoInput } from "./styled";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const isItemExisting = useSelector((state: any) =>
    isTodoWithTextExisting(state, todoText)
  );
  const onPressAddTodo = () => {
    if (isItemExisting || !todoText) {
      return Alert.alert(
        "Cannot add new item",
        isItemExisting ? "Item already exists" : "Item is empty"
      );
    }
    dispatch(addTodo(todoText));
    setTodoText("");
  };
  return (
    <CreateTodoForm>
      <CreateTodoInput
        onChangeText={(input) => setTodoText(input)}
        value={todoText}
        placeholder="Type your todo here"
      />
      <Button title="Add Todo" onPress={onPressAddTodo} />
    </CreateTodoForm>
  );
};
export default AddTodoForm;
