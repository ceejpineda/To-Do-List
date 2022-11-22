const sidebar = (()=>{

    const initializeSidebar = () =>{
        const sidebar = document.getElementById('sidebar')

        const h2Tasks = document.createElement('h2');
        h2Tasks.innerText = 'Tasks';
        
        const todayTile = document.createElement('div');
        const todayIcon = document.createElement('img');
        const todayName = document.createElement('p');
        todayName.innerText = 'Today';
        todayTile.appendChild(todayIcon);
        todayTile.appendChild(todayName);

        const sevenTile = document.createElement('div');
        const sevenIcon = document.createElement('img');
        const sevenName = document.createElement('p');
        sevenName.innerText = 'This Week';
        sevenTile.appendChild(sevenIcon);
        sevenTile.appendChild(sevenName);

        const importantTile = document.createElement('div');
        const importantIcon = document.createElement('img');
        const importantName = document.createElement('p');
        importantName.innerText = 'Important';
        importantTile.appendChild(importantIcon);
        importantTile.appendChild(importantName);
        
        sidebar.appendChild(h2Tasks);
        sidebar.appendChild(todayTile);
        sidebar.appendChild(sevenTile);
        sidebar.appendChild(importantTile);
    }

    return {initializeSidebar}
})();

export default sidebar;