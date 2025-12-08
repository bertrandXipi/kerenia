import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomCalendarProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onSelect: (start: Date | null, end: Date | null) => void;
  onClose: () => void;
}

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

const CustomCalendar: React.FC<CustomCalendarProps> = ({ checkIn, checkOut, onSelect, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Initialize view to checkIn date if exists
  useEffect(() => {
    if (checkIn) {
      setCurrentDate(new Date(checkIn));
    }
  }, []);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    // 0 = Sunday, 1 = Monday, etc. Adjust so 0 = Monday for French calendar
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDayClick = (day: number) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    
    // Reset time to avoid timezone issues for comparison
    clickedDate.setHours(0, 0, 0, 0);

    if (!checkIn || (checkIn && checkOut)) {
      // Start new range
      onSelect(clickedDate, null);
    } else if (clickedDate < checkIn) {
      // Clicked before start -> make it new start
      onSelect(clickedDate, null);
    } else if (clickedDate.getTime() === checkIn.getTime()) {
        // Clicked on start -> deselect
        onSelect(null, null);
    } else {
      // Complete range
      onSelect(checkIn, clickedDate);
      // Optional: close on selection complete
      // onClose(); 
    }
  };

  const isSelected = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    date.setHours(0, 0, 0, 0);
    
    if (checkIn && date.getTime() === checkIn.getTime()) return true;
    if (checkOut && date.getTime() === checkOut.getTime()) return true;
    return false;
  };

  const isInRange = (day: number) => {
    if (!checkIn || !checkOut) return false;
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    date.setHours(0, 0, 0, 0);
    return date > checkIn && date < checkOut;
  };

  const isPast = (day: number) => {
    const today = new Date();
    today.setHours(0,0,0,0);
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return date < today;
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    // Empty cells for days before start of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
    }

    // Days of month
    for (let day = 1; day <= daysInMonth; day++) {
        const selected = isSelected(day);
        const inRange = isInRange(day);
        const disabled = isPast(day);

        let cellClass = "h-9 w-9 flex items-center justify-center text-sm rounded-full transition-colors relative z-10 ";
        
        if (selected) {
            cellClass += "bg-brick-600 text-white font-bold shadow-md";
        } else if (inRange) {
            cellClass += "bg-brick-100 text-brick-800";
        } else if (disabled) {
            cellClass += "text-stone-300 cursor-not-allowed";
        } else {
            cellClass += "text-slate-700 hover:bg-stone-100 cursor-pointer";
        }

      days.push(
        <div key={day} className="flex items-center justify-center py-1">
          <button 
            onClick={() => !disabled && handleDayClick(day)}
            disabled={disabled}
            className={cellClass}
          >
            {day}
          </button>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="absolute top-full left-0 mt-4 bg-white p-6 rounded-2xl shadow-2xl border border-stone-100 z-50 w-[340px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
            <button onClick={handlePrevMonth} className="p-2 hover:bg-stone-50 rounded-full text-slate-500 hover:text-brick-600 transition-colors">
                <ChevronLeft size={20} />
            </button>
            <span className="font-condensed font-bold text-lg uppercase tracking-wide text-brick-800">
                {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button onClick={handleNextMonth} className="p-2 hover:bg-stone-50 rounded-full text-slate-500 hover:text-brick-600 transition-colors">
                <ChevronRight size={20} />
            </button>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 mb-2">
            {DAYS.map(day => (
                <div key={day} className="text-center text-xs font-bold text-stone-400 uppercase tracking-wider">
                    {day}
                </div>
            ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-1">
            {renderDays()}
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-stone-100 flex justify-end">
            <button 
                onClick={onClose}
                className="text-xs font-bold uppercase tracking-widest text-brick-600 hover:text-brick-800 transition-colors"
            >
                Fermer
            </button>
        </div>
        
        {/* Pointer Arrow */}
        <div className="absolute -top-2 left-8 w-4 h-4 bg-white transform rotate-45 border-t border-l border-stone-100"></div>
    </div>
  );
};

export default CustomCalendar;
