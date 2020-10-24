import React from "react";

export default function PublicPage() {
  return (
    <>
     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="/porsche.jpg" alt="porsche"/>

      <p className="vehicle-make">
   Porsche
        </p>
        <p className="vehicle-name">
   911
        </p>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/ferrari.jpg" alt="ferrari"/>
      <p className="vehicle-make">
  Ferrari
</p>
      <p className="vehicle-name">
  458 Italia
</p>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/supra.jpg" alt="supra"/>
      <p className="vehicle-toyota">
Toyota
</p>
<p className="vehicle-supra">
Supra
</p>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

    </>
  );
}
