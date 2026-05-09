import { motion } from 'motion/react';
import { ArrowLeft, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full shrink-0 rounded-[32px] overflow-hidden bg-gradient-to-l from-orange-950/40 to-black border border-white/5 m-4 w-[calc(100%-2rem)] mx-auto">
      {/* Background Image / Video Poster */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=2000"
          alt="صورة الغلاف" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-24 md:pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary bg-opacity-90 px-4 py-2 rounded-full font-bold text-sm backdrop-blur-md border border-brand-primary/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            أسرع توصيل في مصر
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
            عشاق <span className="text-brand-primary">البرجر</span><br/>
            في مكان واحد.
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 font-medium max-w-lg leading-relaxed">
            لحم بقري صافي مشوي على الفحم، صوصات سيكريت، وتجربة طعم هتاخدك لعالم تاني. أطلب دلوقتي ويوصلك سخن نار!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={scrollToMenu}
              className="bg-brand-primary hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-transform active:scale-95 shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
            >
              اطلب دلوقتي
              <ArrowLeft size={20} />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-2xl font-bold text-lg transition-all border border-white/20 flex items-center justify-center gap-2">
              <span className="text-[#25D366]">واتساب</span> طلب سريع
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-6 pt-8 border-t border-white/10 text-white/70">
            <div className="flex items-center gap-2">
              <Clock className="text-brand-primary" size={20} />
              <span className="font-semibold text-sm">يوصلك في 30 دقيقة</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-brand-primary" size={20} />
              <span className="font-semibold text-sm">تتبع لايف لطلبك</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements (Decorative) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="hidden lg:block absolute left-20 top-1/4"
      >
        <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4">
          <div className="text-4xl">🔥</div>
          <div>
            <p className="text-white font-bold">عرض الويكيند</p>
            <p className="text-brand-primary font-bold text-sm">خصم 20%</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
