import "../styles/global.css"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return(
        <>
            <div>
                <h1>Site Name</h1>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <Link className={router.pathname == '/' ? "active" : ""} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == '/about' ? "active" : ""} href="/about">About</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == '/blog' ? "active" : ""} href="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Component {...pageProps} />
            <p>Footer</p>
        </>
    )
}