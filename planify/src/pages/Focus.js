import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import PomodoroTimer from '../components/Focus/Timer';
import BackgroundPicker from '../components/Focus/BackgroundPicker'; // Import the BackgroundPicker component

// Import background images from the folder
import bg1 from '../focus_backgrounds/bg1.jpg';
import bg2 from '../focus_backgrounds/bg2.jpg';
import bg3 from '../focus_backgrounds/bg3.jpg';
import bg4 from '../focus_backgrounds/bg4.jpg';
import bg5 from '../focus_backgrounds/bg5.jpg';
import bg6 from '../focus_backgrounds/bg6.jpg';
import bg7 from '../focus_backgrounds/bg7.jpg';
import bg8 from '../focus_backgrounds/bg8.jpg';
import bg9 from '../focus_backgrounds/bg9.jpg';
import bg10 from '../focus_backgrounds/bg10.jpg';
import bg11 from '../focus_backgrounds/bg11.jpg';

const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11]; // Add more images as needed

function Focus() {
    const savedBackground = localStorage.getItem('selectedBackground') || bg1;
    const [selectedBackground, setSelectedBackground] = useState(savedBackground);
    const [isBackgroundPickerOpen, setIsBackgroundPickerOpen] = useState(false); // Declare the state for popup

    useEffect(() => {
        localStorage.setItem('selectedBackground', selectedBackground);
    }, [selectedBackground]);

    return (
        <div className="min-h-screen relative">
            {/* NavBar stays fixed at the top */}
            <NavBar />

            <div
                className="pt-20 min-h-screen relative" 
                style={{
                    backgroundImage: `url(${selectedBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div>
                    <PomodoroTimer />
                </div>

                {/* Background selection button */}
                <button
                    onClick={() => setIsBackgroundPickerOpen(true)} // Open the background picker
                    className="absolute top-4 right-4 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                    Change Background
                </button>


                {/* Background Picker Component */}
                {isBackgroundPickerOpen && (
                    <BackgroundPicker
                        isOpen={isBackgroundPickerOpen}
                        onClose={() => setIsBackgroundPickerOpen(false)} // Close the background picker
                        backgroundImages={backgroundImages}
                        setSelectedBackground={setSelectedBackground}
                    />
                )}
            </div>
        </div>
    );
}

export default Focus;
