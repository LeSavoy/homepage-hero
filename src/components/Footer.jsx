import {
  jsIcon,
  reactIcon,
  tsIcon,
  databaseIcon,
  nodejsIcon,
  nextjsIcon,
  golangIcon,
  vueIcon,
  angularIcon,
} from "/src/assets/images/Icons";

const Footer = () => {
  return (
    <footer className="relative pt-20 bg-[#1C1C1C] h-96">
      <div className="text-center text-white">
        <h2 className="text-4xl font-semibold leading-tight">Learn Pratical Tech Skills from experts You Can Trust</h2>
        <p className="mt-2 text-gray-400 font-bold">
          With over 200 courses in JavaScript, React, and TypeScript to Node.js,
          Fullstack, and Background
        </p>
      </div>
      <div className="mt-12">
        <ul className="flex justify-center gap-12">
          <li>
            <img src={jsIcon} className="w-16" alt="" />
          </li>
          <li>
            <img src={reactIcon} className="w-16" alt="" />
          </li>
          <li>
            <img src={tsIcon} className="w-16" alt="" />
          </li>
          <li>
            <img src={databaseIcon} className="w-16" alt="" />
          </li>
          <li>
            <img src={nodejsIcon} className="w-16" alt="" />
          </li>
          <li>
            <img src={nextjsIcon} className="w-16" alt="" />
          </li>
          <li>
            <img src={golangIcon} className="w-16" alt="" />
          </li>
          <li>
            <img src={vueIcon} className="w-16" alt="" />
          </li>
          <li>
            <img src={angularIcon} className="w-16" alt="" />
          </li>
        </ul>
      </div>
      <div className="text-center text-white mt-10 text-lg">
        <p>Popular Learning Paths: <span className="text-orange-700">Beginner • Pofessional • Fullstack</span></p>
      </div>
    </footer>
  );
};

export default Footer;
