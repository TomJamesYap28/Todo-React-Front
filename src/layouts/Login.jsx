import loginimg from '../assets/img/login-img.jpg';

function Login(){

    return(
        <div className="login-container">
            <div className="login-row">
                <div className="login-image">
                    <img src={loginimg} alt="Login Image" />
                </div>
                <div className="login-form">
                    <h1>Hello Again!</h1>
                    <h3><strong>Login your Account</strong></h3>
                    <div className="login-inputs">
                        <input type="hidden" value="login" name="trans" />
                        <input type="text" id="username" name="username" placeholder="Enter Username" required /><br /><br />
                        <input type="password" id="password" name="password" placeholder="Enter Password" required /><br /><br />
                        <button type="submit" className="btn btn-primary" >Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login