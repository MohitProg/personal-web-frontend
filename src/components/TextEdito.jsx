import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./TextEditor.css"
const TextEdito = ({setblogdata,blogdata}) => {
  
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["link", "image", "video", "formula"], // media options
    
    [{ header: 1 }, { header: 2 }], // custom header levels
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // extended headers
    
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }], // lists
    [{ indent: "-1" }, { indent: "+1" }], // indentation
    [{ align: [] }], // text alignment options
    
    [{ direction: "rtl" }], // text direction
    
    [{ size: ["small", false, "large", "huge"] }], // font size options
    [{ color: [] }, { background: [] }], // font color and background
    
    [{ font: [] }], // font family options
    
    [{ script: "sub" }, { script: "super" }], // subscript/superscript
    ["blockquote", "code-block"], // quote and code block
    
    ["clean"], // remove formatting button
  ];
  return (
    <div>
       <ReactQuill className='react-quill '  value={blogdata?.content}  onChange={(e)=>setblogdata({...blogdata,content:e})}    theme="snow" modules={{toolbar:toolbarOptions}}  />
    </div>
  )
}

export default TextEdito
