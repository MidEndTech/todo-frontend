
import SignIn from './SignIn';
import AllTasksPage from './AllTasksPage';
import'./App.css'; 
import SignUp from './SignUp';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
function App() {
  return (
    // <div>
    //   <SignIn/>
    //   {/* <SignUp/> */}
    //   {/* <AllTasksPage/> */}
    // </div>
    <div>
    <Routes>
      {/* <Route index element={<SignIn/>}/> */}
      <Route path='/' element={<SignIn/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    </div>
  );
}

export default App;

