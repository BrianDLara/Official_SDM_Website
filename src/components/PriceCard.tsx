import React from 'react';

interface PriceCardProps {
  title: string;
  price: string;
  cta: string;
  features: { name: string; included: boolean }[];
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, cta, features }) => {
  
  // Redirect to GHL Form
  const redirectToForm = () => {
    window.location.href = "https://api.leadconnectorhq.com/widget/form/3OwmhQaqezp2bcbzkxBg"; 
  };

  // Check if it's the "Pro" plan
  const isProPlan = title.toLowerCase().includes("pro");

  return (
    <div className={`w-full max-w-sm p-6 border rounded-lg shadow-sm sm:p-8 
      ${isProPlan ? " border-blue-500 shadow-md" : "border-gray-700 bg-gray-800"}`}>
      
      {/* Product Name */}
      <h5 className={`mb-4 text-xl font-medium ${isProPlan ? "text-[#FBB02E]" : "text-gray-400"}`}>
        {title}
      </h5>

      {/* Price */}
      <div className={`flex items-baseline ${isProPlan ? "text-[#FBB02E]" : "text-white"}`}>
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">USD/mes</span>
      </div>

      {/* Features List */}
      <ul className="space-y-5 my-7">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-center ${!feature.included ? 'line-through decoration-gray-400' : ''}`}>
            <svg
              className={`shrink-0 w-4 h-4 ${feature.included ? 'text-blue-700 dark:text-blue-500' : 'text-gray-400 dark:text-gray-500'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-600 dark:text-gray-300 ms-3">{feature.name}</span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button 
        onClick={redirectToForm} 
        className={`cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center 
          ${isProPlan ? "bg-[#FBB02E] text-white hover:bg-[#E09A2A]" : "bg-blue-700 text-white hover:bg-blue-800"} focus:ring-4 focus:outline-none`}>
        {cta}
      </button>
    </div>
  );
};

export default PriceCard;
