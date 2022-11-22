import layout from "./layout";
import sidebar from "./sidebar";

const events = (()=>{

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

    return {sideBarEvent};

})();

export default events;