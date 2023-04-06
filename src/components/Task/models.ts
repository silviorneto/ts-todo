export interface ITask {
    id: number;
    text: string;
    isDone: boolean;
  }

export interface ITaskProps {
  content: string;
  isDone: boolean;
  taskId: number;
  onUpdateTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}
