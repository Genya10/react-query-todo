import "./App.css";
import { Container, Divider, Stack } from "@chakra-ui/react";
import { NewTodo } from "./components/NewTodo";
//import { TodoList } from "./components/TodoList";
import { TodoViewer } from "./components/TodoViewer";

function App() {
  return (
    <Container mt="5" mx="auto">
      <Stack spacing={5}>
        <NewTodo />
        {/* <TodoList />*/}
        <TodoViewer />
        <Divider/>
      </Stack>
    </Container>
  );
}

export default App;
