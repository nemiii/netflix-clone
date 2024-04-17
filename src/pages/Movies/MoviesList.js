const MoviesList = () => {
    return (
        <div className="page-single movie_list">
	<div className="container">
		<div className="row ipad-width2">
			<div className="col-md-8 col-sm-12 col-xs-12">
				<div className="topbar-filter">
					<p>Found <span>1,608 movies</span> in total</p>
					<label>Sort by:</label>
					<select>
						<option value="popularity">Popularity Descending</option>
						<option value="popularity">Popularity Ascending</option>
						<option value="rating">Rating Descending</option>
						<option value="rating">Rating Ascending</option>
						<option value="date">Release date Descending</option>
						<option value="date">Release date Ascending</option>
					</select>
					<a href="movielist.html" className="list"><i className="ion-ios-list-outline active"></i></a>
					<a  href="moviegrid.html" className="grid"><i className="ion-grid"></i></a>
				</div>
				<div className="movie-item-style-2">
					<img src="images/uploads/mv1.jpg" alt=""/>
					<div className="mv-item-infor">
						<h6><a href="moviesingle.html">oblivion <span>(2012)</span></a></h6>
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
						<h6><a href="moviesingle.html">into the wild <span>(2014)</span></a></h6>
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
						<h6><a href="moviesingle.html">blade runner  <span>(2015)</span></a></h6>
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
						<h6><a href="moviesingle.html">Mulholland pride<span> (2013)  </span></a></h6>
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
						<h6><a href="moviesingle.html">skyfall: evil of boss<span> (2013)  </span></a></h6>
						<p className="rate"><i className="ion-android-star"></i><span>7.0</span> /10</p>
						<p className="describe">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
						<p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
						<p>Director: <a href="#">Alan Taylor</a></p>
						<p>Stars: <a href="#">Chris Hemsworth,  </a> <a href="#">  Natalie Portman,</a><a href="#">Tom Hiddleston</a></p>
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
						<a href="#"><i className="ion-arrow-right-b"></i></a>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-12 col-xs-12">
				<div className="sidebar">
					<div className="searh-form">
						<h4 className="sb-title">Search for movie</h4>
						<form className="form-style-1" action="#">
							<div className="row">
								<div className="col-md-12 form-it">
									<label>Movie name</label>
									<input type="text" placeholder="Enter keywords"/>
								</div>
								<div className="col-md-12 form-it">
									<label>Genres & Subgenres</label>
									<div className="group-ip">
										<select
											name="skills" multiple="" className="ui fluid dropdown">
											<option value="">Enter to filter genres</option>
											<option value="Action1">Action 1</option>
					                        <option value="Action2">Action 2</option>
					                        <option value="Action3">Action 3</option>
					                        <option value="Action4">Action 4</option>
					                        <option value="Action5">Action 5</option>
										</select>
									</div>
									
								</div>
								<div className="col-md-12 form-it">
									<label>Rating Range</label>
									
									 <select>
										<option value="range">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
									</select>
									
								</div>
								<div className="col-md-12 form-it">
									<label>Release Year</label>
									<div className="row">
										<div className="col-md-6">
											<select>
												<option value="range">From</option>
												<option value="number">10</option>
												<option value="number">20</option>
												<option value="number">30</option>
											</select>
										</div>
										<div className="col-md-6">
											<select>
												<option value="range">To</option>
												<option value="number">20</option>
												<option value="number">30</option>
												<option value="number">40</option>
											</select>
										</div>
									</div>
								</div>
								<div className="col-md-12 ">
									<input className="submit" type="submit" value="submit"/>
								</div>
							</div>
						</form>
					</div>
					<div className="ads">
						<img src="images/uploads/ads1.png" alt=""/>
					</div>
					<div className="sb-facebook sb-it">
						<h4 className="sb-title">Find us on Facebook</h4>
						<iframe src="" data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhaintheme%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"  height="315" style={{width:"100%", border: "none", overflow:"hidden"}} ></iframe>
					</div>
					<div className="sb-twitter sb-it">
						<h4 className="sb-title">Tweet to us</h4>
						<div className="slick-tw">
							<div className="tweet item" id="599202861751410688">
							</div>
							<div className="tweet item" id="297462728598122498">
							</div>
						</div>							
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    );
};

export default MoviesList;