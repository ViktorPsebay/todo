import { typesOfAction } from '../consts';

export const handleFilterButton = filter => ({
  type: typesOfAction.setView,
  payload: filter
});

export const addTask = (newDeal) => {
  return {
    type: typesOfAction.addTask,
    payload: {
      value: newDeal,
      completed: false,
      id: String(Math.random()),
    },
  };
};

export const chooseTask = task => {
  return {
    type: typesOfAction.chooseTask,
    payload: task,
  };
};

export const deleteTask = task => {
  return {
    type: typesOfAction.deleteTask,
    payload: task,
  };
};

export const chooseAllTasks = () => {
  return {
    type: typesOfAction.chooseAllTasks
  };
};

export const editTask = (task, value) => {
  return {
    type: typesOfAction.editTask,
    payload: { task, value },
  };
};
