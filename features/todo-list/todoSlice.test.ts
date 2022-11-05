import reducer, { addTodo, removeTodo, toggleTodo } from "./todoSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ list: [] });
});

test("should handle addTodo", () => {
  const previousState = { list: [] };
  const nextState = reducer(previousState, addTodo("Testing todos"));

  expect(nextState.list.length).toEqual(1);
  expect(nextState.list[0].text).toEqual("Testing todos");
  expect(nextState.list[0].checked).toEqual(false);
});

test("should handle toggleTodo", () => {
  const previousState = {
    list: [{ text: "Toggle todo", checked: false, id: "test-id-1" }],
  };

  expect(reducer(previousState, toggleTodo("test-id-1"))).toEqual({
    list: [{ text: "Toggle todo", checked: true, id: "test-id-1" }],
  });
});

test("should handle toggleTodo", () => {
  const previousState = {
    list: [
      { text: "Do not remove this todo", checked: false, id: "test-id-0" },
      { text: "Remove this todo", checked: false, id: "test-id-1" },
    ],
  };

  expect(reducer(previousState, removeTodo("test-id-1"))).toEqual({
    list: [
      { text: "Do not remove this todo", checked: false, id: "test-id-0" },
    ],
  });
});
