import addIconLink from './icons/add.png'

const content = (()=>{

    const loadContent = () => {
        const content = document.querySelector('.content');

        content.appendChild(addItem());
;
    }

    const addItem = () =>{
        const item = document.createElement('div');
        item.classList.add('todoItem');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const description = document.createElement('input');
        description.classList.add('item');
        description.type = 'text';
        description.placeholder = 'finish this project';
        description.disabled = true;

        const addIcon = document.createElement('img');
        addIcon.classList.add('addIcon');
        addIcon.src = addIconLink;

        item.appendChild(checkbox);
        item.appendChild(description);
        item.appendChild(addIcon);
        
        return item;
    }

    return {loadContent, addItem}

})();

export default content;