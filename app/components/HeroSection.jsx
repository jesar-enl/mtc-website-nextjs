export default function HeroSection() {
  return (
    <div className="bg-[url('/images/FRONT.jpg')] bg-no-repeat bg-cover h-auto md:h-[36rem] flex flex-col md:flex-row items-center justify-between gap-4 text-white">
      <div className="relative flex flex-col justify-center bg-black bg-opacity-90 text-white px-10 py-6 rounded-3xl m-8 h-76 md:h-72 md:w-2/3">
        <h1 className="text-xl md:text-3xl tracking-wide leading-snug mb-4">
          <span className="text-lg">Welcome to the official website of</span>{' '}
          <br />
          <span className="text-ming">Seventh-day Adventist Church</span>
          <br />
          <span className="uppercase">Masaka Town</span>
        </h1>
        <p className="tracking-wider text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          harum! Id recusandae expedita fugiat suscipit voluptatibus natus enim
          et ea deleniti, alias dolorem consectetur repudiandae eum aliquid?
          Aspernatur, eius atque.
        </p>
      </div>
    </div>
  );
}
