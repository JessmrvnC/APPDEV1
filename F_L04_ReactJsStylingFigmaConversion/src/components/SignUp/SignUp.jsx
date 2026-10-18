import shared from "../Login/Login.module.css";
import styles from "./SignUp.module.css";
import logo from "../../assets/logo.svg";

export default function SignUp() {
    return (
        <div className={shared.login}>
            <section className={shared.left}>
                <h1 className={shared.tagline}>
                    Need webdesign<br />
                    for your business?<br />
                    <strong>Design Spacee</strong><br />
                    will help you.
                </h1>
                <img className={shared.logo} src={logo} alt="Design Spacee logo" />
                <p className={shared.link}>figma.com/@designspacee</p>
            </section>

            <section className={shared.right}>
                <div className={`${shared.form} ${styles.form}`}>
                    <h2 className={styles.heading}>Create Account</h2>
                    <div className={styles.social}>
                        <button className={styles.socialButton} type="button">Sign up with Google</button>
                        <button className={styles.socialButton} type="button">Sign up with Facebook</button>
                    </div>
                    <p className={styles.divider}>OR</p>
                    <form onSubmit={(event) => event.preventDefault()}>
                        <input type="text" name="fullName" placeholder="Full Name" aria-label="Full Name" autoComplete="name" required />
                        <input type="email" name="email" placeholder="Email" aria-label="Email" autoComplete="email" required />
                        <input type="password" name="password" placeholder="Password" aria-label="Password" autoComplete="new-password" required />
                        <button type="submit">Create Account</button>
                    </form>
                    <p className={shared.signup}>
                        Already have an account? <span>Login</span>
                    </p>
                </div>
            </section>
        </div>
    );
}
