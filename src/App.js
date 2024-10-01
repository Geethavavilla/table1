
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Employee } from './Components/Employee/Employee';

import { Student } from './Components/Students/Students';
import { Table } from './Components/Table/Table';
import { AppRouter } from './app.router';
import { Task1 } from './Components/Task1/Task1';



function App() {
  return (
    <>

      <Student></Student>
      <Employee></Employee>
      <Table></Table>
      <Task1></Task1>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>

    </>

  );
}

export default App;
