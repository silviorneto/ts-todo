import { ITask } from "../Task/models"

export interface IListProps {
    taskList: ITask[];
    onUpdateTask: (id: number) => void;
    onDeleteTask: (id: number) => void;
}