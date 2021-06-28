import ProjectCard from './projectCard'

const mockedProjectList = [
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"]
  },
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"]
  },
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"]
  },
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"]
  },
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"]
  },
  {
    name: 'WebSite for Local Business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Beatae, quas praesentium nesciunt a corporis eligendi nobis.',
    date: Date.now(),
    image: "/avatar-original.jpg",
    tecnologies: ["ReactJS", "Tailwindcss", "NextJS"]
  },
]

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-16 lg:py-24 bg-gray-50 dark:bg-transparent"
    >
      <div className="container max-w-screen-lg flex flex-col justify-center items-center">
        <header className="flex flex-col dark:text-white justify-center mb-10 md:mb-16  items-center text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl uppercase mb-2">Portfolio</h1>
          <h4 className="lg:text-lg">See what I&apos;ve been doing lately</h4>
          <div className="h-1 w-5/12 rounded-full bg-purple-500 mt-2"></div>
        </header>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            mockedProjectList.map((project, index) => (
              <div key={index}>
                <ProjectCard {...project} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
