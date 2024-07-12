//Hook function contain three functions
 //use localStorge functions to manupulate three functions
 //SetItem . GetItem, ReomveItem


  function useLocalStorage() {
    const setItem = (key: string,value: string)=>{
          localStorage.setItem(key,value)
    }
    const getItem = (key:string)=>{
        return localStorage.getItem(key);
    }
    const reomveItem = (key: string)=>{
         localStorage.removeItem(key)
    }
    return {setItem,getItem,reomveItem}
}

export default useLocalStorage;
 