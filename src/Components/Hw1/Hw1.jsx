import "./Hw1.css"
export function Hw1(){
    return(
        <>
        <div class="login-container">
                <h2>Login to your account</h2>
                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                <form>
                    <div class="input-group">
                        <label for="email"></label>
                        <input type="email" id="email" placeholder="Email address" />
                    </div>
                    <div class="input-group">
                        <label for="password">-</label>
                        <input type="password" id="password" placeholder="Password" />
                    </div>
                    <div class="options">
                        <div>
                            <input type="checkbox" id="remember"/>
                                <label for="remember">Remember me</label>
                        </div>
                        <a>Forgot password?</a>
                    </div>
                    <button type="submit" class="login-button">Login →</button>
                </form>
                <p>Don't have an account? <a>Register now</a></p>
                <p>Or login with</p>
                <div class="social-buttons">
                    <button class="facebook">Continue with Facebook</button>
                    <button class="google">Continue with Google</button>
                    <button class ="link"> Countine with LinkedIn</button>

                </div>
            </div>
        </>
    )
}
    