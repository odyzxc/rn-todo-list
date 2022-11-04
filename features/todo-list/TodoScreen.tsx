import { View } from "react-native";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const TodoScreen = () => {
  return (
    <View>
      <TodoList />
      <AddTodoForm />
    </View>
  );
};

export default TodoScreen;
