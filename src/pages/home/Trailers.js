const Trailers = () => {
	const movies = [
		{
			name: "Wonder Woman",
			video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
			image: "images/uploads/trailer7.jpg",
			duration: "2:30"
		},
		{
			name: "Oblivion: Official Teaser Trailer",
			video: "https://www.youtube.com/embed/w0qQkSuWOS8",
			image: "images/uploads/trailer2.jpg",
			duration: "2:37"
		},
		{
			name: "Exclusive Interview:  Skull Island",
			video: "https://www.youtube.com/embed/44LdLqgOpjo",
			image: "images/uploads/trailer6.jpg",
			duration: "2:44"
		},
		{
			name: "Logan: Director James Mangold Interview",
			video: "https://www.youtube.com/embed/gbug3zTm3Ws",
			image: "images/uploads/trailer6.jpg",
			duration: "2:43"
		},
		{
			name: "Beauty and the Beast: Official Teaser Trailer 2",
			video: "https://www.youtube.com/embed/e3Nl_TCQXuw",
			image: "images/uploads/trailer6.jpg",
			duration: "2:32"
		},
		{
			name: "Fast&Furious 8",
			video: "https://www.youtube.com/embed/NxhEZG0k9_w",
			image: "images/uploads/trailer6.jpg",
			duration: "3:11"
		}
	];

	const celebrities = [
		{
			name: "Samuel N. Jack",
			image: "images/uploads/ava1.jpg",
			profession: "Actor"
		},
		{
			name: "Benjamin Carroll",
			image: "images/uploads/ava2.jpg",
			profession: "Actor"
		},
		{
			name: "Beverly Griffin",
			image: "images/uploads/ava3.jpg",
			profession: "Actor"
		},
		{
			name: "Justin Weaver",
			image: "images/uploads/ava4.jpg",
			profession: "Actor"
		}
	]
	return (
		<div className="trailers full-width">
			<div className="row ipad-width">
				<div className="col-md-9 col-sm-12 col-xs-12">
					<div className="title-hd">
						<h2>in theater</h2>
						<a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
					</div>
					<div className="videos">
						<div className="slider-for-2 video-ft">
							{movies.length && movies.map((movie, index) => <div key={index}>
								<iframe className="item-video" src="" data-src={movie.video}></iframe>
							</div>)}
						</div>
						<div className="slider-nav-2 thumb-ft">
							{movies.length && movies.map((movie, index) => <div key={index} className="item">
								<div className="trailer-img">
									<img src={movie.image} alt={movie.name} width="4096" height="2737" />
								</div>
								<div className="trailer-infor">
									<h4 className="desc">{movie.name}</h4>
									<p>{movie.duration}</p>
								</div>
							</div>)}
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-12 col-xs-12">
					<div className="sidebar">
						<div className="celebrities">
							<h4 className="sb-title">Spotlight Celebrities</h4>
							{celebrities.length && celebrities.map((celeb, index) => <div key={index} className="celeb-item">
								<a href="#"><img src={celeb.image} alt="" width="70" height="70" /></a>
								<div className="celeb-author">
									<h6><a href="#">{celeb.name}</a></h6>
									<span>{celeb.profession}</span>
								</div>
							</div>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trailers;