import React, { useState} from 'react'
function Calc() {
    const [inputValue, setInputValue] = useState("")
    function result(expression){
        return eval(expression);
    }
    function display(buttonValue){
        if(buttonValue === "C"){
            setInputValue("")
        }
        else if(buttonValue === "0"){
            setInputValue(inputValue + 0);
        }
        else if(buttonValue === "7"){
            setInputValue(inputValue + 7);
        }
        else if(buttonValue === "8"){
            setInputValue(inputValue + 8);
        }
        else if(buttonValue === "9"){
            setInputValue(inputValue + 9);
        }
        else if(buttonValue === "4"){
            setInputValue(inputValue + 4);
        }
        else if(buttonValue === "5"){
            setInputValue(inputValue + 5);
        }
        else if(buttonValue === "6"){
            setInputValue(inputValue + 6);
        }
        else if(buttonValue === "3"){
            setInputValue(inputValue + 3);
        }
        else if(buttonValue === "2"){
            setInputValue(inputValue + 2);
        }
        else if(buttonValue === "1"){
            setInputValue(inputValue + 1);
        }
        else if(buttonValue === "."){
            setInputValue(inputValue + ".");
        }
        else if(buttonValue === "+"){
            setInputValue(inputValue + "+")
        }
        else if(buttonValue === "-"){
            setInputValue(inputValue + "-");
        }
        else if(buttonValue === "*"){
            setInputValue(inputValue +"*");
        }
        else if(buttonValue === "/"){
            setInputValue(inputValue + "/");
        }
        else if(buttonValue === "="){

            setInputValue(result(inputValue));
        }
    }
    return (
        <div className="row center">
            <div className="col-md-5 mt">
                <h1>Calculator</h1>
                <table className="table shadow-lg p-3 mb-5 rounded">
                    <tr>
                        <td colSpan='3' >
                            <input type="text" value={inputValue}/>
                        </td>
                        <td>
                            <button onClick={display.bind(this,"C")}>C</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={display.bind(this,"7")}>7</button>
                        </td>
                        <td>
                            <button onClick={display.bind(this,"8")}>8</button>
                        </td>
                        <td>
                            <button onClick={display.bind(this,"9")}>9</button>
                        </td>
                        <td>
                            <button onClick={display.bind(this,"/")}>/</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={display.bind(this,"4")}>4</button>
                        </td>
                        <td>                        
                            <button onClick={display.bind(this,"5")}>5</button>
                        </td>
                        <td>
                            <button onClick={display.bind(this,"6")}>6</button>
                        </td>
                        <td>                        
                            <button onClick={display.bind(this,"*")}>*</button>
                        </td>
                    </tr>
                    <tr>
                        <td>                        
                            <button onClick={display.bind(this,"1")}>1</button>
                        </td>
                        <td>
                            <button onClick={display.bind(this,"2")}>2</button>
                        </td>
                        <td>                        
                            <button onClick={display.bind(this,"3")}>3</button>
                        </td>
                        <td>
                            <button onClick={display.bind(this,"+")}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td>                        
                            <button onClick={display.bind(this,".")}>.</button>
                        </td>
                        <td>
                            <button onClick={display.bind(this,"0")}>0</button>
                        </td>
                        <td>
                            <button onClick={display.bind(this,"=")}>=</button>
                        </td>
                        <td>
                            <button onClick={display.bind(this,"-")}>-</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Calc
