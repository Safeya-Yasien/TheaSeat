import { useState } from "react";
import Seat from "./Seat";

const SeatMap = () => {
  // Example: 36 seats, 12 per row, 3 rows
  const initialSeats = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    color: i % 3 === 0 ? "white" : i % 3 === 1 ? "red" : "yellow",
    status: "available",
  }));

  const [seats, setSeats] = useState(initialSeats);

  const handleSeatClick = (seat: any) => {
    setSeats(
      seats.map((s) => (s.id === seat.id ? { ...s, status: "booked" } : s))
    );
  };

  // Split seats into rows of 12
  const rows = [];
  for (let i = 0; i < seats.length; i += 12) {
    rows.push(seats.slice(i, i + 12));
  }

  return (
    <div className="w-full max-w-6xl flex flex-col gap-2">
      {rows.map((row, idx) => (
        <div key={idx} className="flex justify-center gap-2">
          {row.map((seat) => (
            <Seat key={seat.id} seat={seat} onClick={handleSeatClick} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatMap;
