import { useState } from "react";
import UserProfile from "./UserProfile";
import UserFavorites from "./UserFavorites";
import UserRated from "./UserRated";
import UserChangePassword from "./UserChangePassword";
import UserHero from "./UserHero";

const Profile = () => {
  const [active , setActive] = useState("profile");

  const handleProfileActivity = (section) => {
    setActive(section);
  }

  return (
    <>
      <UserHero />
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="user-information">
                <div className="user-img">
                  <a href="#"><img src="images/uploads/user-img.png" alt="" /><br /></a>
                  <a href="#" className="redbtn">Change avatar</a>
                </div>
                <div className="user-fav">
                  <p>Account Details</p>
                  <ul>
                    <li className={`${active === "profile" && 'active'}`}><a onClick={() => handleProfileActivity("profile")}>Profile</a></li>
                    <li className={`${active === "favorite" && 'active'}`}><a onClick={() => handleProfileActivity("favorite")}>Favorite movies</a></li>
                    <li className={`${active === "rated" && 'active'}`}><a onClick={() => handleProfileActivity("rated")}>Rated movies</a></li>
                  </ul>
                </div>
                <div className="user-fav">
                  <p>Others</p>
                  <ul>
                    <li className={`${active === "password" && 'active'}`}><a onClick={() => handleProfileActivity("password")}>Change password</a></li>
                    <li><a href="#">Log out</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {active === "profile" && <UserProfile />}
            {active === "favorite" && <UserFavorites />}
            {active === "rated" && <UserRated />}
            {active === "password" && <UserChangePassword />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;