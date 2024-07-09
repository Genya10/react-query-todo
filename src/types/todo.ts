//export type TodoStateType = "all" | "open" | "completed";

export type TodoType = {
  id: number;
  completed: boolean;
  title: string;
};

export type TodoListType = {
  state: TodoStateType;
};

export enum TodoStateType {
  All = "all",
  Open = "open",
  Completed = "completed",
}
