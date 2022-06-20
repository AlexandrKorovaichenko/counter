import React, { useEffect, useState } from 'react';
import className from './App.module.css'
import Counter from './Components/Counter/Counter';
import Setting from './Components/Setting/Setting';


function App() {

  const min = localStorage.getItem("valueMinCounter") ? Number(localStorage.getItem("valueMinCounter")) : 0;
  const max = localStorage.getItem("valueMaxCounter") ? Number(localStorage.getItem("valueMaxCounter")) : 5;

  const [textMessageUser, setMessageError]  = useState<string>("")
  const [toggeleElement , setToggeleElement]  = useState<boolean>(true)
  const [valueMaxCounter, setValueMaxCounter] = useState<number>(max)
  const [valueMinCounter, setValueMinCounter] = useState<number>(min)

  useEffect(() => { 

    const oldValueMinCounter = localStorage.getItem("valueMinCounter");  
    if(oldValueMinCounter) {
        const newValueMinCounter = JSON.parse(oldValueMinCounter); 
        setValueMinCounter(newValueMinCounter)
    }

    const oldValueMaxCounter = localStorage.getItem("valueMaxCounter");  
    if(oldValueMaxCounter) {
        const newValueMaxCounter = JSON.parse(oldValueMaxCounter); 
        setValueMaxCounter(newValueMaxCounter)
    }
      
  }, [])


  useEffect(() => {
    localStorage.setItem("valueMinCounter",  JSON.stringify(valueMinCounter));
    localStorage.setItem("valueMaxCounter",  JSON.stringify(valueMaxCounter));
  }, [valueMinCounter, valueMaxCounter])

  function writeSettingHundler(min: number, max: number){
    setMessageError("");
    setValueMinCounter(min);
    setValueMaxCounter(max);
    setToggeleElement(!toggeleElement);
  }

  function showMessageUser(message: string){
    setMessageError(message);
  }

  function setToggeleElementHundler(){
    setToggeleElement(!toggeleElement);
  }

  return(
 
    <div className = {className.App}>
      
      {toggeleElement && <Counter textMessageUser = { textMessageUser } 
                                  valueMinCounter   = { valueMinCounter }
                                  valueMaxCounter   = { valueMaxCounter }
                                  setToggeleElement = {setToggeleElementHundler}
        />
      }

      {!toggeleElement && <Setting writeSetting = { writeSettingHundler } 
                                   showMessageUser = { showMessageUser } 
                                   valueMinCounter   = { valueMinCounter }
                                   valueMaxCounter   = { valueMaxCounter }
                                   setToggeleElement = {setToggeleElementHundler}
                                   textMessageUser = {textMessageUser}
        />
      }
  
    </div>

  );

}

export default App;
