import { useQuery } from "@tanstack/react-query";
import { TodoType, TodoStateType } from "../types/todo";
import { fetchTodos } from "../services/todos-service";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export function useTodoList(state: TodoStateType) {
  const toast = useToast();
  const { data, isLoading, isSuccess, isError, error } = useQuery<TodoType[]>({
    queryKey: ["todos", state],
    queryFn: () => fetchTodos(state),
    retry: 2,
  });

  useEffect(() => {
    if (isError) {
      toast({
        status: "error",
        title: error.message,
        position: "top-right",
      });
    }
  }, [isError, error, toast]);

  return { data, isLoading, isSuccess };
}

