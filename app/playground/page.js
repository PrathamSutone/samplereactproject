import AddCard from './addcard';
import CardDetails from './carddetails';
import ActionButtons from './actionbuttons';

export default function Page() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center space-y-6 py-6">
      <AddCard />
      <CardDetails />
      <ActionButtons />
    </div>
  );
}