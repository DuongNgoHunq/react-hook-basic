import './Blogs.scss';
import { useState } from 'react';
import axios from 'axios';

const AddNewBlog=(props)=>{

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitBtn = async (e) => {
        if(!title){
            alert("Input empty!");
            return;
        }
        if(!content){
            alert("Input empty!");
            return;
        }
        let data = {
            body:  content,
            userId: 1,
            title: title,
        }
        let res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
        if(res && res.data){
            let newBlog = res.data;
            props.handleAddNew(newBlog);
            // console.log(">>> check new blog: ", newBlog);
        }
    }
    return (
        <div className="addNewContainer">
                {/* <h2 className="textAddNew">---Add new blogs---</h2> */}
                <div className='inputData'>
                    <label>title</label>
                    <input type="text" value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='inputData'>
                    <label>content</label>
                    <input type="text" value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button className='btnAddNew' type='button'
                    onClick={(e) =>handleSubmitBtn(e)}
                >Submit</button>
        </div>
    )
}
export default AddNewBlog;