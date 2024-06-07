import background from "/src/assets/background.jpg";
import 'boxicons'

const Hero = () => {
  return (
    <main className="w-full h-[900px] font-poppins shadow-gray-400 shadow-2xl">
      <img
        src={background}
        className="w-full h-[900px] object-cover absolute z-0 opacity-95"
        alt=""
      />
      <div className="relative text-white ml-32 flex flex-col justify-center h-full">
        <h3 className="text-2xl" >In-Depth Frontend & Fullstack Courses</h3>
        <h1 className="text-5xl font-semibold leading-tight mt-2">Your path to Senior <br /> Developer and Beyond</h1>
        <div className="flex items-center gap-3">
        <box-icon name='quote-alt-left' type='solid' color='#dc5f00'></box-icon>
        <p className="mt-8">
          Teaching classes has put me in a position where i have to <br /> produce at a
          level that pushes me beyond my comfort zone.
        </p>
        </div>

        <div className="mt-4 flex gap-3 ">
        <span className="font-semibold text-lg ml-9">Scott Moss</span>
        <span className="text-gray-400">Superfilter AI</span>
        </div>

        <div className="flex text-lg gap-6 mt-8">
          <button className="px-9 bg-orange-700 py-4 rounded-3xl hover:bg-navOrange transition-all">Browse Our Courses</button>
          <button className="px-9 bg-navOrange py-4 rounded-3xl hover:bg-orange-700 transition-all">View Learning Paths</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
