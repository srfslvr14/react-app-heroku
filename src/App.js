import './App.css';
import Layout from './Comp/NavLayout.js' 

// import 'materialize/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import M from 'materialize-css'

function App() {

  M.AutoInit();
  
  return (
    <div>
      <Layout/>  
    </div>
  );
}

export default App;
