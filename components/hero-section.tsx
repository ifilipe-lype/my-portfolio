import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="">
      <div className="container min-h-screen relative flex justify-center lg:justify-start items-center max-w-screen-lg">
        <div
          className="w-full lg:w-8/12 h-full bg-cover bg-center bg-no-repeat absolute lg:right-0"
          style={{
            backgroundImage: `url(/avatar.jpg)`,
          }}
        ></div>
        <div className="w-full lg:w-8/12 h-full bg-gray-900 bg-opacity-70 md:bg-opacity-30 absolute right-0"></div>
        <article className="md:w-1/2 rounded-lg z-10 text-white lg:text-gray-600 dark:text-white text-center lg:text-left">
          <h4 className="text-lg mb-1 lg:text-gray-400 lg:dark:text-gray-400">Hello, world!</h4>
          <h1 className="lg:text-5xl text-3xl mb-2">Filipe André</h1>
          <h3 className="text-2xl text-purple-500 font-semibold lg:text-4xl">
            Software Developer
          </h3>
          <div className="block my-2">
            <p className="text-base lg:p-4 lg:pl-0 lg:bg-white lg:dark:bg-gray-900 rounded-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              neque incidunt et tenetur placeat unde facilis nostrum at
              exercitationem.
            </p>
          </div>
          <div className="flex w-9/12 mx-auto md:w-full lg:mx-0 md:flex-row text-center flex-col items-center mt-8">
            <span className="mb-4 md:mb-0 transition w-full lg:w-auto px-4 py-2 lg:px-6 lg:py-3 md:mr-8 bg-purple-500 hover:bg-purple-600 text-white rounded-lg">
              Hire me
            </span>
            <Link href="#portfolio">
              <span className="w-full transition cursor-pointer lg:w-auto shadow px-4 py-2 lg:px-6 lg:py-3 bg-gray-700 hover:bg-gray-800 text-gray-100 rounded-lg">
                See my works
              </span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
