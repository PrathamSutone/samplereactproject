export default function ActionButtons() {
  const buttons = [
    { name: 'Transfer', icon: '🤝' },
    { name: 'Request', icon: '📬' },
    { name: 'Savings', icon: '💰' },
    { name: 'Contact', icon: '📞' },
  ];

  return (
    <div className="flex justify-around w-full max-w-md">
      {buttons.map((button) => (
        <div key={button.name} className="flex flex-col items-center">
          <button className="bg-gray-800 rounded-full p-4 mb-2">
            <span role="img" aria-label={button.name}>{button.icon}</span>
          </button>
          <span className="text-white">{button.name}</span>
        </div>
      ))}
    </div>
  );
}