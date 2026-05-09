import { Home, Search, TicketPercent, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function MobileNav() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 md:hidden z-40 pb-safe">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center justify-center w-full h-full text-orange-500">
          <Home size={24} />
          <span className="text-[10px] font-bold mt-1">الرئيسية</span>
        </button>
        <button className="flex flex-col items-center justify-center w-full h-full text-white/50 hover:text-white transition-colors">
          <Search size={24} />
          <span className="text-[10px] font-medium mt-1">بحث</span>
        </button>
        <button className="flex flex-col items-center justify-center w-full h-full text-white/50 hover:text-white transition-colors">
          <TicketPercent size={24} />
          <span className="text-[10px] font-medium mt-1">العروض</span>
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center w-full h-full text-white/50 hover:text-white transition-colors relative"
        >
          <div className="relative">
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-black">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium mt-1">السلة</span>
        </button>
      </div>
    </div>
  );
}
