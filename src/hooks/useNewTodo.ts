import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../services/todos-service";
import { TodoType } from "../types/todo";

export function useNewTodo() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (title: string) => createTodo(title),
    /*onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todos", "all"] });
    },*/
    onSuccess:(newTodo)=>{
     //client.getQueryData(['todos','all'])
     client.setQueryData<TodoType[]>(['todos','all'],(oldTodos)=>{
      return [...(oldTodos || []), newTodo]
     });
     client.invalidateQueries({
      queryKey:['todos','all'],
      refetchType:'none'
     })
    }
  });
}
