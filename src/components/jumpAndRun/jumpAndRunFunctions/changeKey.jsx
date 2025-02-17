import { controllConfig } from "./controllConfig";

export function changeKey(e, data, controll, setKeyName, setControll){
       const newKey = e.key.toLowerCase()
       if(!data.key || !data.value){
         return
       }
       
         if(newKey === data.value) return;
         const restKeys = controll.filter((item) => item.key !== data.key)
         if(restKeys.filter((item) => item.value === newKey).length > 0){
            return console.log("Key already given!")
         }
         
         data.value = newKey;

         const index = controll.findIndex((item) => item.key === data.key);
         restKeys.splice(index, 0, data)
        
          const newKeys = restKeys.map(pair => `${pair.key}:${pair.value}`).join(":"); 

          localStorage.setItem("jumpnRun", newKeys)
         
  
        setKeyName("")
     setControll(controllConfig)
     data.value = "";
     data.key = "";
    }