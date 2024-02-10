import React, {useState} from "react";

const useFlip = () => {
    const [state, setState] = useState(true);
    const toggleState = () => {
        setState(state => !state)
    }
    return [state, toggleState]
};

export default useFlip;

/*
 - Making a piece of state start from true or false
 - making a function to toggle state from t/f or f/t
 
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };


  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };
*/
