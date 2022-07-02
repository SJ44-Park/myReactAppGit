/*eslint-disable*/
import logo from './logo.svg';
import './App.css';

import Customer from './components/Customer'

const studentData = {
  'name': 'James Bond',
  'idnum': '2022120009',
  'hobby': 'ski',
  'city': 'Busan'
}


function App() {
  return (
    <div className="gray-background">
      <img src={logo} lat="logo" />
      <h2>my First Reat Web App Page </h2>
      <Customer
        name={studentData.name}
        idnum={studentData.idnum}
        hobby={studentData.hobby}
        city={studentData.city} />
    </div>
  );
}

export default App;
