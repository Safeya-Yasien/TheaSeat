type SeatProps = {
  seat: { id: number; color: string; status: "available" | "booked" };
  onClick: (seat: any) => void;
};

const Seat = ({ seat, onClick }: SeatProps) => {
  const colorMap: { [key: string]: string } = {
    white: "seat-white.avif",
    red: "seat-red.png",
    yellow: "seat-yellow.png",
  };

  return (
    <div
      className="w-16 h-16 p-1 rounded-md cursor-pointer flex items-center justify-center"
      style={{ perspective: "1000px", backgroundColor: "rgba(0,0,0,0.1)" }}
      onClick={() => seat.status === "available" && onClick(seat)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform:
            seat.status === "booked" ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s",
        }}
      >
        {/* Front */}
        <img
          src={`/images/${colorMap[seat.color]}`}
          alt={`Seat ${seat.id}`}
          className="absolute w-full h-full object-cover rounded shadow-md"
          style={{ backfaceVisibility: "hidden" }}
        />

        {/* Back */}
        <img
          src="/images/green-seat.png"
          alt={`Seat ${seat.id} booked`}
          className="absolute w-full h-full object-cover rounded shadow-md"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        />
      </div>
    </div>
  );
};

export default Seat;
