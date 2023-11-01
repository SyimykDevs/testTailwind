import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://media.istockphoto.com/id/1471706284/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D1%80%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F-%D0%BC%D0%B0%D0%BB%D1%8C%D0%B4%D0%B8%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0-%D0%B2-%D1%80%D0%B0%D1%8E.webp?b=1&s=170667a&w=0&k=20&c=5UHEWx_ZJOKTn4CZL9pdpa1dleFjo2lobCCC5h6A2hs="
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://media.istockphoto.com/id/1463840962/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B0%D1%82%D1%8C-%D0%B8-%D1%81%D1%8B%D0%BD-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D1%8E%D1%82-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B5%D0%B1%D1%8F-%D0%BC%D0%B5%D0%BB%D0%BA%D1%83%D1%8E-%D1%80%D1%8B%D0%B1%D1%83-%D0%B2%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D0%BF%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BB%D0%B0%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%BC%D0%B0%D0%BB%D1%8C%D0%B4%D0%B8%D0%B2%D0%B0%D1%85.webp?b=1&s=170667a&w=0&k=20&c=Bvm78_jX8lf-imFd08ciC0ekLuPjp8LltAhgTKwWkOA="
          alt=""
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://media.istockphoto.com/id/467053788/ru/%D1%84%D0%BE%D1%82%D0%BE/beach-villas-%D0%BD%D0%B0-%D0%BD%D0%B5%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2.webp?b=1&s=170667a&w=0&k=20&c=zn3vJk3wt5Ky3o606YlFFYtcbUNCFU7QbmeokJwu1vw="
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://media.istockphoto.com/id/1298863783/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BB%D0%B0%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B9-%D0%B7%D0%B0%D0%B2%D1%82%D1%80%D0%B0%D0%BA-%D0%BD%D0%B0-%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%B1%D0%B0%D1%81%D1%81%D0%B5%D0%B9%D0%BD-%D0%B2-%D1%80%D0%BE%D1%81%D0%BA%D0%BE%D1%88%D0%BD%D0%BE%D0%BC-%D0%BE%D1%82%D0%B5%D0%BB%D0%B5.webp?b=1&s=170667a&w=0&k=20&c=heHgaFd3aVqPRU8ryvTSu9NENo1JJja-cEXdVs_QMk4="
          alt=""
        />
      </div>
      {/* left right */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, 
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti
          velit consectetur facilis a, qui quasi? Ratione iusto dignissimos
          doloremque nisi! Ullam ducimus reprehenderit accusamus asperiores
          repellendus, itaque harum saepe!
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
          <button className="bg-black text-white border-black hover:shadow-xl">Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
