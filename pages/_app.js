import './global.css'

//Not required, but each top level page is passed in like this
//Could also load global css styles
function MyApp({ Component, pageProps}) {
    return <>
    <div className='header'>Header</div>
    <Component {...pageProps}/>
    </>
}

export default MyApp