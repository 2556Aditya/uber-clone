'use client';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function InputItem({ type }) {
  const [value, setValue] = useState(''); // Store input value
  const [suggestions, setSuggestions] = useState([]); // Store autocomplete suggestions

  // Fetch suggestions from Go Maps API
  const fetchSuggestions = async (input) => {
    if (!input) {
      setSuggestions([]); // Clear suggestions if input is empty
      return;
    }

    try {
      const response = await fetch(`https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=AlzaSySz2L8gUud74k2R48Z7DMUKTP8Xa0HV_ca`);
      const data = await response.json();
      setSuggestions(data.predictions || []); // Adjust the field based on API response structure
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const input = e.target.value;
    setValue(input);
    if (input === '') {
      setSuggestions([]); // Clear suggestions immediately when input is empty
    } else {
      fetchSuggestions(input); // Fetch suggestions as the user types
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion.description); // Set selected suggestion to input
    setSuggestions([]); // Clear suggestions after selection
  };

  useEffect(() => {
    // Clear suggestions when input value changes to empty
    if (!value) {
      setSuggestions([]);
    }
  }, [value]); // Runs when `value` changes

  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex flex-col'>
      {/* Input Field */}
      <div className='flex items-center gap-4'>
        <Image
          src={type === 'source' ? '/source1.png' : '/dest.png'}
          width={15}
          height={15}
          alt={type === 'source' ? 'Pickup Location' : 'DropOff Location'}
        />
        <input
          type='text'
          value={value}
          onChange={handleChange}
          placeholder={type === 'source' ? 'Pickup Location' : 'DropOff Location'}
          className='bg-transparent w-full outline-none'
        />
      </div>

      {/* Autocomplete Suggestions */}
      {suggestions.length > 0 && (
        <ul className='bg-white shadow-md rounded-lg mt-2'>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className='p-2 cursor-pointer hover:bg-gray-200'
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InputItem;
