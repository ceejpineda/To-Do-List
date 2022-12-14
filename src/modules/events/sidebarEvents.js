const sidebarEvents = (()=>{

    const loadEvents = () => {
        sideBarEvent();     // Display/Remove SideBar
        sideBarSelector();  // Colors the "Active" Sidebar Item
    }

    const sideBarEvent = () =>{
        const burger = document.querySelector('.burger');
        const sideBar = document.querySelector('.sidebar');
        sideBar.style.display = 'flex';
        burger.addEventListener('click', ()=>{
            if(sideBar.style.display == 'flex'){
                sideBar.style.display = 'none';
            }else{
                sideBar.style.display = 'flex'
            }
        });
    }
        
    const sideBarSelector = () =>{
        const sideBar = document.querySelector('.sidebar');
        const tiles = document.querySelectorAll('.tile');

        tiles.forEach(tile => {
            tile.addEventListener('click', () =>{
                tiles.forEach(element => {
                    element.classList.remove('selected');
                });
                tile.classList.add('selected');
            })
        });
    }

    return {loadEvents};

})();

export default sidebarEvents;