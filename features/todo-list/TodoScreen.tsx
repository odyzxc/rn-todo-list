import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { Container } from "./styled";

const TodoScreen = () => {
  return (
    <Container>
      <TodoList />
      <AddTodoForm />
    </Container>
  );
};

export default TodoScreen;
