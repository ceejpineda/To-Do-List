const footerContent = (()=>{
    
    const loadFooter = () =>{
        const footerContainer = document.querySelector('.footer');
        const footerText = document.createElement('p');
        footerText.classList.add('footerText');
        footerText.innerText = "The Odin Project - CJ Pineda";

        footerContainer.appendChild(footerText);

        return footerContainer;
    }

    const footer = () => {
        const footerContainer = document.createElement('div');
        footerContainer.classList.add('footer');

        return footerContainer;
    }

    return {loadFooter, footer}
})();

export default footerContent;