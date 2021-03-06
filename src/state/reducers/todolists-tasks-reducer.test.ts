
/* import { tasksReducer } from "./taskReducer/tasks-reducer";
import { tasksType } from "./taskReducer/types";
import  {addTodolistAC, removeTodolistAC, todolistsReducer} from "./todolistReducer/todolist-reducer";
import { todolistsDomainType } from "./todolistReducer/types";

test('ids should be equals', () => {
    const startTasksState: tasksType = {};
    const startTodolistsState: Array<todolistsDomainType> = [];

    const action = addTodolistAC("new todolist");

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todolistsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].todolistId;

    expect(idFromTasks).toBe(action.todolistId);
    expect(idFromTodolists).toBe(action.todolistId);
});


test('property with todolistId should be deleted', () => {
    const startState: tasksType = {
        "todolistId1": [
            {taskId: "1", taskTitle: "CSS", isDone: false},
            {taskId: "2", taskTitle: "JS", isDone: true},
            {taskId: "3", taskTitle: "React", isDone: false}
        ],
        "todolistId2": [
            {taskId: "1", taskTitle: "bread", isDone: false},
            {taskId: "2", taskTitle: "milk", isDone: true},
            {taskId: "3", taskTitle: "tea", isDone: false}
        ]
    };

    const endState = tasksReducer(startState, removeTodolistAC("todolistId2"))

    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});

 */