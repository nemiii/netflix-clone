const Latest = () => {
    return (
        <div className="latestnew full-width">
		<div className="row">
			<div className="col-md-9">
				<div className="ads adsv2">
					<img src="images/uploads/ads2.png" alt=""/>
				</div>
				<div className="title-hd">
					<h2>Latest news</h2>
					<a href="bloggrid.html" className="viewall">see all news <i className="ion-ios-arrow-right"></i></a>
				</div>
				<div className="latestnewv2">
					<div className="blog-item-style-2">
						<a href="blogdetail.html"><img src="images/uploads/blogv21.jpg" alt=""/></a>
						<div className="blog-it-infor">
							<h3><a href="blogdetail.html">Godzilla: King Of The Monsters Adds O’Shea Jackson Jr</a></h3>
							<span className="time">27 Mar 2017</span>
							<p>Looks like Kong: Skull Island started a tradition with its casting of Straight ...</p>
						</div>
					</div>
					<div className="blog-item-style-2">
						<a href="blogdetail.html"><img src="images/uploads/blogv22.jpg" alt=""/></a>
						<div className="blog-it-infor">
							<h3><a href="blogdetail.html">First Official Images of Alicia Vikander As Tomb Raider’s Lara Croft</a></h3>
							<span className="time">27 Mar 2017</span>
							<p>Aside from the her digital incarnation, the most recognisable image of Tomb ...</p>
						</div>
					</div>
					<div className="blog-item-style-2">
						<a href="blogdetail.html"><img src="images/uploads/blogv23.jpg" alt=""/></a>
						<div className="blog-it-infor">
							<h3><a href="blogdetail.html">New Spider-Man: Homecoming Poster Finds Peter Parker At Rest</a></h3>
							<span className="time">27 Mar 2017</span>
							<p>He might be a primary protector of New York City, but at heart, Peter Parker is ...</p>
						</div>
					</div>
					<div className="blog-item-style-2">
						<a href="blogdetail.html"><img src="images/uploads/blogv24.jpg" alt=""/></a>
						<div className="blog-it-infor">
							<h3><a href="blogdetail.html">Joseph Gordon-Levitt Directing Moive Musical Comedy Wingmen</a></h3>
							<span className="time">27 Mar 2017</span>
							<p>A little over a year ago, we learned that Joseph Gordon-Levitt and Channing ...</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-3">
				<div className="sidebar">
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
    );
};

export default Latest;