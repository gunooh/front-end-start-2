//start...

var taskList = document.getElementById('task-list');
var editBox = document.getElementById('editBox');

function attachTaskItem(itemValue)
{
    taskList.innerHTML += ' \
    <li> \
        <button class="delete">×</button> \
        <input type="checkbox" class="toggle-checked"> \
        <span class="text">' + itemValue +'</span> \
    </li>';
}

editBox.addEventListener('keyup', function(event){
    
    if(event.code !== 'Enter'){
        event.stopPropagation();
        return;
    }
    
    attachTaskItem(editBox.value);
    editBox.value ='';
});
