import { modesOfView, typesOfAction } from '../consts';

const defaultState = {
  tasks: [],
  view: modesOfView.ALL
};

const chooseTask = (currentTask, allTasks) => {
  return allTasks.map(item => {
    if (item.id !== currentTask.id) return item;
    return {
      value: item.value,
      completed: !item.completed,
      id: item.id,
    };
  });
};

const chooseAllTasks = (allTasks) => {
  for (const item of allTasks) {
    if (!item.completed) {
      return allTasks.map(item => {
        return {
          value: item.value,
          completed: true,
          id: item.id,
        };
      });
    }
  }
  return allTasks.map(item => {
    return {
      value: item.value,
      completed: false,
      id: item.id,
    };
  });
};

const deleteTask = (currentTask, allTasks) => {
  return allTasks.filter(item => item.id !== currentTask.id);
};

const deleteCompletedTasks = (allTasks) => {
  return allTasks.filter(item => !item.completed);
};

const isFilterButton = (payload) => {
  if (payload === modesOfView.ACTIVE ||
    payload === modesOfView.ALL ||
    payload === modesOfView.COMPLETED) return true;
  return false;
};

const editTask = (currentTask, value, allTasks) => {
  return allTasks.map(item => {
    if (item.id !== currentTask.id) return item;
    return {
      value,
      completed: item.completed,
      id: item.id,
    };
  });
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case typesOfAction.setView: {
      if (isFilterButton(action.payload)) { return { ...state, view: action.payload }; }
      const allTasks = deleteCompletedTasks(state.tasks);
      return { ...state, tasks: allTasks };
    }

    case typesOfAction.addTask:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case typesOfAction.chooseTask: {
      const allTasks = chooseTask(action.payload, state.tasks);
      console.log('allTasks', allTasks);
      return { ...state, tasks: allTasks };
    }

    case typesOfAction.deleteTask: {
      const allTasks = deleteTask(action.payload, state.tasks);
      return { ...state, tasks: allTasks };
    }

    case typesOfAction.chooseAllTasks: {
      const allTasks = chooseAllTasks(state.tasks);
      return { ...state, tasks: allTasks };
    }

    case typesOfAction.editTask: {
      const allTasks = editTask(action.payload.task, action.payload.value, state.tasks);
      return { ...state, tasks: allTasks };
    }

    default:
      return state;
  }
};
