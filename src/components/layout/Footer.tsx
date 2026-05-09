import { Instagram, MapPin, Phone, Send } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../../lib/data';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/5 pt-16 pb-24 md:pb-8 text-white/60 relative overflow-hidden">
      {/* Decorative texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-2xl leading-none">C</span>
              </div>
              <span className="font-black text-3xl text-white tracking-tight">
                {RESTAURANT_CONFIG.name}
              </span>
            </div>
            <p className="text-white/60 font-medium leading-relaxed max-w-sm">
              أسرع ديليفري في مصر. طعم ميتنسيش وتجربة أكل معمولة بحب لكل الأكيلة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors border border-white/10">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors border border-white/10">
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-orange-500 transition-colors">المنيو</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">عروض التوفير</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">تتبع طلبك</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">فروعنا</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">تواصل معنا</h3>
            <div className="space-y-4 font-medium">
              <div className="flex items-start gap-4">
                <Phone className="text-orange-500 shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-white">الخط الساخن أو واتساب</p>
                  <p dir="ltr" className="text-xl font-bold mt-1 text-white/80">{RESTAURANT_CONFIG.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-white">الفرع الرئيسي</p>
                  <p className="text-sm mt-1 text-white/60">شارع التسعين الشمالي، التجمع الخامس، القاهرة</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>© {new Date().getFullYear()} {RESTAURANT_CONFIG.name}. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2 max-w-[200px] opacity-50 grayscale hover:grayscale-0 transition-all">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 object-contain bg-white px-1 rounded" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4 object-contain bg-white px-1 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
}
