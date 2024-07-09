import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { TodoStateType } from "../types/todo";
import { TodoList } from "./TodoList";

const TodoViewer = () => {
  const [view, setView] = useState<TodoStateType>(TodoStateType.All);

  return (
    <Stack>
      <ButtonGroup>
        <Button
          variant={view === "all" ? "outline" : "solid"}
          onClick={() => setView(TodoStateType.All)}
        >
          all
        </Button>
        <Button
          variant={view === "open" ? "outline" : "solid"}
          onClick={() => setView(TodoStateType.Open)}
        >
          open
        </Button>
        <Button
          variant={view === "completed" ? "outline" : "solid"}
          onClick={() => setView(TodoStateType.Completed)}
        >
          completed
        </Button>
      </ButtonGroup>
      <TodoList state={view}/>
    </Stack>
  );
};

export { TodoViewer };
