import React from "react"
import styles from "./Main.module.scss"

const Main: React.FC = ({ children }) => {

	return (
		<main className={styles.content}>
			{children}
		</main>
	)
}

export default Main