import allTaskUrl from './icons/all.png';
import todayTaskUrl from './icons/today.png';
import sevenTaskUrl from './icons/7.png';
import importantUrl from './icons/star.png'

const sidebar = (()=>{

    const initializeSidebar = () =>{
        const sidebar = document.getElementById('sidebar')
        const summary = document.createElement('div');
        summary.classList.add('summary');
        const projects = document.createElement('div');
        projects.classList.add('projects');

        const h2Tasks = document.createElement('h2');
        h2Tasks.innerText = 'Summary';
        
        const allTask = addTile('All Tasks')
        allTask.classList.add('selected')
        const todayTile = addTile('Today');
        const weekTile = addTile('This Week');
        const importantTile = addTile('Important');

        const h2Projects = document.createElement('h2');
        h2Projects.innerText= 'Projects';
        
        const addProject = addTile('Add a project');

        
        summary.appendChild(h2Tasks);
        summary.appendChild(allTask)
        summary.appendChild(todayTile);
        summary.appendChild(weekTile);
        summary.appendChild(importantTile);

        projects.appendChild(h2Projects);
        projects.appendChild(addProject)

        sidebar.appendChild(summary);
        sidebar.appendChild(projects)


        //sidebar.appendChild(addToDo());
    }
    

    const addToDo = () => {
        const addToDoContainer = document.createElement('div');
        
        const addToDoTitle = document.createElement('h2');
        addToDoTitle.innerText = 'Add To Do: '

        const addToDoForm = document.createElement('input');
        addToDo.placeholder = 'To Do';

        addToDoContainer.appendChild(addToDoTitle)
        addToDoContainer.appendChild(addToDoForm)

        return addToDoContainer;
    }

    const addTile = (tileText) => {
        const tile = document.createElement('div');
        const tileIcon = document.createElement('img');
        const tileName = document.createElement('p');
        tileName.innerText = tileText;
        tile.appendChild(tileIcon);
        tile.appendChild(tileName);

        if(tileText == 'All Tasks'){
            tileIcon.src = allTaskUrl;
        }else if(tileText == 'Today'){
            tileIcon.src = todayTaskUrl;
        }else if(tileText == 'This Week'){
            tileIcon.src = sevenTaskUrl;
        }else if(tileText == 'Important'){
            tileIcon.src = importantUrl;
        }
        tile.classList.add('tile');

        return tile;
    }

    return {initializeSidebar}

})();

export default sidebar;