import { Checkbox, ListItem, Stack } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleTodoStatus } from "../services/todos-service";
import { TodoType } from "../types/todo";

const TodoItem = ({ completed, id, title }: TodoType) => {
  /*const client = useQueryClient();

  const { mutate: toggle } = useMutation({
    mutationFn: () => toggleTodoStatus(id, !completed),
    onSuccess: () => client.invalidateQueries({queryKey:['todos']}),
  });*/

  return (
    <ListItem>
      <Stack spacing={4} direction="row" >
        <Checkbox isChecked={completed}>{title}</Checkbox>
      </Stack>
    </ListItem>
  );
};

export { TodoItem };

//onClick={() => toggle()}