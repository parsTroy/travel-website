import React from 'react';

const Gallery = () => {
    return (
        <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
            <h2 className="text-center text-gray-700 p-4">Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="Seoul Alley"
                    />
                </div>
                <div>
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1541055575455-df3a497caa48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="Busan Port"
                    />
                </div>
                <div>
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1446733993804-c62a351c7239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                        alt="Incheon Park"
                    />
                </div>
                <div>
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1570531696938-910a2b7908e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
                        alt="Jeju Island"
                    />
                </div>
                <div>
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
                        alt="Hanok Village"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
