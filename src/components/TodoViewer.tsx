import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { TodoStateType } from "../types/todo";

const TodoViewer = () => {
  const [view, setView] = useState<TodoStateType>("all");

  return (
    <Stack>
      <ButtonGroup>
        <Button
          variant={view === "all" ? "outline" : "solid"}
          onClick={() => setView("all")}
        >
          all
        </Button>
        <Button
          variant={view === "open" ? "outline" : "solid"}
          onClick={() => setView("all")}
        >
          open
        </Button>
        <Button
          variant={view === "completed" ? "outline" : "solid"}
          onClick={() => setView("all")}
        >
          completed
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export { TodoViewer };
