import "../styles/globals.scss"
import type { AppProps } from "next/app"
// import Router from "next/router"
// import withAnalytics from "next-analytics"

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

// export default withAnalytics(Router, {
// 	ga: "UA-180443179-1",
// 	fbq: "1057209698033122",
// })(MyApp)

export default MyApp