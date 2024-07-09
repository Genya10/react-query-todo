import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useNewTodo } from "../hooks/useNewTodo";

const NewTodo = () => {
  const [title, setTitle] = useState("");

  const {mutate} = useNewTodo()

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
