// pages/index.tsx
import SeatMap from "@components/SeatMap";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("/images/theater-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="text-5xl text-white font-bold z-10">
          Welcome to Thea Seat Booking
        </h1>
      </div>

      {/* Seats Section */}
      <section className="w-full py-16 bg-gray-100 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">Choose Your Seat</h2>
        <SeatMap />
      </section>
    </>
  );
};

export default Home;
