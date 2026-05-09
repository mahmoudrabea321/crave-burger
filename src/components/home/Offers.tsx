import { motion } from 'motion/react';
import { ArrowLeft, Clock } from 'lucide-react';

export default function Offers() {
  const scrollRight = () => {
    document.getElementById('offers-scroll')?.scrollBy({ left: 300, behavior: 'smooth' });
  };
  
  const scrollLeft = () => {
    document.getElementById('offers-scroll')?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">عروض <span className="text-brand-primary">التوفير</span></h2>
            <p className="text-white/50 font-medium mt-1">وفر فلوسك مع أقوى عروض التيك أواي</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={scrollRight} className="p-3 rounded-full bg-white/5 shadow-sm border border-white/10 hover:bg-white/10 text-white transition-colors">
              <ArrowLeft size={20} className="rotate-180" />
            </button>
            <button onClick={scrollLeft} className="p-3 rounded-full bg-white/5 shadow-sm border border-white/10 hover:bg-white/10 text-white transition-colors">
              <ArrowLeft size={20} />
            </button>
          </div>
        </div>

        <div 
          id="offers-scroll"
          className="flex overflow-x-auto hide-scrollbar gap-6 snap-x snap-mandatory py-4"
          dir="rtl"
        >
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="shrink-0 w-[85vw] md:w-[400px] snap-center snap-always bg-white/5 border border-white/10 rounded-[24px] overflow-hidden relative group cursor-pointer shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800"
              alt="عرض التوفير" 
              className="w-full h-[220px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">عروض العيلة</span>
              <h3 className="text-2xl font-black text-white mb-1">بلاك دراجون بوكس</h3>
              <p className="text-white/70 text-sm font-medium mb-4">٢ برجر، ٢ شاورما، بطاطس ومشروب</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-brand-primary text-2xl font-black">350 ج.م</span>
                  <span className="text-white/40 line-through text-sm mr-2 inline-block">420 ج.م</span>
                </div>
                <button className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors">
                  <ArrowLeft size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="shrink-0 w-[85vw] md:w-[400px] snap-center snap-always bg-white/5 border border-white/10 rounded-[24px] overflow-hidden relative group cursor-pointer shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800"
              alt="عرض التوفير" 
              className="w-full h-[220px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent" />
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-sm">
              <Clock size={14} className="text-brand-primary" />
              ينتهي قريباً
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="bg-yellow-400 text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">فلاش سيل</span>
              <h3 className="text-2xl font-black text-white mb-1">اشتري 1 و التاني بـ 50%</h3>
              <p className="text-white/70 text-sm font-medium mb-4">على كل أنواع السماش برجر السنجل</p>
              <div className="flex items-center justify-between">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-500 transition-colors w-full flex items-center justify-center gap-2">
                  أضف للسلة
                  <ArrowLeft size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
