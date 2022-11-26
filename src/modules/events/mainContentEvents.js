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
            
            const elementNumber = localStorage.length+1;
            const taskNumber = elementNumber.toString();

            let newToDo = {
                task: toDoTask.value, 
                number: taskNumber,
            }

            localStorage.setItem('task'+taskNumber, JSON.stringify(newToDo));
            //window.dispatchEvent(new Event('storage')); //Kapag Wala to you have to trigger the event in a different
            localStorageRefresh();
        })
    }

    const localStorageRefresh = () =>{
        let itemCount = localStorage.length;
        const container = document.querySelector('.todoContainer');
        container.innerHTML = "";

        for(let i=0; i<itemCount;i++){
            let data = localStorage.getItem(`task${i+1}`);

            if(data == null) return;

            let data_parsed = JSON.parse(data);
            let task = data_parsed.task;
            const itemElement = contentElements.todoItemFactory(task, false, true);
            container.appendChild(itemElement);
        }
    }

    return {loadEvents};

})();

export default mainContentEvents;