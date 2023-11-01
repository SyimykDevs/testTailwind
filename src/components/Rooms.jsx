import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto py-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 ">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Interior Rooms </h3>
        <p className="pt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          sed corporis dolore veniam corrupti aliquam!
        </p>
      </div>
      {/* Images */}
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1648723200718-4dca0c26468d?auto=format&fit=crop&q=60&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGRpdmVzJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D"
          alt="/"
        />
        <img className="object-cover w-full h-full row-span-2"
          src="https://images.unsplash.com/photo-1648892079495-fcda44a9250b?auto=format&fit=crop&q=60&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbGRpdmVzJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D"
          alt="/"
        />
        <img className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?auto=format&fit=crop&q=60&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1hbGRpdmVzJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
