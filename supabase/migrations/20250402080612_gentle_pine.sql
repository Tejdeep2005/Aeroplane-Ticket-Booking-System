/*
  # Create flights table

  1. New Tables
    - `flights`
      - `id` (uuid, primary key)
      - `airline` (text)
      - `from_city` (text)
      - `to_city` (text)
      - `departure_date` (timestamptz)
      - `arrival_date` (timestamptz)
      - `duration` (text)
      - `price` (integer)
      - `seats_available` (integer)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `flights` table
    - Add policy for authenticated users to read flights
*/

CREATE TABLE IF NOT EXISTS flights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  airline text NOT NULL,
  from_city text NOT NULL,
  to_city text NOT NULL,
  departure_date timestamptz NOT NULL,
  arrival_date timestamptz NOT NULL,
  duration text NOT NULL,
  price integer NOT NULL,
  seats_available integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE flights ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read flights"
  ON flights
  FOR SELECT
  TO public
  USING (true);