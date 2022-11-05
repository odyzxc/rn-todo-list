import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import TodoScreen from "./features/todo-list/TodoScreen";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <TodoScreen />
    </Provider>
  );
}
