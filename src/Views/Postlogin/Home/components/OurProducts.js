


import React from 'react';
import { Sparkles,MessageSquare,Truck ,Repeat ,FileText  ,Warehouse,Monitor ,ShoppingCart  ,Boxes , ArrowDown } from 'lucide-react';
  function OurProducts() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      };
    return (
        <>
           


            {/* new page */}
            <div className='min-h-[90vh] relative global_padding flex items-center bg-white space-container'>

                {/* left */}
                <div className='w-[50%] '>
                                <h2 className='hero_sec_right_heading mb-8'>Our AI-Native <span style={{color:"#666AE5"}}>Ecommerce</span> and <span style={{color:"#666AE5"}}>Supply Chain</span>  Platform</h2>
    
                 </div>


                {/* right */}
                <div className='w-[50%] flex items-center justify-end'>
                  <img style={{width:"80%"}} src="images/marketing.png" alt="" />
                </div>


                {/* Scroll indicator */}
                <div  onClick={() => handleScroll('ai-native-products')} className="absolute cursor-pointer bottom-8 left-1/2 transform -translate-x-1/2">
                        <ArrowDown className="w-6 h-6 text-purple-600 animate-bounce" />
                    </div>
            </div>


            {/* Grid Container */}
            <div id='ai-native-products' className="container bg global_padding mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <FeatureCard icon={<Warehouse className="w-5 h-5 text-purple-600"/>} title="Procurement" desc="Streamlined Supply Management" />
                    <FeatureCard icon={<Boxes className="w-5 h-5 text-purple-600"/>} title="Inventory" desc="Optimized Stock Control" />
                    <FeatureCard icon={<Monitor  className="w-5 h-5 text-purple-600"/>} title="POS" desc="Seamless Sales Transactions" />
                    <FeatureCard icon={<ShoppingCart es className="w-5 h-5 text-purple-600"/>} title="Ecommerce" desc="Effortless Online Shopping" />
                    <FeatureCard icon={<MessageSquare  className="w-5 h-5 text-purple-600"/>} title="Whatsapp Commerce" desc="Chat-Driven Shopping" />
                    <FeatureCard icon={<Truck  className="w-5 h-5 text-purple-600"/>} title="Logistics" desc="Efficient Delivery Management" />
                     <FeatureCard icon={<FileText  className="w-5 h-5 text-purple-600"/>} title="Accounting" desc="Integrated Financial Solutions" />
                    <FeatureCard icon={<Repeat  className="w-5 h-5 text-purple-600"/>} title="Subscriptions" desc="Efficient Subscription Handling" />
                </div>
            </div>

        </>
    );
}

export default OurProducts;




const FeatureCard = (prop) => (
    <div className="bg-white hover:bg-white/20 cursor-pointer backdrop-blur-sm flex justify-center flex-col rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-100/50 group">
        {/* Header with icon and title */}
        <div className="flex justify-center items-center gap-2 mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
                {/* <ShoppingCart className="w-5 h-5 text-purple-600" /> */}
                {/* <Warehouse className="w-5 h-5 text-purple-600"/> */}
                {prop.icon}
            </div>
            <span className="font-semibold text-gray-900">{prop.title}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 text-center leading-relaxed">
            {prop.desc}
        </p>

        {/* Buttons - initially hidden, shown on hover */}
        <div className="flex justify-between mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-[white] text-black text-[1rem] font-bold w-[48%] p-1 rounded-2xl flex items-center justify-center gap-1 group-hover:shadow-md">
                <span>Preview</span>
                <span className="ml-3 opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                </span>
            </button>

            <button className="bg-[#666AE5] text-white text-[1rem] font-bold w-[48%] p-1 rounded-2xl flex items-center justify-center gap-1 group-hover:shadow-md">
                <span>Visit App</span>
                <span className="ml-3 opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                </span>
            </button>
        </div>
    </div>

);
