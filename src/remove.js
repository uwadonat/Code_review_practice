function clear(tasks) {
  const temp = [];
  tasks.forEach((task) => {
    if (task.completed !== true) {
      temp.push(task);
    }
  });
  window.update(temp);
}

export default clear;
