import MoreImg from './more.svg';

function removeTask(data, tasks) {
  const str = data.replace('div', '');
  const newTasks = [];
  tasks.forEach((task) => {
    if (task.index !== parseInt(str, 10)) {
      newTasks.push(task);
    }
  });
  window.update(newTasks);
}

function editTask(divId, tasks) {
  const list = document.getElementsByClassName('drag-div');
  Array.from(list).forEach((li) => {
    if (li.id === divId) {
      li.style.backgroundColor = '#fff59c78';
      const img = li.getElementsByTagName('img')[0];
      img.src = '<i class="far fa-trash-alt"></i>';
      img.alt = 'delete';
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        removeTask(divId, tasks);
      });
    } else {
      li.style.backgroundColor = 'white';
      const img = li.getElementsByTagName('img')[0];
      img.src = MoreImg;
      img.style.cursor = 'all-scroll';
    }
  });
}

export default editTask;
