
import SignIn from './SignIn';
import AllTasksPage from './AllTasksPage';
import'./App.css'; 
import SignUp from './SignUp';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import Providers from './Context/Providers';
function App() {
  return (
  <Providers>
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
    </Providers>
  );
}

export default App;

