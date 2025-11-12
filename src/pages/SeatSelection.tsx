import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const SeatSelection = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const sections = [
    { id: "vip", name: "VIP Section", color: "red", price: 200 },
    { id: "regular", name: "Regular Section", color: "blue", price: 120 },
    { id: "economy", name: "Economy Section", color: "green", price: 80 },
  ];

  const createSeats = (sectionId: string, count: number) =>
    Array.from({ length: count }, (_, i) => ({
      id: `${sectionId}-${i + 1}`,
      section: sectionId,
      status: "available",
    }));

  const initialSeats = [
    ...createSeats("vip", 12),
    ...createSeats("regular", 18),
    ...createSeats("economy", 24),
  ];

  const [seats, setSeats] = useState(initialSeats);

  const toggleSeat = (id: string) => {
    setSeats((prev) =>
      prev.map((seat) =>
        seat.id === id
          ? {
              ...seat,
              status: seat.status === "available" ? "booked" : "available",
            }
          : seat
      )
    );
  };

  const bookedSeats = seats.filter((s) => s.status === "booked");
  const totalPrice = bookedSeats.reduce((sum, seat) => {
    const section = sections.find((sec) => sec.id === seat.section);
    return sum + (section ? section.price : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-12 px-6">
      <h1 className="text-3xl font-bold mb-2">Select Your Seats 🎟️</h1>
      <p className="text-gray-400 mb-8">Show #{movieId}</p>

      <div className="w-full max-w-4xl bg-gray-700 h-4 rounded-full mb-10 shadow-md"></div>
      <p className="text-gray-300 text-sm mb-10">Stage This Way</p>

      <div className="w-full max-w-4xl flex flex-col items-center gap-10 mb-12">
        {sections.map((section) => (
          <div key={section.id} className="w-full flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-3 text-gray-200">
              {section.name} – ${section.price}
            </h2>

            <div
              className={`flex flex-col items-center ${
                section.id === "vip"
                  ? "scale-110"
                  : section.id === "economy"
                  ? "scale-95"
                  : ""
              }`}
            >
              {[...Array(3)].map((_, row) => (
                <div
                  key={row}
                  className="flex justify-center gap-2 mb-2"
                  style={{
                    transform: `rotate(${(row - 1) * 3}deg)`,
                  }}
                >
                  {seats
                    .filter(
                      (s) =>
                        s.section === section.id &&
                        Math.floor((parseInt(s.id.split("-")[1]) - 1) / 4) ===
                          row
                    )
                    .map((seat) => (
                      <div
                        key={seat.id}
                        onClick={() => toggleSeat(seat.id)}
                        className={`w-8 h-8 rounded-md cursor-pointer border-2 transition-all duration-300 ${
                          seat.status === "available"
                            ? `bg-${section.color}-500 hover:bg-${section.color}-600 border-${section.color}-400`
                            : "bg-yellow-400 border-yellow-500"
                        }`}
                        title={`${section.name} Seat`}
                      ></div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lg mb-3 font-medium">
          Selected Seats: {bookedSeats.length}
        </p>
        <p className="text-lg mb-3 font-medium">
          Total Price: <span className="text-green-400">${totalPrice}</span>
        </p>
        <button
          disabled={bookedSeats.length === 0}
          onClick={() =>
            navigate("/order", { state: { bookedSeats, movieId, totalPrice } })
          }
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            bookedSeats.length === 0
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SeatSelection;
