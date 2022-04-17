const Member = (props) =>{
    // const Member = props.members;
    const {members, deleteDataMember} = props;
    
    const handleClickDelete= (id) => {
        deleteDataMember(id)
    }
    return(
        <div>
            <div className='Member-container'>
                <div className="name">
                    <h1>
                        {props.class}
                    </h1>
                </div>
                {members.map(item => {
                    return(
                        <div key={item.id}>
                             <li className='memberChild' >
                                name {item.name} - age {item.age} &nbsp; 
                                <button 
                                    onClick={()=> handleClickDelete(item.id)}
                                >Delete</button>
                             </li>
                        </div>
                   
                    )
                })}
            </div>
        </div>
    )
}
export default Member;