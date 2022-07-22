import React,{useState} from 'react';

export default function TextForm(props) { 
    const [text,setText] = useState("");

    const handleChange = (e)=>{
        // using to update the old {text} value with adding the new written value.
        setText(e.target.value);
    }
    const handleUp = ()=>{
        let up = text.toUpperCase();
        setText(up);
    }
    const handleDown = ()=>{
        let down = text.toLowerCase();
        setText(down);
    }
    const handleclear = ()=>{
        setText('');
    } 
    return(
        <>
            <div className="container my-5">
                <div className="mb-3">
                    <h4 className="text-primary">{props.heading}</h4>
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor : props.mode === 'light' ? 'white' : '#444',color:props.mode === 'light'?'black':'white'}} rows="8" placeholder="Enter Your Text..." value={text} onChange={handleChange}></textarea>
                    <button className="btn btn-primary mt-3 mx-1" onClick={handleUp}>Convert to uppercase</button>
                    <button className="btn btn-primary mt-3 mx-1" onClick={handleDown}>Convert to lowecase</button>
                    <button className="btn btn-primary mt-3 mx-1" onClick={handleclear}>Clear Text</button>
                </div>
            </div>
            <div className="container my-5">
                <h4 className="text-primary">Text Summary</h4>
                <strong style={{color:props.mode === 'light'?'black':'white'}}>{text.split(" ").length} words and {text.length} characters.</strong>
                <p className="lead" style={{color:props.mode === 'light'?'black':'white'}}>{0.008*text.split(" ").length} Minutes will take to read.</p>
                <h3 className="text-danger my-2">Preview</h3>
                <p style={{color:props.mode === 'light'?'black':'white'}}>{text.length === 0 ? 'Enter Something in the above box to see preview here':text}</p>
            </div>
        </>
    );
}