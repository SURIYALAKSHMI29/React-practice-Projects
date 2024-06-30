import React, {useState} from 'react';

function ColorPicker(){

    const [color, setColor] = useState("#000000");

    const changeColor = (e) =>{
        setColor(e.target.value);
        document.body.style.backgroundColor=color;
    }
    return(
    <div>
        <h1>Color Picker</h1>
        <h3>Change the BackGround Color</h3>
        <div className="chosen-color">You picked the Color: {color}</div>
        <div className='div-box'>
            <label>Pick a Color: &nbsp;</label>
            <input type='color' value={color}  onChange={changeColor}/>
        </div>
    </div>);
}

export default ColorPicker
