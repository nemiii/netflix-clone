import { useState } from "react";

const MovieItem = ({ movies }) => {
	return (
		<div className="row">
			<div className="slick-multiItem2">
				{movies.length && movies.map((movie, index) => <div key={index} className="slide-it">
					<div className="movie-item">
						<div className="mv-img">
							<img src={movie.image} alt="" />
						</div>
						<div className="hvr-inner">
							<a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
						</div>
						<div className="title-in">
							<h6><a href="#">{movie.name}</a></h6>
							<p><i className="ion-android-star"></i><span>{movie.rating}</span> /10</p>
						</div>
					</div>
				</div>)}
			</div>
		</div>
	);
}

const Movies = () => {
	const [active, setActive] = useState("popular");
	const movies = [
		{
			name: "Interstellar",
			image: "images/uploads/mv-it1.jpg",
			type: ["Sci-fi"],
			rating: "7.4"
		},
		{
			name: "The revenant",
			image: "images/uploads/mv-it2.jpg",
			type: ["Action"],
			rating: "7.4"
		},
		{
			name: "Die hard",
			image: "images/uploads/mv-it3.jpg",
			type: ["Comedy"],
			rating: "7.4"
		},
		{
			name: "The walk",
			image: "images/uploads/mv-it4.jpg",
			type: ["Sci-fi", "Adventure"],
			rating: "7.4"
		},
		{
			name: "Interstellar",
			image: "images/uploads/mv-it5.jpg",
			type: ["Sci-fi"],
			rating: "7.4"
		},
		{
			name: "The revenant",
			image: "images/uploads/mv-it6.jpg",
			type: ["Action"],
			rating: "7.4"
		},
		{
			name: "Die hard",
			image: "images/uploads/mv-it7.jpgg",
			type: ["Comedy"],
			rating: "7.4"
		},
		{
			name: "The walk",
			image: "images/uploads/mv-it8.jpg",
			type: ["Sci-fi", "Adventure"],
			rating: "7.4"
		}
	];

	const handleActiveMovie = (section) => {
		setActive(section);
	}
	return (
		<div className="movie-items  full-width">
			<div className="row">
				<div className="col-md-12">
					<div className="title-hd">
						<h2>in theater</h2>
						<a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
					</div>
					<div className="tabs">
						<ul className="tab-links">
							<li className={`${active === "popular" && "active"}`}><a onClick={() => handleActiveMovie("popular")} href="#tab1-h2">#Popular</a></li>
							<li className={`${active === "comingsoon" && "active"}`}><a onClick={() => handleActiveMovie("comingsoon")} href="#tab2-h2"> #Coming soon</a></li>
							<li className={`${active === "toprated" && "active"}`}><a onClick={() => handleActiveMovie("toprated")} href="#tab3-h2">  #Top rated  </a></li>
							<li className={`${active === "mostviewed" && "active"}`}><a onClick={() => handleActiveMovie("mostviewed")} href="#tab4-h2"> #Most reviewed</a></li>
						</ul>
						<div className="tab-content">
							<div id="tab1-h2" className={`tab ${active === "popular" && "active"}`}>
								<MovieItem movies={movies} />
							</div>
							<div id="tab2-h2" className={`tab ${active === "comingsoon" && "active"}`}>
								<MovieItem movies={movies} />
							</div>
							<div id="tab3-h2" className={`tab ${active === "toprated" && "active"}`}>
								<MovieItem movies={movies} />
							</div>
							<div id="tab4-h2" className={`tab ${active === "mostviewed" && "active"}`}>
								<MovieItem movies={movies} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Movies;