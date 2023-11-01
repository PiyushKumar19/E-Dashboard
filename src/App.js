import './App.css';
import Nav from './components/Nav';
// It enables the routing and links in app
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     {/* all the elements should be inside the BrowserRouter tag to implement links in them, like Nav */}
      <BrowserRouter>
        <Nav></Nav>
        {/* All routes are defined in this which loads the pages. */}
        {/* Both Routes and Route come from react-router-dom */}
        <Routes>
          {/* Route are used to load the pages from the path and the element attribute loads the element as it is. */}
          <Route path='/' element={<h1>Product Listing Component</h1>}></Route>
          {/* defined path in the attribute will be shown into the route url */}
          <Route path='/add' element={<h1>Add Product Component</h1>}></Route>
          <Route path='/update' element={<h1>Update Product Component</h1>}></Route>
          <Route path='/logout' element={<h1>Logout Component</h1>}></Route>
          <Route path='/profile' element={<h1>Profile Component Component</h1>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
