import addIconLink from '../icons/add.png'

const contentElements = (()=>{

    //(description, checkboxCondition, inputCondition)
    const todoItemFactory = (description, checkboxCondition, inputCondition) => {
        let dataItemNumber = document.querySelector('.todoContainer').childElementCount;
        const item = document.createElement('div');
        item.classList.add('todoItem');
        item.dataset.number = dataItemNumber+1;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = checkboxCondition;
        checkbox.disabled = checkboxCondition;

        const taskText = document.createElement('input');
        taskText.classList.add('item');
        taskText.type = 'text';
        taskText.placeholder = description;
        taskText.disabled = inputCondition;

        item.appendChild(checkbox);
        item.appendChild(taskText);

        return item;
    }

    const itemCreator = () => {

        const item = todoItemFactory('add task...', true, false);
        item.dataset.number = 0;
        
        const input = item.querySelector('.item');
        input.classList.add('taskDescription')

        const addIcon = document.createElement('img');
        addIcon.classList.add('addIcon');
        addIcon.src = addIconLink;

        item.appendChild(addIcon);

        return item;
    }

    return {todoItemFactory, itemCreator}
})();

export default contentElements;