
import SignIn from './SignIn';
import AllTasksPage from './AllTasksPage';
import'./App.css'; 
import SignUp from './SignUp';
import { BrowserRouter,Route,Router } from 'react-router-dom';
function App() {
  return (
    // <div>
    //   <SignIn/>
    //   {/* <SignUp/> */}
    //   {/* <AllTasksPage/> */}
    // </div>
    <div>
    <BrowserRouter>
    <Router>
      <Route index element={<SignIn/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    </Router>
    </BrowserRouter>
    </div>
  );
}

export default App;

