import Link from "next/link"
export default function Coubtry(){
return(
  <div className="bg-slate-200">
    <h1 className=" p-3 text-2xl text-center text-slate-800 font-bold h-screen place-content-center "><Link href="page/country/[country].tsx">Country List</Link></h1>
  </div>
)
}
