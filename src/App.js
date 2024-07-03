
import SignIn from './SignIn';
import AllTasksPage from './AllTasksPage';
import'./App.css'; 
import SignUp from './SignUp';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
function App() {
  return (
  
    <div>
    <Routes>
      {/* <Route path='/' element={<AllTasksPage/>}/> */}
      <Route path='/' element={<SignIn/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/SignUp/AllTasksPage' element={<AllTasksPage/>}/>
      <Route path='/SignIn/AllTasksPage' element={<AllTasksPage/>}/>
      <Route path='/AllTasksPage' element={<AllTasksPage/>}/>
    </Routes>
    </div>
  );
}

export default App;

