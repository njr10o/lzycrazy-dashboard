import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './index.css';

const generateRandomStats = () => ({
  totalUsers: Math.floor(Math.random() * 1000),
  realtimeUsers: Math.floor(Math.random() * 50),
  totalUserAds: Math.floor(Math.random() * 10),
  businessProfile: Math.floor(Math.random() * 10),
  bannerAds: Math.floor(Math.random() * 10),
  videoAds: Math.floor(Math.random() * 10),
  homeAds: Math.floor(Math.random() * 10),
});

const cityOptions = {
  India: ['Delhi', 'Mumbai', 'Bangalore'],
  USA: ['New York', 'Los Angeles', 'Chicago'],
  Germany: ['Berlin', 'Munich', 'Frankfurt'],
  Japan: ['Tokyo', 'Osaka', 'Kyoto'],
};

const AnimatedCounter = ({ value }) => {
  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    controls.set({ count: 0 });
    controls.start({
      count: value,
      transition: { duration: 1, ease: 'easeOut' },
    });
  }, [value, controls]);

  return (
    <motion.span
      animate={controls}
      initial={{ count: 0 }}
      onUpdate={(latest) => setDisplayValue(Math.floor(latest.count))}
    >
      {displayValue.toString().padStart(2, '0')}
    </motion.span>
  );
};

const StatBox = ({ label, value, icon }) => (
  <motion.div 
    whileHover={{ scale: 1.05, rotate: 1 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white rounded-xl shadow-md p-4 w-full sm:w-60 h-36 flex flex-col justify-between border border-gray-200 relative overflow-hidden transition-all duration-300 ease-in-out animate-gradient"
  >
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 0.2 }} 
      transition={{ duration: 1 }}
    >
      {typeof icon === 'string' ? (
        <div className="text-7xl text-gray-300 text-center mt-6">{icon}</div>
      ) : (
        <img src={icon.props.src} alt="background icon" className="w-full h-full object-cover" />
      )}
    </motion.div>
    <div className="flex justify-between items-center z-10 relative">
      <motion.div 
        className="text-xs text-purple-600 font-semibold animate-pulse"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >Live</motion.div>
      <div className="text-sm z-10 relative">{icon}</div>
    </div>
    <div className="text-sm font-bold text-gray-700 z-10 relative">{label}</div>
    <motion.div 
      className="text-3xl font-bold text-yellow-600 z-10 relative"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <AnimatedCounter value={value} />
    </motion.div>
  </motion.div>
);

export default function App() {
  const [data, setData] = useState(generateRandomStats());
  const [country, setCountry] = useState('India');
  const [city, setCity] = useState(cityOptions['India'][0]);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setCity(cityOptions[selectedCountry][0]);
    setData(generateRandomStats());
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setData(generateRandomStats());
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="bg-white min-h-screen p-6 animate-gradient overflow-x-hidden"
    >
      {/* Responsive Navbar */}
      <nav className="w-full flex justify-between items-center px-4 py-3 bg-white rounded-xl shadow-md mb-6">
        <img src="https://www.lzycrazy.com/assets/lzy%20logo-Cl4gUC2f.jpg" alt="LzyCrazy Logo" className="h-10" />
        <div className="hidden md:flex items-center gap-6">
          <span className="text-sm font-medium">Adnan Fayaz ID:00991</span>
          <div className="flex items-center gap-3">
            <button className="text-xl hover:animate-pulse">📞</button>
            <button className="text-xl hover:animate-pulse">🎥</button>
            <button className="text-xl hover:animate-bounce">🔔</button>
            <button className="text-xl hover:animate-bounce">💬</button>
            <img src="https://i.pravatar.cc/40" alt="Profile" className="rounded-full w-10 h-10" />
          </div>
        </div>
      </nav>

      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white text-center py-2 rounded-md text-lg font-semibold shadow animate-pulse"
      >
        Client Onboarding & Real-Time Engagement Analytics System
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between gap-4 mt-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col w-full lg:w-[30%] space-y-4"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            src="https://www.bullionbypost.co.uk/media/uploads/pages/images/2019/05/10/Gold_Price_Rising.jpg"
            alt="growth"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        <div className="flex flex-col w-full lg:w-[65%] gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="bg-white border border-yellow-400 p-4 rounded-xl shadow-sm animate-gradient-slow"
            >
              <div className="text-sm font-semibold text-gray-600 mb-2">Statistics</div>
              <div className="text-xl font-bold text-gray-800">Total users</div>
              <div className="text-4xl text-blue-900 font-extrabold animate-pulse">
                <AnimatedCounter value={data.totalUsers} />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="bg-white border border-green-400 p-4 rounded-xl shadow-sm animate-gradient-slow"
            >
              <div className="text-sm font-semibold text-gray-600 mb-2">Statistics</div>
              <div className="text-xl font-bold text-gray-800">Realtime users</div>
              <div className="text-4xl text-green-600 font-extrabold animate-bounce">
                <AnimatedCounter value={data.realtimeUsers} />
              </div>
            </motion.div>

            <motion.div className="bg-white p-4 rounded-xl shadow-sm animate-gradient-slow">
              <div className="font-semibold mb-2">Select Location</div>
              <select className="w-full mb-2 p-1 border rounded" value={country} onChange={handleCountryChange}>
                <option>Select Country</option>
                {Object.keys(cityOptions).map(c => <option key={c}>{c}</option>)}
              </select>
              <select className="w-full mb-2 p-1 border rounded" value={city} onChange={handleCityChange}>
                {cityOptions[country].map(cityName => <option key={cityName}>{cityName}</option>)}
              </select>
            </motion.div>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 items-start"
          >
            <StatBox label="Total User Ads" value={data.totalUserAds} icon={<img src="https://www.shutterstock.com/image-vector/computer-displaying-ads-icon-line-260nw-2165693555.jpg" alt="icon" className="h-6 w-6 object-contain" />} />
            <StatBox label="Business Profile" value={data.businessProfile} icon={<img src="https://emojisparacopiar.com/wp-content/uploads/2021/11/%F0%9F%91%A4-emoji.png" alt="icon" className="h-6 w-6 object-contain" />} />
            <StatBox label="Banner Ads" value={data.bannerAds} icon="🖼️" />
            <StatBox label="Video Ads" value={data.videoAds} icon="📣" />
            <StatBox label="Home Ads" value={data.homeAds} icon="🏠" />
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 w-full sm:w-60 h-36 flex flex-col justify-between animate-gradient-slow"
            >
              <div className="text-sm font-semibold">ID: lc001</div>
              <button className="text-red-500 font-semibold mt-2">🔁 Sign out</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
