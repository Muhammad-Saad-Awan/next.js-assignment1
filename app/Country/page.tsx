import Link from "next/link"
export default function StaticRoutes(){
    return(
        <div>
                <h1><Link href="/Country/Pakistan">Pakistan</Link></h1>
                <h1><Link href="/Country/India">India</Link></h1>
                <h1><Link href="/Country/Australia">Australia</Link></h1>
                <h1><Link href="/Country/Germany">Germany</Link></h1>
                <h1><Link href="/Country/Malaysia">Malaysia</Link></h1>
        </div>
    )
}