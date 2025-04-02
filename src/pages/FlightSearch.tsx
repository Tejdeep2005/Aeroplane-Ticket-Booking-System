import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FlightSearchForm from '../components/FlightSearch';
import FlightList from '../components/FlightList';
import { Flight } from '../App';
import { supabase } from '../lib/supabase';

const mockFlights: Flight[] = [
  {
    id: '1',
    airline: 'Air India',
    from: 'Mumbai',
    to: 'Delhi',
    departureDate: '2024-03-20T10:00:00',
    arrivalDate: '2024-03-20T12:00:00',
    duration: '2h',
    price: 5999,
    seats: 45
  },
  {
    id: '2',
    airline: 'IndiGo',
    from: 'Bangalore',
    to: 'Hyderabad',
    departureDate: '2024-03-20T14:00:00',
    arrivalDate: '2024-03-20T15:30:00',
    duration: '1h 30m',
    price: 3999,
    seats: 32
  },
  {
    id: '3',
    airline: 'SpiceJet',
    from: 'Chennai',
    to: 'Kolkata',
    departureDate: '2024-03-20T08:00:00',
    arrivalDate: '2024-03-20T10:30:00',
    duration: '2h 30m',
    price: 4599,
    seats: 28
  },
  {
    id: '4',
    airline: 'Vistara',
    from: 'Delhi',
    to: 'Bangalore',
    departureDate: '2024-03-20T16:00:00',
    arrivalDate: '2024-03-20T18:30:00',
    duration: '2h 30m',
    price: 6999,
    seats: 35
  }
];

export default function FlightSearch() {
  const navigate = useNavigate();
  const [flights, setFlights] = useState<Flight[]>(mockFlights);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (from: string, to: string, date: string) => {
    setLoading(true);
    try {
      const filtered = mockFlights.filter(
        flight => 
          flight.from.toLowerCase().includes(from.toLowerCase()) &&
          flight.to.toLowerCase().includes(to.toLowerCase())
      );
      setFlights(filtered);
    } catch (error) {
      console.error('Error fetching flights:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectFlight = (flight: Flight) => {
    sessionStorage.setItem('selectedFlight', JSON.stringify(flight));
    navigate('/seat-selection');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FlightSearchForm onSearch={handleSearch} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        {loading ? (
          <div className="text-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
            />
            <p className="mt-4 text-gray-600">Searching for flights...</p>
          </div>
        ) : (
          <FlightList flights={flights} onSelect={handleSelectFlight} />
        )}
      </motion.div>
    </motion.div>
  );
}