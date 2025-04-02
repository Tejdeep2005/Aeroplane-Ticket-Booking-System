import React from 'react';
import { Plane, Clock } from 'lucide-react';
import { Flight } from '../App';

interface FlightListProps {
  flights: Flight[];
  onSelect: (flight: Flight) => void;
}

export default function FlightList({ flights, onSelect }: FlightListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Available Flights</h2>
      
      <div className="space-y-4">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Plane className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">{flight.airline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{flight.duration}</span>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">From</p>
                    <p className="font-semibold">{flight.from}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(flight.departureDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-full border-t border-gray-300 mt-4"></div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">To</p>
                    <p className="font-semibold">{flight.to}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(flight.arrivalDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
                <p className="text-sm text-gray-500 mb-2">{flight.seats} seats left</p>
                <button
                  onClick={() => onSelect(flight)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}