import React from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-5 ">Welcome to my Galllery</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col"><div class="card" >
            <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="200px" width="150px" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
          <div className="col"><div class="card" >
            <img src="https://picsum.photos/200/302" class="card-img-top" alt="..." height="200px" width="150px" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
          <div className="col"><div class="card" >
            <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px" width="150px" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
        </div>
      </div>


      <div className="container text-center my-5 ">
        <div className="row">
          <div className="col"><div class="card" >
            <img src="https://picsum.photos/200/304" class="card-img-top" alt="..." height="200px" width="150px" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
          <div className="col"><div class="card" >
            <img src="https://picsum.photos/200/305" class="card-img-top" alt="..." height="200px" width="150px" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
          <div className="col"><div class="card" >
            <img src="https://picsum.photos/201/307" class="card-img-top" alt="..." height="200px" width="150px" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
        </div>
      </div>

    </React.Fragment>

  );
}

export default App;
