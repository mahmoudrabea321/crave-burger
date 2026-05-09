import Navbar from './components/layout/Navbar';
import MobileNav from './components/layout/MobileNav';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Hero from './components/home/Hero';
import Offers from './components/home/Offers';
import MenuSection from './components/home/MenuSection';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col font-arabic bg-[#0F0F0F] text-white">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <Offers />
          <MenuSection />
          
          {/* Simple Instagram/Social Proof Section hook */}
          <section className="py-16 border-t border-white/10">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-2 block">@CRAVE_BURGER</span>
                <h2 className="text-3xl font-black text-white mb-8">شاركنا لحظاتك على إنستجرام</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400"
                  ].map((src, idx) => (
                    <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                      <img src={src} alt="Instagram Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </section>
        </main>
        
        <Footer />
        <MobileNav />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
