import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import { getMonth } from '../util';
import CalendarHeader from '../components/Calendar/CalendarHeader';
import Sidebar from '../components/Calendar/Sidebar';   
import Month from '../components/Calendar/Month';

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    
    return (
        <div>
        <NavBar />
        
        <React.Fragment>
            <div className="h-screen flex flex-colums">
                <CalendarHeader />
                <div className="flex flex-1"> 
                    <Sidebar />
                    <Month month={currentMonth}/>
                </div>
            </div>
        </React.Fragment>

        </div>
    );
    };
export default Calendar;
