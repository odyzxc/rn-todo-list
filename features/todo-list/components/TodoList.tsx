import { useSelector } from "react-redux";
import { selectTodosList } from "../selectors";
import { ListView } from "./styled";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todoList = useSelector(selectTodosList);
  return (
    <ListView>
      {todoList.map((todo) => (
        <TodoListItem key={`todo-list-item-${todo.id}`} todoItem={todo} />
      ))}
    </ListView>
  );
};

export default TodoList;
