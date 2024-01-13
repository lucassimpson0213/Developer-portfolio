interface Task {
  id: number;
  text: string;
  done: boolean;
}

type TaskAction =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: Task }
  | { type: "deleted"; id: number };

export default function tasksReducer(
  tasks: Task[],
  action: TaskAction
): Task[] {
  switch (action.type) {
    case "added":
      return [...tasks, { id: action.id, text: action.text, done: false }];

    case "changed":
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));

    case "deleted":
      return tasks.filter((t) => t.id !== action.id);

    default:
      throw new Error("Unknown action: " + action.type);
  }
}
