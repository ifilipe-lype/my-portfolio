import Image from 'next/image';
import codingImageSrc from '../public/undraw_webdev.svg';

export default function HeroSection(){
    return (
        <section className="">
          <div className="container py-8 lg:py-16 flex md:flex-row flex-col-reverse max-w-screen-lg md:justify-between">
            <article className="md:w-1/2 transform md:transform-none py-4 -translate-y-32 z-10 bg-white dark:bg-transparent bg-opacity-50 lg:bg-opacity-0 text-gray-800 dark:text-white md:mt-0 md:pr-4 text-center lg:text-left">
              <h4 className="text-lg text-gray-600 dark:text-gray-200 mb-1">Hello, world!</h4>
              <h1 className="lg:text-5xl text-3xl">I&apos;m Lype</h1>
              <h3 className="text-2xl text-indigo-500 font-semibold lg:text-4xl">
                Software Developer
              </h3>
              <p className="py-4 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                neque incidunt et tenetur placeat unde facilis nostrum at
                exercitationem.
              </p>
              <div className="flex lg:flex-row text-center flex-col-reverse justify-start items-center mt-8">
                <span className="w-full transition md:w-auto shadow px-4 py-2 md:px-6 md:py-3 bg-gray-700 hover:bg-gray-800 text-gray-100 rounded-lg">
                  See my works
                </span>
                <span className="mb-4 lg:mb-0 transition w-full md:w-auto px-4 py-2 md:px-6 md:py-3 lg:ml-8 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg">
                  Hire me
                </span>
              </div>
            </article>
            <div className="relative z-0 md:w-1/2">
              <Image
                src={codingImageSrc}
                alt="Illustration of a programmer coding..."
              />
            </div>
          </div>
        </section>
    )
}