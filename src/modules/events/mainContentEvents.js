import contentElements from "../contentCreators/contentElements";

const mainContentEvents = (()=>{

    const loadEvents = () => {
        addItem();
    }

    const addItem = () =>{
        const todoContainer = document.querySelector('.todoContainer');
        const add = document.querySelector('.addIcon');
        const toDoTask = document.querySelector('.taskDescription');

        add.addEventListener('click', ()=>{
            todoContainer.prepend(contentElements.todoItemFactory(toDoTask.value,false,true));
        })

        
    }

    return {loadEvents};

})();

export default mainContentEvents;