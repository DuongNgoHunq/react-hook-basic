import logo from './logo.svg';
import './App.scss';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Member from './views/Member';
import Covid  from './views/Covid';
import  {NewCountDown, CountdownClass} from './views/Countdoun'; 
import Test from './views/test';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import NotFound from './views/NotFound';
import YoutubeSearch from './views/YoutubeSearch';

function App() {
  const[address, setAddress] = useState('');
  const [members, setMember] = useState([
    {id: "todo1", name: "Dương Ngô Hùng" , age: 19, classType: 'react'},
    {id: "todo2", name: "Ngụy Minh Thắng", age: 20, classType: 'react'} ,
    {id: "todo3", name: "Nguyễn Anh Thư", age: 21, classType: 'react'},
    {id: "todo4", name: "Bế Trọng Hiếu" , age: 19, classType: 'java'},
    {id: "todo5", name: "Trần Văn Hợp", age: 20, classType: 'java' },
    {id: "todo6", name: "Lê Thanh Tùng", age: 21, classType: 'java'}
  ]);
  const handleEventClick = (event) =>{
    if(!address){
      alert("Empty input!")
      return;
    }
      const newMember= {
        id: Math.floor((Math.random() * 10000) + 1), 
        name : address, 
        classType :"react"}
      setMember([...members, newMember])
      setAddress('')
  }
  // event onchange input
  const handleOnchangeInput = (event) =>{
    setAddress(event.target.value)
  }

  const deleteDataMember = (id) =>{
    let currentMembers = members;
    currentMembers = currentMembers.filter(members => members.id !== id)
    setMember(currentMembers)
  }
// 
  useEffect(() =>{
    // console.log('run use effect');
  }, [address])

  useEffect(() =>{
    // console.log('run use effect members');
  }, [members])
  // re-render

  const onTimesUp = () =>{
    // alert('timesup')
  }

  return (
     <BrowserRouter>
      <div className="App">
       
       <header className="App-header">
       <Nav />
         <img src={logo} className="App-logo" alt="logo" />
        
       </header>
       <div >
        <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/listmembers">
              <Member
                members = {members.filter(item => item.classType === 'react')}
                class = {'React class members'}
                deleteDataMember = {deleteDataMember}
              />
              <br/>
              <label>Name -- </label>
              <input type="text" value={address}
                onChange = {(event) => handleOnchangeInput(event)} 
              />
              <button
                  onClick={(event) => handleEventClick(event)}
              >Add</button>
            </Route>
            <Route path="/timer">
              <CountdownClass onTimesUp= {onTimesUp}/>
              <span>------------------------------------</span>
              <NewCountDown onTimesUp = {onTimesUp}/>
            </Route>
            <Route path="/blog" exact>
              <Blog/>
            </Route>
            <Route path="/blog/:id">
              <DetailBlog />
            </Route>
            <Route path="/addnewblog">
               <AddNewBlog/>
            </Route>
            <Route path="/secret">
              <YoutubeSearch/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      
     </div>
    </BrowserRouter>    
  );
}

export default App;
