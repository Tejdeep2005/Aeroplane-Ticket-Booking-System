import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Flight } from '../App';

export default function BookingConfirmation() {
  const [bookingDetails, setBookingDetails] = useState<{
    flight: Flight;
    seat: string;
  } | null>(null);

  useEffect(() => {
    const flightData = sessionStorage.getItem('selectedFlight');
    const seatNumber = sessionStorage.getItem('selectedSeat');
    if (flightData && seatNumber) {
      setBookingDetails({
        flight: JSON.parse(flightData),
        seat: seatNumber
      });
    }
  }, []);

  if (!bookingDetails) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        
        <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-8">
          Your flight has been successfully booked. Check your email for the ticket details.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-4">Booking Details</h3>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-gray-600">Flight</p>
              <p className="font-semibold">{bookingDetails.flight.airline}</p>
            </div>
            <div>
              <p className="text-gray-600">Seat</p>
              <p className="font-semibold">{bookingDetails.seat}</p>
            </div>
            <div>
              <p className="text-gray-600">From</p>
              <p className="font-semibold">{bookingDetails.flight.from}</p>
            </div>
            <div>
              <p className="text-gray-600">To</p>
              <p className="font-semibold">{bookingDetails.flight.to}</p>
            </div>
            <div>
              <p className="text-gray-600">Date</p>
              <p className="font-semibold">
                {new Date(bookingDetails.flight.departureDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Time</p>
              <p className="font-semibold">
                {new Date(bookingDetails.flight.departureDate).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>

        <Link
          to="/flights"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Book Another Flight
        </Link>
      </div>
    </div>
  );
}