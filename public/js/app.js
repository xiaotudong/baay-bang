 const App = React.createClass({
     render:function() {
     return <div id="myCarousel" className="carousel slide">

         <ol className="carousel-indicators">
             <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
             <li data-target="#myCarousel" data-slide-to="1"></li>
             <li data-target="#myCarousel" data-slide-to="2"></li>
         </ol>

         <div className="carousel-inner">
             <div className="item active">
                 <img src="../images/5.jpg" alt="" />
                 <div class="carousel-caption">cute baby</div>
             </div>
             <div className="item">
                 <img src="../images/1.jpg" alt="" />
                 <div class="carousel-caption">lively baby</div>
             </div>
             <div className="item">
                 <img src="../images/2.jpg" alt="" />
                 <div class="carousel-caption">adorable baby</div>
             </div>
         </div>

         <a className="carousel-control left" href="#myCarousel"
            data-slide="prev">&lsaquo;</a>
         <a className="carousel-control right" href="#myCarousel"
            data-slide="next">&rsaquo;</a>
     </div>
     }
 });
 ReactDOM.render(<App />, document.getElementById('content'));