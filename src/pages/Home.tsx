import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const movies = [
    {
      id: 1,
      title: "Phantom of the Opera",
      image: "/images/movie1.jpg",
    },
    {
      id: 2,
      title: "Hamilton",
      image: "/images/movie2.jpg",
    },
    {
      id: 3,
      title: "Les Misérables",
      image: "/images/movie3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative w-full h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/images/theater-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="text-5xl text-white font-bold z-10">
          Welcome to TheaSeat 🎭
        </h1>
      </div>

      {/* Available Movies */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Available Shows</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-72 hover:shadow-xl transition"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-3">{movie.title}</h3>
                <button
                  onClick={() => navigate(`/seats/${movie.id}`)}
                  className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Book Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
