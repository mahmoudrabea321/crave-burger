import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Check, Star } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS, RESTAURANT_CONFIG } from '../../lib/data';
import { useCart } from '../../context/CartContext';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addItem } = useCart();
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.categoryId === activeCategory);

  const handleAddToCart = (item: any) => {
    addItem({ ...item, quantity: 1 });
    
    // Show temporary checkmark
    setAddedItems(prev => [...prev, item.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== item.id));
    }, 1500);
  };

  return (
    <section id="menu-section" className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">منيو <span className="text-brand-primary">كريف</span></h2>
          <p className="text-white/50 font-medium text-lg">كل اللي نفسك فيه، متوفر ومقرمش</p>
        </div>

        {/* Categories Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-6 mb-4" dir="rtl">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`shrink-0 flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border 
                ${activeCategory === category.id 
                  ? 'border-orange-600 bg-orange-600 text-white shadow-lg shadow-orange-600/20' 
                  : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:bg-white/10'
                }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                className="bg-white/5 rounded-[24px] border border-white/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-white/20 transition-all group flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-zinc-800 rounded-t-[24px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.badges && item.badges.map((badge, idx) => (
                    <div 
                      key={idx} 
                      className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md flex items-center gap-1"
                    >
                      <Star size={12} className="fill-white" />
                      {badge}
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <h3 className="font-bold text-xl text-white leading-tight">{item.name}</h3>
                      <span className="font-black text-orange-500 whitespace-nowrap text-lg">
                        {item.price} <span className="text-sm font-bold text-white/50">{RESTAURANT_CONFIG.currency}</span>
                      </span>
                    </div>
                    <p className="text-white/50 text-sm font-medium line-clamp-2 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    {item.oldPrice && (
                      <div className="flex flex-col">
                        <span className="text-xs text-white/40 font-medium">بدلاً من</span>
                        <span className="text-sm text-white/50 line-through font-bold">{item.oldPrice} {RESTAURANT_CONFIG.currency}</span>
                      </div>
                    )}
                    <button
                      onClick={() => handleAddToCart(item)}
                      disabled={addedItems.includes(item.id)}
                      className={`ml-auto px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all
                        ${addedItems.includes(item.id)
                          ? 'bg-[#25D366] text-black shadow-md shadow-green-500/20'
                          : 'bg-orange-600 text-white hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-600/20 active:scale-95'
                        }`}
                    >
                      <AnimatePresence mode="wait">
                        {addedItems.includes(item.id) ? (
                          <motion.div
                            key="check"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="flex items-center gap-1"
                          >
                            <Check size={16} strokeWidth={3} />
                            تم الإضافة
                          </motion.div>
                        ) : (
                          <motion.div
                            key="plus"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="flex items-center gap-1"
                          >
                            <Plus size={16} />
                            إضافة للسلة
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
