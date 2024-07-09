import { Checkbox, ListItem, Stack } from "@chakra-ui/react";
import { TodoType } from "../types/todo";
import { useTodoItem } from "../hooks/useTodoItem";

const TodoItem = ({ completed, id, title }: TodoType) => {

  const {mutate} = useTodoItem(id,completed)

  return (
    <ListItem>
      <Stack spacing={4} direction="row" onClick={()=> mutate()}>
        <Checkbox isChecked={completed}>{title}</Checkbox>
      </Stack>
    </ListItem>
  );
};

export { TodoItem };
