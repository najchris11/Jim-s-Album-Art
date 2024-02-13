//Not required, but each top level page is passed in like this
//Could also load global css styles
function MyApp({ Component, pageProps}) {
    return <Component {...pageProps}/>
}

export default MyApp