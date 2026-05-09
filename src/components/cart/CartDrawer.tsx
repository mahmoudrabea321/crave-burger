import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, Send } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { RESTAURANT_CONFIG } from '../../lib/data';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, addItem, removeItem, subtotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const deliveryFee = RESTAURANT_CONFIG.deliveryFee;
  const total = subtotal + (items.length > 0 ? deliveryFee : 0);

  const handleWhatsAppCheckout = () => {
    setIsCheckingOut(true);
    
    let message = `*طلب جديد من الموقع* 🛑\n\n`;
    message += `*التفاصيل:*\n`;
    items.forEach(item => {
      message += `▪️ ${item.quantity}x ${item.name} (${item.price * item.quantity} ${RESTAURANT_CONFIG.currency})\n`;
    });
    
    message += `\n*المجموع الفرعي:* ${subtotal} ${RESTAURANT_CONFIG.currency}\n`;
    message += `*خدمة التوصيل:* ${deliveryFee} ${RESTAURANT_CONFIG.currency}\n`;
    message += `*الإجمالي المطلوب:* ${total} ${RESTAURANT_CONFIG.currency}\n`;
    
    message += `\n(يرجى الرد لتأكيد العنوان ورقم الهاتف)`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2${RESTAURANT_CONFIG.phone}?text=${encodedMessage}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsCheckingOut(false);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }} // Slide from right for RTL
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 bottom-0 right-0 w-full md:w-[400px] bg-[#0F0F0F] bg-opacity-95 backdrop-blur-xl shadow-2xl z-50 flex flex-col border-l border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-orange-500" />
                <h2 className="text-xl font-bold text-white">سلة الطلبات</h2>
                <span className="bg-white/10 text-white px-2 py-0.5 rounded-full text-sm font-semibold">
                  {items.length}
                </span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-white/30 space-y-4">
                  <ShoppingBag size={64} className="opacity-20" />
                  <p className="text-lg font-medium text-white/50">السلة فارغة، جوعان؟</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-orange-500 font-bold hover:underline"
                  >
                    تصفح المنيو
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white/5 border border-white/5 p-3 rounded-[24px] shadow-sm">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-[16px]"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-white line-clamp-1">{item.name}</h3>
                        <p className="text-orange-500 font-bold text-sm">
                          {item.price} {RESTAURANT_CONFIG.currency}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 bg-black/40 rounded-full py-1 px-1 border border-white/5">
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="bg-white/10 p-1 rounded-full text-white/60 shadow-sm hover:text-red-500 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-bold text-sm w-4 text-center text-white">{item.quantity}</span>
                          <button 
                            onClick={() => addItem({...item, quantity: 1})}
                            className="bg-white/10 p-1 rounded-full text-white/90 shadow-sm hover:text-orange-500 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-4 bg-black/20 border-t border-white/5 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/50">
                    <span>المجموع الفرعي</span>
                    <span className="font-bold text-white">{subtotal} {RESTAURANT_CONFIG.currency}</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>رسوم التوصيل</span>
                    <span className="font-bold text-white">{deliveryFee} {RESTAURANT_CONFIG.currency}</span>
                  </div>
                  <div className="pt-2 flex justify-between text-lg font-black text-white border-t border-white/10">
                    <span>الإجمالي</span>
                    <span className="text-orange-500">{total} {RESTAURANT_CONFIG.currency}</span>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-orange-600 hover:bg-orange-500 active:scale-[0.98] text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-orange-600/20 disabled:opacity-70 disabled:cursor-wait"
                >
                  {isCheckingOut ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} className="-rotate-90 rtl:rotate-90" />
                      إتمام الطلب
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-white/40 font-medium pb-2 md:pb-0">
                  الدفع نقداً عند الاستلام
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
