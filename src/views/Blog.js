import useFetch from "../customize/fetch";
import './Blogs.scss';
import Modal from 'react-bootstrap/Modal'
import { Link, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import AddNewBlog from "./AddNewBlog";

const Blog = () =>{

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //
    const {data: dataBlogs, isLoading, isError} = 
    
    useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
    
    useEffect(() => {
        if(dataBlogs && dataBlogs.length > 0 )
        {
            let data = dataBlogs.slice(0, 9);
            setNewData(data);
        }
    }, [dataBlogs]);


    
    const handleAddNew = (blog) =>{
       
        let data = newData;
        data.unshift(blog);

        setShow(false);
        setNewData(data);
        console.log(">>>Check new data blog: ", newData);

    }
    const handleDeletePost = (id) =>{
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data);
    }
    return(
        <>
             <>
                <Button variant="primary" className="my-3" onClick={handleShow}>
                    + Add new blog
                </Button>
        
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <AddNewBlog handleAddNew={handleAddNew}/>  
                  
                </Modal.Body>
                </Modal>
            </>
            
            <div className="blogs-container">
            {isLoading === false && newData && newData.length > 0 && newData.map(item =>{
                return(
                    <div key={item.id} className="single-blog">
                        <div className="id" >
                            {item.id}
                        </div>
                        <div className="title" >
                            {item.title}
                        </div>
                        <div className="content" >
                            {item.body}
                        </div>
                        <button>
                            <Link to={`/blog/${item.id}`}>
                                View detail
                            </Link>
                        </button>
                        <button
                            onClick={()=>handleDeletePost(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                )
            }) 
        }
        {isLoading === true && 
            <div style={{textAlign : 'center !important', width: '100%'}}>
                Loading data....
            </div>
        }
            </div>
        
        </>
    )
}
export default Blog;
