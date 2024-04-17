const UserFavorites = () => {
    return (
        <div className="col-md-9 col-sm-12 col-xs-12">
        <div className="topbar-filter user">
            <p>Found <span>1,608 movies</span> in total</p>
            <label>Sort by:</label>
            <select>
                <option value="range">-- Choose option --</option>
                <option value="saab">-- Choose option 2--</option>
            </select>
            <a href="userfavoritelist.html" className="list"><i className="ion-ios-list-outline active"></i></a>
            <a  href="userfavoritegrid.html" className="grid"><i className="ion-grid "></i></a>
        </div>
        <div className="flex-wrap-movielist user-fav-list">
            <div className="movie-item-style-2">
                <img src="images/uploads/mv1.jpg" alt=""/>
                <div className="mv-item-infor">
                    <h6><a href="#">oblivion <span>(2012)</span></a></h6>
                    <p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
                    <p className="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                    <p>Director: <a href="#">Joss Whedon</a></p>
                    <p>Stars: <a href="#">Robert Downey Jr.,</a> <a href="#">Chris Evans,</a> <a href="#">  Chris Hemsworth</a></p>
                </div>
            </div>
            <div className="movie-item-style-2">
                <img src="images/uploads/mv2.jpg" alt=""/>
                <div className="mv-item-infor">
                    <h6><a href="#">into the wild <span>(2014)</span></a></h6>
                    <p className="rate"><i className="ion-android-star"></i><span>7.8</span> /10</p>
                    <p className="describe">As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...</p>
                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                    <p>Director: <a href="#">Anthony Russo,</a><a href="#">Joe Russo</a></p>
                    <p>Stars: <a href="#">Chris Evans,</a> <a href="#">Samuel L. Jackson,</a> <a href="#">  Scarlett Johansson</a></p>
                </div>
            </div>
            <div className="movie-item-style-2">
                <img src="images/uploads/mv3.jpg" alt=""/>
                <div className="mv-item-infor">
                    <h6><a href="#">blade runner  <span>(2015)</span></a></h6>
                    <p className="rate"><i className="ion-android-star"></i><span>7.3</span> /10</p>
                    <p className="describe">Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...</p>
                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                    <p>Director: <a href="#">Peyton Reed</a></p>
                    <p>Stars: <a href="#">Paul Rudd,</a> <a href="#"> Michael Douglas</a></p>
                </div>
            </div>
            <div className="movie-item-style-2">
                <img src="images/uploads/mv4.jpg" alt=""/>
                <div className="mv-item-infor">
                    <h6><a href="#">Mulholland pride<span> (2013)  </span></a></h6>
                    <p className="rate"><i className="ion-android-star"></i><span>7.2</span> /10</p>
                    <p className="describe">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                    <p>Director: <a href="#">Shane Black</a></p>
                    <p>Stars: <a href="#">Robert Downey Jr., </a> <a href="#">  Guy Pearce,</a><a href="#">Don Cheadle</a></p>
                </div>
            </div>
            <div className="movie-item-style-2">
                <img src="images/uploads/mv5.jpg" alt=""/>
                <div className="mv-item-infor">
                    <h6><a href="#">skyfall: evil of boss<span> (2013)  </span></a></h6>
                    <p className="rate"><i className="ion-android-star"></i><span>7.0</span> /10</p>
                    <p className="describe">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                    <p>Director: <a href="#">Alan Taylor</a></p>
                    <p>Stars: <a href="#">Chris Hemsworth,  </a> <a href="#">  Natalie Portman,</a><a href="#">Tom Hiddleston</a></p>
                </div>
            </div>
        </div>		
        <div className="topbar-filter">
            <label>Movies per page:</label>
            <select>
                <option value="range">5 Movies</option>
                <option value="saab">10 Movies</option>
            </select>
            
            <div className="pagination2">
                <span>Page 1 of 2:</span>
                <a className="active" href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">...</a>
                <a href="#">78</a>
                <a href="#">79</a>
                <a href="#"><i className="ion-arrow-right-b"></i></a>
            </div>
        </div>
    </div>
    );
  };
  
  export default UserFavorites;