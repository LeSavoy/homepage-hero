import { MagnifyingGlass } from "@phosphor-icons/react"
const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center w-full h-16 bg-navGrey px-32 font-poppins text-slate-300 tracking-wide">
        <div className="flex mr-10 items-center">Frontend <span className="mb-2 font-rockSal text-2xl text-navOrange">Masters</span></div>

        <div className="">
          <ul className="flex gap-10 cursor-pointer">
            <li className="relative custom-underline">Features</li>
            <li className="relative custom-underline">Courses</li>
            <li className="relative custom-underline">Learn</li>
            <li className="relative custom-underline">Workshops</li>
            <li className="relative custom-underline">Blog</li>
            <li className="relative custom-underline">Pricing</li>
          </ul>
        </div>

        <div className="flex items-center w-full justify-end gap-10">
        <MagnifyingGlass size={32} color="#fff" className="cursor-pointer" />
        <button className="bg-navOrange px-7 py-2 rounded-3xl hover:bg-orange-700 transition-all">Join Now</button>
        <a href="#" className="underline">Login</a>
        </div>
      </nav>

      <div className="h-1 bg-navOrange" />
    </header>
  )
}

export default Navbar