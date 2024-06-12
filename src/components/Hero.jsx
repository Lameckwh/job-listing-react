const Hero = ({ title = "Find Your Perfect Job", subtitle = "Discover opportunities, land your dream career, and thrive in your ideal role." }) => {
  return (
    <section
      className="relative py-40 mb-4 bg-cover bg-center h-50"
      style={{ backgroundImage: 'url(src/assets/images/hero.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
