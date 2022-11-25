import contentElements from "../contentCreators/contentElements";

const mainContentEvents = (()=>{

    const loadEvents = () => {
        addItem();
        localStorageRefresh();
    }

    const addItem = () =>{
        const add = document.querySelector('.addIcon');
        const toDoTask = document.querySelector('.taskDescription');

        add.addEventListener('click', ()=>{
            if(toDoTask.value == "") return;
            //todoContainer.appendChild(contentElements.todoItemFactory(toDoTask.value,false,true));

            localStorage.setItem('task', toDoTask.value);
            window.dispatchEvent(new Event('storage')) //Kapag Wala to you have to trigger the event in a different 
        })
    }

    const localStorageRefresh = () =>{
        const todoContainer = document.querySelector('.todoContainer');
        window.addEventListener('storage', ()=>{
            console.log('hello')    
            todoContainer.appendChild(contentElements.todoItemFactory(localStorage.getItem('task'), false, true));
        })
    }

    return {loadEvents};

})();

export default mainContentEvents;