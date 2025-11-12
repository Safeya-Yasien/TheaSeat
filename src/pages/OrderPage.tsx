import { useLocation, useNavigate } from "react-router";

const Order = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as {
    state?: {
      bookedSeats: any[];
      movieId: string;
      totalPrice: number;
    };
  };

  const bookedSeats = state?.bookedSeats || [];
  const movieId = state?.movieId || "N/A";
  const totalPrice = state?.totalPrice || 0;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6">Order Summary 🧾</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <p className="mb-2">
          <strong>Movie ID:</strong> {movieId}
        </p>
        <p className="mb-2">
          <strong>Selected Seats:</strong> {bookedSeats.length}
        </p>
        <p className="mb-4">
          <strong>Total Price:</strong>{" "}
          <span className="text-green-400">${totalPrice}</span>
        </p>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md"
          >
            Back
          </button>
          <button
            onClick={() => alert("Purchase Complete ✅")}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
