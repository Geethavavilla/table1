import "./Hw2.css"
export function Hw2() {
    return (
        <>
        <div className="reg1">
            <h2>Register an account</h2>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
            <form>
                <div class="form-group">
                    <label for="Full name">Full name</label>
                    <input type="text" class="form-control" id="fullname" placeholder="Your full name"></input>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Your email"></input>
                </div>
                <div class="form-group">
                    <label for="Phone">Phone(optional)</label>
                    <input type="tel" class="form-control" id="tel" placeholder="Phone number"></input>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password"></input>
                </div>
                <div class="form-group">
                    <label for="confirmpassword">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmpassword" placeholder="Confirm Password"></input>
                </div>
                <div>
                    <p>Register as</p>
                    <input type="radio" name="one" value="customer"></input>
                    <label for="customer">I am a Customer</label>
                    <input type="radio" name="one" value="vendor"></input>
                    <label for="customer">I am a vendor</label>
                </div>
                <button type="submit" class="reg">Register →</button>
                <p>Already  have an account? <a>Login</a></p>
                <p>Or login with</p>
                <div class="social">
                    <button class="fb">Continue with Facebook</button>
                    <button class="gle">Continue with Google</button>
                    <button class ="lnk"> Countine with LinkedIn</button>
                </div>
            </form>
        </div>
    </>
    )
}


