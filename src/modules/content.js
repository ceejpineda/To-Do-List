"use strict";

import contentElements from './contentCreators/contentElements'

const content = (()=>{

    const loadContent = () => {
        const content = document.querySelector('.content');
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todoContainer');
        content.appendChild(todoContainer);
    }

    const loadTasks = () => {
        const todoContainer = document.querySelector('.todoContainer');

        todoContainer.appendChild(contentElements.itemCreator())
    }

    return {loadContent, loadTasks}
})();

export default content;