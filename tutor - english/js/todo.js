document.getElementById('todo-form').addEventListener('submit', function(e) {
   e.preventDefault();
   const taskInput = document.getElementById('new-task');
   const taskText = taskInput.value.trim();

   if (taskText === '') return;

   const li = document.createElement('li');
   li.textContent = taskText;
   document.getElementById('todo-list').appendChild(li);

   taskInput.value = '';
});