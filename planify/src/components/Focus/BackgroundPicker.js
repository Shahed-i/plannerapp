import React from 'react';

const BackgroundPicker = ({ isOpen, onClose, backgroundImages, setSelectedBackground }) => {
    if (!isOpen) return null;

    const handleBackgroundSelect = (image) => {
        setSelectedBackground(image); // Change the background image
        onClose(); // Close the popup
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Select a Background</h2>
                <div className="grid grid-cols-3 gap-4">
                    {backgroundImages.map((image, index) => (
                        <div key={index} className="cursor-pointer" onClick={() => handleBackgroundSelect(image)}>
                            <img 
                                src={image} 
                                alt={`background-${index}`} 
                                className="w-32 h-32 object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
                <button 
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default BackgroundPicker;
