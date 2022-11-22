import layout from "./layout";
import sidebar from "./sidebar";

const events = (()=>{

    const sideBarEvent = () =>{
        const burger = document.querySelector('.burger');
        const body = document.querySelector('.body');
        burger.addEventListener('click', ()=>{
            const sideBar = document.getElementById('sidebar');
            if(sideBar !== null){
                body.removeChild(sideBar);
            }else{
                body.appendChild(layout.sideBar())
                sidebar.initializeSidebar();
            }
        });
    }

    return {sideBarEvent};

})();

export default events;