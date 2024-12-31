export default function AddCard() {
  return (
    <div className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 rounded-full">
      <span>Add Your New Card 👉</span>
      <button className="bg-gray-800 rounded-full p-2">
        <span className="text-xl">+</span>
      </button>
    </div>
  );
}