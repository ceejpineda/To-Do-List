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

            const elementNumber = document.querySelector('.todoContainer').lastChild.dataset.number;
            if(elementNumber == null){
                elementNumber = 1;
            }
            const taskNumber = elementNumber.toString();

            let newToDo = {
                task: toDoTask.value, 
                number: taskNumber,
            }

            localStorage.setItem('task'+taskNumber, newToDo);
            window.dispatchEvent(new Event('storage')); //Kapag Wala to you have to trigger the event in a different
        })
    }

    const localStorageRefresh = () =>{

    }

    return {loadEvents};

})();

export default mainContentEvents;