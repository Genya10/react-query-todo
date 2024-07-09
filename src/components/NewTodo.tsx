import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../services/todos-service";

const NewTodo = () => {
  const [title, setTitle] = useState("");

  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (title: string) => createTodo(title),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todos", "all"] });
    },
  });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title) {
      mutate(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Stack direction="row">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="new todo..."
        />
        <Button type="submit">Add todo</Button>
      </Stack>
    </form>
  );
};

export { NewTodo };
