import React from 'react';
import './App.css';
import Filter from './components/filter';
import AboutUs from './components/aboutus';
import Dropdown from './components/dropdown';
function App() {
  let carBrands = ["Audi","BMW","Ford","Lamborgini","Ferrari"];
  let carModel = ["blah", "blah1","blah2","blah3"]
  let carYear = [2010, 2011 ,2012,2013]
  return (
    <>
    <Dropdown header={"HKi"} list={carBrands}/>
    </>
  );
}

export default App;
