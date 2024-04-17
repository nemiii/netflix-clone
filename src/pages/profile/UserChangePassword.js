const UserChangePassword = () => {
    return (
        <div className="col-md-9 col-sm-12 col-xs-12">
        <div className="form-style-1 user-pro" action="">
          <form action="" className="password">
            <h4>Change password</h4>
            <div className="row">
              <div className="col-md-6 form-it">
                <label>Old Password</label>
                <input type="text" placeholder="**********" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-it">
                <label>New Password</label>
                <input type="text" placeholder="***************" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-it">
                <label>Confirm New Password</label>
                <input type="text" placeholder="*************** " />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input className="submit" type="submit" value="change" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default UserChangePassword;