import Navbar from './Navbar';
import Home from './Home';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import Admin from './data/Admin';
function App() {
  //write any javascript before return because return has jsx
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
     <Switch>
       <Route exact path='/'>
        <Home />
       </Route>
       <Route exact path='/Create'>
         <Create />
       </Route>
       <Route  path='/blogs/:id'>
         <BlogDetails />
       </Route>
       <Route path='/admin'><Admin /></Route>
     </Switch>
      </div>
     
    </div>
    </Router>
  );
}

export default App;
