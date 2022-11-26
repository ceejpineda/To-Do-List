const storageEvents = (()=>{

    const setNumberOfItems = (x) =>{

    }
    
    const populateInitial = () =>{
        window.dispatchEvent(new Event('storage'));
    }

    return {populateInitial}
})();

export default storageEvents;
