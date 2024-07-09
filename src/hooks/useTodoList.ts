import { useQuery } from "@tanstack/react-query";
import { TodoType } from "../types/todo";
import { fetchTodos } from "../services/todos-service";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export function useTodoList() {
  const toast = useToast();
  const { data, isLoading, isSuccess, isError, error } = useQuery<TodoType[]>({
    queryKey: ["todo", "all"],
    queryFn: () => fetchTodos("all"),
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
  }, [isError, error]);

  return { data, isLoading, isSuccess };
}
