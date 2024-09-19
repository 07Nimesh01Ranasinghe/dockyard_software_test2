// // UiverseCard.tsx
// "use client";
// import React from 'react';

// const UiverseCard = () => {
//   return (
//     <div className="w-72 h-80 perspective-[1000px] group"> {/* Added group class */}
//       <div className="relative h-full rounded-[50px] bg-gradient-to-br from-teal-300 to-green-600 transition-all duration-500 transform-style-3d shadow-[rgba(5,71,17,0)_40px_50px_25px_-40px,_rgba(5,71,17,0.2)_0px_25px_25px_-5px] group-hover:rotate-3d-1-1-0-30 group-hover:shadow-[rgba(5,71,17,0.3)_30px_50px_25px_-40px,_rgba(5,71,17,0.1)_0px_25px_30px_0px]">
//         <div className="absolute inset-2 rounded-[55px] border-t-[1px] border-b-[1px] border-l border-white bg-gradient-to-t from-white/60 to-white/90 transform translate-z-[25px] transition-all duration-500"></div>

//         <div className="absolute top-0 right-0 transform-style-3d">
//           <span className="absolute top-2 right-2 w-[170px] aspect-square rounded-full bg-teal-300/20 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur transition-all duration-500 group-hover:translate-z-[20px]"></span>
//           <span className="absolute top-2.5 right-2.5 w-[140px] aspect-square rounded-full bg-teal-300/20 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-md transition-all duration-500 delay-100 group-hover:translate-z-[40px]"></span>
//           <span className="absolute top-4 right-4 w-[110px] aspect-square rounded-full bg-teal-300/20 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur transition-all duration-500 delay-200 group-hover:translate-z-[60px]"></span>
//           <span className="absolute top-5 right-5 w-[80px] aspect-square rounded-full bg-teal-300/20 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur transition-all duration-500 delay-300 group-hover:translate-z-[80px]"></span>
//           <span className="absolute top-6 right-6 w-[50px] aspect-square rounded-full bg-teal-300/20 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur transition-all duration-500 delay-400 group-hover:translate-z-[100px] grid place-content-center">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="w-5 h-5 fill-white">
//               <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"></path>
//               <path d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
//               <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
//             </svg>
//           </span>
//         </div>

//         <div className="p-[100px_60px_0px_30px] transform translate-z-[26px]">
//           <span className="block text-green-900 font-bold text-lg">UIVERSE (3D UI)</span>
//           <span className="block text-green-900/70 text-sm mt-5">Create, share, and use beautiful custom elements made with CSS</span>
//         </div>

//         <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between transform translate-z-[26px]">
//           <div className="flex gap-2.5 transform-style-3d">
//             <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-[rgba(5,71,17,0.5)_0px_7px_5px_-5px] transition-all duration-500 group-hover:translate-z-[50px]">
//               <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-green-600">
//                 <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
//               </svg>
//             </button>
//             <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-[rgba(5,71,17,0.5)_0px_7px_5px_-5px] transition-all duration-500 group-hover:translate-z-[50px]">
//               <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-green-600">
//                 <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
//               </svg>
//             </button>
//             <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-[rgba(5,71,17,0.5)_0px_7px_5px_-5px] transition-all duration-500 group-hover:translate-z-[50px]">
//               <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-green-600">
//                 <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
//               </svg>
//             </button>
//           </div>
//           <div className="flex items-center gap-1">
//             <button className="bg-none border-none text-green-500 font-bold text-xs">View more</button>
//             <svg className="w-4 stroke-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
//               <path d="m6 9 6 6 6-6"></path>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UiverseCard;


// UiverseCard.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';

const UiverseCard = () => {
  return (
    <motion.div
      className="w-72 h-80 perspective-[1000px] group" 
      initial={{ rotateX: 0, rotateY: 0 }}
      whileHover={{ rotateX: 15, rotateY: 15, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="relative h-full rounded-[50px] bg-gradient-to-br from-teal-300 to-green-600 transition-all duration-500 transform-style-3d shadow-[rgba(5,71,17,0)_40px_50px_25px_-40px,_rgba(5,71,17,0.2)_0px_25px_25px_-5px] group-hover:shadow-[rgba(5,71,17,0.3)_30px_50px_25px_-40px,_rgba(5,71,17,0.1)_0px_25px_30px_0px]"
        whileHover={{
          translateZ: 50,
          rotateX: 15,
          rotateY: 15,
          transition: { duration: 0.5 },
        }}
      >
        <motion.div
          className="absolute inset-2 rounded-[55px] border-t-[1px] border-b-[1px] border-l border-white bg-gradient-to-t from-white/60 to-white/90 transform translate-z-[25px] transition-all duration-500"
          whileHover={{ translateZ: 35 }}
        ></motion.div>

        <motion.div className="absolute top-0 right-0 transform-style-3d">
          {[20, 40, 60, 80, 100].map((z, index) => (
            <motion.span
              key={index}
              className={`absolute top-${index + 2} right-${index + 2} w-[${170 - index * 30}px] aspect-square rounded-full bg-teal-300/20 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur transition-all duration-500`}
              whileHover={{ translateZ: z }}
            ></motion.span>
          ))}
          <motion.span
            className="absolute top-6 right-6 w-[50px] aspect-square rounded-full bg-teal-300/20 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur transition-all duration-500 delay-400 group-hover:translate-z-[100px] grid place-content-center"
            whileHover={{ translateZ: 120 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="w-5 h-5 fill-white">
              <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"></path>
              <path d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
              <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
            </svg>
          </motion.span>
        </motion.div>

        <motion.div className="p-[100px_60px_0px_30px] transform translate-z-[26px]">
          <span className="block text-green-900 font-bold text-lg">UIVERSE (3D UI)</span>
          <span className="block text-green-900/70 text-sm mt-5">Create, share, and use beautiful custom elements made with CSS</span>
        </motion.div>

        <motion.div
          className="absolute bottom-5 left-5 right-5 flex items-center justify-between transform translate-z-[26px]"
          whileHover={{ translateZ: 50 }}
        >
          <div className="flex gap-2.5 transform-style-3d">
            {[...Array(3)].map((_, index) => (
              <motion.button
                key={index}
                className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-[rgba(5,71,17,0.5)_0px_7px_5px_-5px] transition-all duration-500"
                whileHover={{ translateZ: 50, scale: 1.2 }}
              >
                {/* Replace with your SVG icons */}
                <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-green-600">
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
              </motion.button>
            ))}
          </div>
          <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
            <motion.button className="bg-none border-none text-green-500 font-bold text-xs" whileHover={{ scale: 1.2 }}>
              View more
            </motion.button>
            <motion.svg
              className="w-4 stroke-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default UiverseCard;

