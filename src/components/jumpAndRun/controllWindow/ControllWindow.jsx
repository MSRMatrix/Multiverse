import { controllConfig } from "../jumpAndRunFunctions/controllConfig";

const ControllWindow = ({data, controll, setIsOpen, setKeyName, setControll}) => {

    function changeKey(e){
         console.log(e.code);
         if(e.code === data.value) return;
         const restKeys = controll.filter((item) => item.key !== data.key)
         console.log(restKeys.filter((item) => item.value === e.code).length > 0);
         if(restKeys.filter((item) => item.value === e.code).length > 0){
            return console.log("Key already given!")
         }
         
         data.value = e.code;

         const index = controll.findIndex((item) => item.key === data.key);
         restKeys.splice(index, 0, data)
        
          const newKeys = restKeys.map(pair => `${pair.key}:${pair.value}`).join(":"); 

          localStorage.setItem("jumpnRun", newKeys)
         
  
        setKeyName("")
     setControll(controllConfig)
    }

    
    return(
    
    <dialog open onKeyDown={(e) => changeKey(e)}>
        <p onClick={() => setIsOpen(false)}>X</p>
        <h3>{data.key}</h3>
        <p>Type in your Key for {data.value}</p> 
        </dialog>
        
    )
}

export default ControllWindow;