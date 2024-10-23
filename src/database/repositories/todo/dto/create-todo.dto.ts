export class CreateTodoDto {
  title: string;
  completed: boolean;
  parentTodo: number | null;
  user: string;
}
