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

        const description = document.createElement('p');
        description.innerText = 'finish this project';

        item.appendChild(checkbox);
        item.appendChild(description);
        
        return item;
    }

    return {loadContent}

})();

export default content;