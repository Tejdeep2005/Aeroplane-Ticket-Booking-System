import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import Register from './pages/Register';
import FlightSearch from './pages/FlightSearch';
import SeatSelection from './pages/SeatSelection';
import Payment from './pages/Payment';
import BookingConfirmation from './pages/BookingConfirmation';
import CustomCursor from './components/CustomCursor';

export interface Flight {
  id: string;
  airline: string;
  from: string;
  to: string;
  departureDate: string;
  arrivalDate: string;
  duration: string;
  price: number;
  seats: number;
}

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="min-h-screen bg-gray-50">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/flights" element={<FlightSearch />} />
            <Route path="/seat-selection" element={<SeatSelection />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<BookingConfirmation />} />
            <Route path="/" element={<Navigate to="/flights" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}