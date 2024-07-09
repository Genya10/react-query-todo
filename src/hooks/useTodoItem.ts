import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleTodoStatus } from "../services/todos-service";

export function useTodoItem(id: number, completed: boolean) {
  const client = useQueryClient();

  return useMutation({
    mutationFn: () => toggleTodoStatus(id, !completed),
    onSuccess: () => client.invalidateQueries({ queryKey: ["todos"] }),
  });
}
