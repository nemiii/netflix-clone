const Sliders = () => {
    const movies = [
        {
            name: "Interstellar",
            image: "images/uploads/slider1.jpg",
            type: ["Sci-fi"],
            rating: "7.4"
        },
        {
            name: "The revenant",
            image: "images/uploads/slider2.jpg",
            type: ["Action"],
            rating: "7.4"
        },
        {
            name: "Die hard",
            image: "images/uploads/slider3.jpg",
            type: ["Comedy"],
            rating: "7.4"
        },
        {
            name: "The walk",
            image: "images/uploads/slider4.jpg",
            type: ["Sci-fi", "Adventure"],
            rating: "7.4"
        },
        {
            name: "Interstellar",
            image: "images/uploads/slider1.jpg",
            type: ["Sci-fi"],
            rating: "7.4"
        },
        {
            name: "The revenant",
            image: "images/uploads/slider2.jpg",
            type: ["Action"],
            rating: "7.4"
        },
        {
            name: "Die hard",
            image: "images/uploads/slider3.jpg",
            type: ["Comedy"],
            rating: "7.4"
        },
        {
            name: "The walk",
            image: "images/uploads/slider4.jpg",
            type: ["Sci-fi", "Adventure"],
            rating: "7.4"
        }
    ]
    return (
        <div className="slider movie-items">
                <div className="container">
                    <div className="row">
                        <div className="social-link">
                            <p>Follow us: </p>
                            <a href="#"><i className="ion-social-facebook"></i></a>
                            <a href="#"><i className="ion-social-twitter"></i></a>
                            <a href="#"><i className="ion-social-googleplus"></i></a>
                            <a href="#"><i className="ion-social-youtube"></i></a>
                        </div>
                        <div className="slick-multiItemSlider">
                            {movies.length && movies.map((movie, index) => <div key={index} className="movie-item">
                                <div className="mv-img">
                                    <a href="#"><img src={movie.image} alt="" width="285" height="437" /></a>
                                </div>
                                <div className="title-in">
                                    <div className="cate">
                                        {movie.type.length && movie.type.map((type, i) => <span key={i} className={`${type === "Sci-fi" ? "blue" : type === "Action" ? "yell" : type === "Comedy" ? "green" : type === "Adventure" ? "orange" : ""}`}><a href="#">{type}</a></span>)}
                                    </div>
                                    <h6><a href="#">{movie.name}</a></h6>
                                    <p><i className="ion-android-star"></i><span>{movie.rating}</span> /10</p>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Sliders;