import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-table">    
          <Body/>  
      </div>
    </div>
  );
}

function Navbar(){
  return (
  <nav class="navbar  navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">React</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
  </nav>
)
}
function Body(){
  return(
    <div class="col-md-8">
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama</th>
          <th scope="col">Alamat</th>
          <th scope="col">No Handphone</th>
        </tr>
      </thead>
      <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alfalah Anugara</td>
      <td>Jakarta Selatan</td>
      <td>14045</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Budi Setiawan</td>
      <td>Bali</td>
      <td>114022</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Angel</td>
      <td>Surabaya</td>
      <td>114025</td>
    </tr>
  </tbody>
    </table>
    </div>
  )

}

export default App;
