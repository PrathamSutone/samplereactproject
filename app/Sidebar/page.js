import NavBarSide from './sidebar';
import "@fontsource/plus-jakarta-sans";

export default function Page() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 px-4 sm:px-8 font-jakarta">
      <NavBarSide />
    </div>
  );
}