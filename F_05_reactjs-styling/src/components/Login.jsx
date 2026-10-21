import styles from "./Login.module.css";
import background from "../assets/leaves-bg.png";
import googleLogo from "../assets/google-icon.svg";
import facebookLogo from "../assets/facebook-icon.svg";

export default function Login() {
	return (
		<div className={styles.login}>
			<section className={styles.left}>
				<img src={background} alt="" className={styles.image} />
			</section>

			<section className={styles.right}>
				<h1 className={styles.greeting}>
					<span className={styles.hello}>Hello,</span>{" "}
					<span className={styles.name}>Guyss!</span>
				</h1>

				<div className={styles.tabs}>
					<button type="button" className={`${styles.tab} ${styles.active}`}>
						Login
					</button>
					<button type="button" className={styles.tab} disabled>
						SignUp
					</button>
				</div>

				<form className={styles.form}>
					<input
						className={styles.input}
						type="email"
						placeholder="Enter your email"
						aria-label="Email"
						required
					/>
					<input
						className={styles.input}
						type="password"
						placeholder="Enter Password"
						aria-label="Password"
						required
					/>
					<button type="submit" className={styles.submit}>
						Login
					</button>
				</form>

				<p className={styles.or}>Or</p>

				<div className={styles.social}>
					<button
						type="button"
						className={styles.socialBtn}
						aria-label="Continue with Google"
					>
						<img src={googleLogo} alt="" width="22" height="22" />
					</button>
					<button
						type="button"
						className={styles.socialBtn}
						aria-label="Continue with Facebook"
					>
						<img src={facebookLogo} alt="" width="22" height="22" />
					</button>
				</div>
			</section>
		</div>
	);
}