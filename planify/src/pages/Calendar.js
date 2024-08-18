import React, {useState, useContext, useEffect} from 'react';
import NavBar from '../components/NavBar';
import { getMonth } from '../util';
import CalendarHeader from '../components/Calendar/CalendarHeader';
import Sidebar from '../components/Calendar/Sidebar';   
import Month from '../components/Calendar/Month';
import GlobalContext from '../context/GlobalContext';

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const {monthIndex} = useContext(GlobalContext);
    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    
    return (
        <div>
        <NavBar />
        <CalendarHeader />
        
        <React.Fragment>
            <div className="h-screen flex flex-colums">
                
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
