function Interface() {
  return (
    <>
      <div className="container m-auto text-white text-center">
        <div className="w-full mt-8">
          <h2 className="text-xl">Bonjour, I am</h2>
          <h1 className="mt-1 text-3xl font-bold">Justin Etienne</h1>
          <h3 className="mt-1 text-lg italic">Front-end Developer</h3>
        </div>
        <div className="mt-3">
          <p className="text-lg">Here are all my Links.<br /> Feel free to check them out!</p>
          <ul className="w-72 sm:w-96 m-auto mt-2">
            <li className="flex items-center gap-3 bg-white bg-opacity-20 py-2 px-4 rounded-sm hover:bg-opacity-50 transition-all duration-200">
              <img src="./icons/gmail.png" alt="" />
              <p>juetienne7@gmail.com</p>
            </li>
            <li className="flex items-center gap-3 bg-white bg-opacity-20 py-2 px-4 rounded-sm hover:bg-opacity-50 transition-all duration-200 mt-3 shadow-md">
              <img src="./icons/linkedin.png" alt="" />
              Linkedin
            </li>
            <li className="flex items-center gap-3 bg-white bg-opacity-20 py-2 px-4 rounded-sm hover:bg-opacity-50 transition-all duration-200 mt-3 shadow-md">
              <img src="./icons/wantedly.png" alt="" />
              Wantedly
            </li>
            <li className="flex items-center gap-3 bg-white bg-opacity-20 py-2 px-4 rounded-sm hover:bg-opacity-50 transition-all duration-200 mt-3 shadow-md">
              <img src="./icons/github.png" alt="" />
              Github
            </li>
            <li className="flex items-center gap-3 bg-white bg-opacity-20 py-2 px-4 rounded-sm hover:bg-opacity-50 transition-all duration-200 mt-3 shadow-md">
              <img src="./icons/portfolio.png" alt="" />
              Portfolio
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Interface;
