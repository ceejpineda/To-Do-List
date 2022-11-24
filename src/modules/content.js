"use strict";

import contentElements from './contentCreators/contentElements'
import footer from '../modules/footer'

const content = (()=>{

    const loadContent = () => {
        const content = document.querySelector('.content');
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todoContainer');
        content.appendChild(todoContainer);
        content.appendChild(contentElements.itemCreator())
        content.appendChild(footer.footer());
    }

    const loadTasks = () => {
        const todoContainer = document.querySelector('.todoContainer');
        
    }

    return {loadContent, loadTasks}
})();

export default content;