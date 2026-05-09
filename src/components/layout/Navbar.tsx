import { ShoppingBag, Menu, User, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { RESTAURANT_CONFIG } from '../../lib/data';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav className="sticky top-0 z-40 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Right side (RTL) - Logo & Menu */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-white/60 hover:text-brand-primary md:hidden">
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl leading-none">C</span>
              </div>
              <span className="font-black text-2xl text-white tracking-tight">
                {RESTAURANT_CONFIG.name}
              </span>
            </div>
          </div>

          {/* Center - Location (Desktop) */}
          <div className="hidden md:flex items-center gap-2 text-sm text-white/60 hover:bg-white/5 px-4 py-2 rounded-full cursor-pointer transition-colors border border-transparent hover:border-white/10">
            <MapPin size={16} className="text-brand-primary" />
            <span>التوصيل إلى: التجمع الخامس، القاهرة</span>
          </div>

          {/* Left side (RTL) - Cart & User */}
          <div className="flex items-center gap-2">
            <button className="hidden md:flex p-2 text-white/60 hover:bg-white/5 rounded-full transition-colors border border-transparent hover:border-white/10">
              <User size={24} />
            </button>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white hover:bg-white/5 rounded-full transition-colors flex items-center gap-2 border border-transparent hover:border-white/10"
            >
              <div className="relative">
                <ShoppingBag size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-primary text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-black">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden md:block font-bold">السلة</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
