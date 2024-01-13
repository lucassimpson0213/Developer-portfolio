import { useReducer } from "react";
import tasksReducer from "../components/TasksReducer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

type Task = {
  id: number;
  text: string;
  done: boolean;
};

type Action =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: Task }
  | { type: "deleted"; id: number };

let nextId = 3;

export default function TaskApp() {
  const initialTasks: Task[] = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
  ];

  const [tasks, dispatch] = useReducer<React.Reducer<Task[], Action>>(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      id: nextId++,
      text,
    });
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: "changed",
      task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <div>
      <AddTask handleAddTask={handleAddTask("hello")} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
