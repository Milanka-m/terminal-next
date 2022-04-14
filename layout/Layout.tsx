import React from "react"
import styles from "./Layout.module.scss"
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import Head from "next/head"
import classNames from "classnames"

interface ILayoutProps {
	title?: string
	desc?: string
	ogTitle?: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title, desc, ogTitle }) => {
	
	const [isArrowUp, setIsArrowUp] = React.useState<boolean>(false);

	React.useEffect(() => {
    if (window.scrollY >= 800) {
      setIsArrowUp((pre) => !pre)
    }  
  }, [])

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={desc} />
				<meta name='og:title' content={ogTitle} />
				<link href="https://fonts.googleapis.com/css2?family=Antic&display=swap" rel="stylesheet" />
				<link rel='icon' href='/favicon-terminal-m.ico' />
			</Head>
			<div className={styles.page}>
				<div className={styles.root}>
					<Header/>
					<Main>
						{children}
					</Main>
					<Footer/>
					<button 
						className={classNames(styles.upButton,
							{[styles.upButton_visibility]: isArrowUp })}
						onClick={() => window.scrollTo(0, 0)}
					>
					</button>
				</div>
			</div>
		</>
	)
}

export default Layout
