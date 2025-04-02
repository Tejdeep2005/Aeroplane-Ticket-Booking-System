import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, User } from 'lucide-react';
import { Flight } from '../App';

interface Seat {
  id: string;
  number: string;
  isOccupied: boolean;
  isSelected: boolean;
}

export default function SeatSelection() {
  const navigate = useNavigate();
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  useEffect(() => {
    const flightData = sessionStorage.getItem('selectedFlight');
    if (flightData) {
      setSelectedFlight(JSON.parse(flightData));
      // Generate seats (mock data)
      const generatedSeats: Seat[] = Array.from({ length: 60 }, (_, i) => ({
        id: `seat-${i + 1}`,
        number: `${Math.floor(i / 6) + 1}${String.fromCharCode(65 + (i % 6))}`,
        isOccupied: Math.random() > 0.8,
        isSelected: false
      }));
      setSeats(generatedSeats);
    }
  }, []);

  const handleSeatSelect = (seat: Seat) => {
    if (seat.isOccupied) return;
    
    setSeats(seats.map(s => ({
      ...s,
      isSelected: s.id === seat.id
    })));
    setSelectedSeat(seat.number);
  };

  const handleConfirm = () => {
    if (selectedSeat) {
      sessionStorage.setItem('selectedSeat', selectedSeat);
      navigate('/payment');
    }
  };

  if (!selectedFlight) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Select Your Seat</h2>
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-600">Flight</p>
            <p className="font-semibold">{selectedFlight.airline}</p>
          </div>
          <div>
            <p className="text-gray-600">From - To</p>
            <p className="font-semibold">{selectedFlight.from} - {selectedFlight.to}</p>
          </div>
          <div>
            <p className="text-gray-600">Date</p>
            <p className="font-semibold">
              {new Date(selectedFlight.departureDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <span>Occupied</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
              <span>Selected</span>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 max-w-2xl mx-auto">
            {seats.map((seat) => (
              <button
                key={seat.id}
                className={`
                  w-12 h-12 rounded-lg flex items-center justify-center transition-colors
                  ${seat.isOccupied ? 'bg-gray-400 cursor-not-allowed' : 
                    seat.isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}
                `}
                onClick={() => handleSeatSelect(seat)}
                disabled={seat.isOccupied}
              >
                {seat.number}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleConfirm}
          disabled={!selectedSeat}
          className={`
            w-full py-3 rounded-lg text-white font-semibold
            ${selectedSeat ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}
          `}
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
}