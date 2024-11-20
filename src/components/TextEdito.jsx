import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./TextEditor.css"
const TextEdito = ({setblogdata,blogdata}) => {
    const toolbarOptions = [
        ["bold", "italic", "underline", "strike"], // toggled buttons
       
        ["link", "image", "video", "formula"],
      
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
       
        [{ direction: "rtl" }], // text direction
      
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    
      
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
  
      
        ["clean"], // remove formatting button
      ];
     
  return (
    <div>
       <ReactQuill className='react-quill ' value={blogdata?.content}  onChange={(e)=>setblogdata({...blogdata,content:e})}    theme="snow" modules={{toolbar:toolbarOptions}}  />
    </div>
  )
}

export default TextEdito
