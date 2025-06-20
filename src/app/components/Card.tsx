const Card = () => {
  return (
    <div className="group w-full h-full bg-[url(/images/jedi.png)] bg-cover bg-center rounded-2xl flex justify-center items-center z-50 hover:scale-125 transition-transform duration-300">
      
      {/* Overlay */}
      <div className="w-full h-full flex flex-col justify-end items-start text-white p-10 rounded-2xl 
                      bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 ease-in-out">
        
        {/* Span with fade + scale animation after delay */}
        <span className="uppercase text-xl tracking-wider opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
                        font-semibold transition-all duration-200 delay-200 transform origin-top-left ">
          Star Wars Jedi Survivor
        </span>
        
      </div>
    </div>
  );
};

export default Card;
