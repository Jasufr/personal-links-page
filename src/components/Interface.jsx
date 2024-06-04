function Interface() {

  return (
    <>
      <div className="container m-auto text-white text-center">
        <div className="w-full mt-6">
          <h2 className="text-xl">Bonjour, I am</h2>
          <h1 className="mt-1 text-3xl font-bold">Justin Etienne</h1>
          <h3 className="mt-1 text-lg italic">Front-end Developer</h3>
        </div>
        <div className="mt-2">
          <p className="text-lg">Here are all my Links.<br /> Feel free to check them out!</p>
          <ul className="w-72 sm:w-96 m-auto mt-2">
            <a href="mailto:juetienne7@gmail.com"><li className="flex items-center gap-3 bg-white bg-opacity-20 py-2 px-4 rounded-sm hover:bg-opacity-50 transition-all duration-200">
              <img width={48} height={48} loading="eager" src="./icons/gmail.png" alt="" />
              <p>juetienne7@gmail.com</p>
            </li></a>
            <a href="https://www.linkedin.com/in/justin-etienne" target="_blank"><li className="flex items-center gap-3 bg-white bg-opacity-20 py-2 px-4 rounded-sm hover:bg-opacity-50 transition-all duration-200 mt-3 shadow-md">
              <img width={48} height={48} loading="eager" src="./icons/linkedin.png" alt="" />
              Linkedin
            </li></a>
            <a href="https://www.wantedly.com/id/justin_etienne" target="_blank"><li className="flex items-center gap-3 bg-white bg-opacity-20 py-2 px-4 rounded-sm hover:bg-opacity-50 transition-all duration-200 mt-3 shadow-md">
              <img width={48} height={48} loading="eager" src="./icons/wantedly.png" alt="" />
              Wantedly
            </li></a>
            <a href="https://github.com/Jasufr" target="_blank"><li className="flex items-center gap-3 bg-white bg-opacity-20 py-2 px-4 rounded-sm hover:bg-opacity-50 transition-all duration-200 mt-3 shadow-md">
              <img width={48} height={48} loading="eager" src="./icons/github.png" alt="" />
              Github
            </li></a>
            <a href="https://www.justinetienne.com/" target="_blank"><li className="flex items-center gap-3 bg-white bg-opacity-20 py-2 px-4 rounded-sm hover:bg-opacity-50 transition-all duration-200 mt-3 shadow-md">
              <img width={48} height={48} loading="eager" src="./icons/portfolio.png" alt="" />
              Portfolio
            </li></a>
          </ul>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full text-sm">
          <p><span className="opacity-40">© 2024 JasuFR. Icons by </span><a className="underline opacity-40 hover:opacity-80 transition-all duration-200" href="https://icons8.com/" target="_blank">Icons8</a></p>
        </div>
      </div>
    </>
  );
}

export default Interface;
