import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './component/Home'
import Layout from './Layout'
import Blogpost from './component/Blogpost'
import Homecat from './component/Homecat'
const App=()=> (
  <Router>
    <Switch>
      <Layout>
     
      <Route exact path='/' component={Home} />
      <Route exact path='/search/:category' component={Homecat} />
      <Route exact path='/post/:blogname' component={Blogpost} />
      </Layout>
    </Switch>
  </Router>
 
)
export default App;
