import {Link, Route, Routes} from "react-router-dom";
import Userhomepage from "./pages/Userhomepage";
import AddNewTask from "./pages/AddNewTask";
import Performance from "./pages/Performance";
import Registration from "./pages/Registration";
import TaskDetails from "./pages/TaskDetails";
import TeamTasks from "./pages/TeamTasks";
import Userlogin from "./pages/Userlogin";
import Welcome from "./pages/Welcome";
import Error from "./pages/Error";
import TaskEdit from "./pages/TaskEdit";

import './css/common.css';

import DummyNav from "./components/DummyNav";
import SuccessComp from "./pages/SuccessComp";


function App() {
  return (
    <>
      {/* <DummyNav/> */}
      <Routes>
        <Route path="/" element={< Welcome />} />
        <Route path="/userhomepage" element={<Userhomepage />} />
        <Route path="/addnewtask" element={<AddNewTask />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/taskdetails/:taskid" element={<TaskDetails />} />
        <Route path="/taskdedit/:taskid" element={<TaskEdit />} />
        <Route path="/teamtasks" element={<TeamTasks />} />
        <Route path="/userlogin" element={<Userlogin />} />
        
        <Route path="/successful" element={<SuccessComp />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      
    </>
  );
}

export default App;
