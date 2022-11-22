import sidebar from "./sidebar";

const layout = (()=>{

    const loadPageLayOut = () => {
        const page = document.getElementById('content');
        page.appendChild(header());
        page.appendChild(body());
        page.appendChild(footer());
        sidebar.initializeSidebar();
    }

    const header = () =>{
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header');

        const burgerMenu = document.createElement('p');
        burgerMenu.classList.add('burger');
        burgerMenu.innerText = '///'

        const title = document.createElement('h1');
        title.classList.add('title');
        title.innerText = "TO DO"

        const lightDarkSwitch = document.createElement('button');
        lightDarkSwitch.id = "lightDarkSwitch";
        lightDarkSwitch.innerText = 'Dark Mode';

        headerContainer.appendChild(burgerMenu);
        headerContainer.appendChild(title);
        headerContainer.appendChild(lightDarkSwitch);

        return headerContainer;
    }

    const body = () =>{
        const bodyContainer = document.createElement('div');
        bodyContainer.classList.add('body');

        bodyContainer.appendChild(mainContent());
        bodyContainer.appendChild(sideBar());

        return bodyContainer;
    }

    const sideBar = () =>{
        const sideBarContainer = document.createElement('div');
        sideBarContainer.classList.add('sidebar');
        sideBarContainer.id = 'sidebar'

        return sideBarContainer;
    }
    const mainContent = () =>{
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('content');

        return contentContainer;
    }

    const footer = () => {
        const footerContainer = document.createElement('div');
        footerContainer.classList.add('footer');

        return footerContainer;
    }

    return {loadPageLayOut,body, sideBar}

})();

export default layout;