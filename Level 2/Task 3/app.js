document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = taskInput.value;
      if (taskText) {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    function addTask(taskText) {
      const listItem = document.createElement('li');
  
      const taskLabel = document.createElement('label');
      taskLabel.innerText = taskText;
  
      const dateSpan = document.createElement('span');
      dateSpan.innerText = getCurrentDateTime();
  
      const completeButton = document.createElement('button');
      completeButton.innerText = 'Complete';
      completeButton.addEventListener('click', function() {
        completeTask(listItem);
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteTask(listItem);
      });
  
      listItem.appendChild(taskLabel);
      listItem.appendChild(dateSpan);
      listItem.appendChild(completeButton);
      listItem.appendChild(deleteButton);
  
      pendingTasksList.appendChild(listItem);
    }
  
    function completeTask(listItem) {
      const taskLabel = listItem.querySelector('label');
      taskLabel.classList.add('completed');
  
      const completeButton = listItem.querySelector('button');
      completeButton.innerText = 'Completed';
      completeButton.disabled = true;
  
      const dateSpan = listItem.querySelector('span');
      dateSpan.innerText += ' - Completed';
  
      completedTasksList.appendChild(listItem);
    }
  
    function deleteTask(listItem) {
      listItem.parentNode.removeChild(listItem);
    }
  
    function getCurrentDateTime() {
      const currentDate = new Date();
      const options = { dateStyle: 'medium', timeStyle: 'short' };
      return currentDate.toLocaleString(undefined, options);
    }
  });
  
  