import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import './Blogs.scss';

const DetailBlog = () =>{
    let { id } = useParams();
    let history = useHistory();
    
    const {data: dataBlogDetail, isLoading, isError} = 
    
    useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

    console.log(">>> check data detail: ", dataBlogDetail);
    const handleBackData=()=>{
        history.push("/blog");
    }
    return(
        <>
            
            <h1>
                <span style={{color:'red'}}
                    onClick={handleBackData}
                >
                &lt;--&nbsp;Back&nbsp;    
                </span>
                Detail Blog {id}
            </h1>
            <div className="blog-detail">
                {dataBlogDetail &&
                    <>
                        <div className="title" >
                        Blog ID: {id} --- {isLoading ? 'Loading data ...' : dataBlogDetail.title}
                        </div>
                        <div className="content" >
                            {dataBlogDetail.body}
                        </div>
                    </>
                }
            </div>
        </>
      
    )
}
export default DetailBlog;