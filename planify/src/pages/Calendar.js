import React, {useState, useContext, useEffect} from 'react';
import NavBar from '../components/NavBar';
import { getMonth } from '../util';
import CalendarHeader from '../components/Calendar/CalendarHeader';
import Sidebar from '../components/Calendar/Sidebar';   
import Month from '../components/Calendar/Month';
import GlobalContext from '../context/GlobalContext';
import EventModel from '../components/Calendar/EventModel';
import Week from '../components/Calendar/Week';
import DayView from '../components/Calendar/DayView';

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const {monthIndex, showEventModel,  view, daySelected, selectedWeek} = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    
    return (
        <div>
        <NavBar />
        <CalendarHeader />
        
        <React.Fragment>
            {showEventModel && <EventModel />}
            <div className="h-screen flex flex-colums">
                <div className="flex flex-1"> 
                    <Sidebar />
                    
                    {view === "month" && <Month month={currentMonth} />}
                    {view === "week" && <Week week={currentMonth[selectedWeek]} />}
                    {view === "day" && <DayView day={daySelected} />}

                </div>
            </div>
        </React.Fragment>

        </div>
    );
    };
export default Calendar;
