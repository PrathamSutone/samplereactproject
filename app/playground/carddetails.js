export default function CardDetails() {
  return (
    <div className="bg-yellow-300 text-black rounded-xl p-6 shadow-lg text-left">
      <div className="font-bold text-xl mb-2">VISA</div>
      <div className="flex justify-between items-center mb-4">
        <span>**** **** **** 3241</span>
        <button>
          <span role="img" aria-label="icon">👁️</span>
        </button>
      </div>
      <div className="text-lg mb-1">Total Balance</div>
      <div className="text-3xl font-bold">$214,453.00</div>
    </div>
  );
}