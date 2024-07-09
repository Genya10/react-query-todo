import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../services/todos-service";

export function useNewTodo() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (title: string) => createTodo(title),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todos", "all"] });
    },
  });
}
