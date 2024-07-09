import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

const NewTodo = () => {
  const [title, setTiile] = useState("");

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title) {
      setTiile("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Stack>
        <Input
          value={title}
          onChange={(e) => setTiile(e.target.value)}
          placeholder="new todo..."
        />
        <Button type="submit">Add todo</Button>
      </Stack>
    </form>
  );
};

export { NewTodo };
