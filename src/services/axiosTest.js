import axios from "axios";
import alanBtn from '@alan-ai/alan-sdk-web';
// Function to call Axios and search for hotels
const axiosTest = async (destination, checkInDate, checkOutDate, adults, children, roomCount) => {
  // Create an options object with the parameters
  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
    params: {
      dest_id: destination,
      search_type: 'country',
      arrival_date: checkInDate,
      departure_date: checkOutDate,
      adults: adults,
      children_age: children,
      room_qty: roomCount,
      page_number: '1',
      languagecode: 'en-us',
      currency_code: 'AED'
    },
    headers: {
      'X-RapidAPI-Key': 'adb8da16fbmsh299516aa2b76800p17c052jsn7aae0e4a790d',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const hotels = response.data.data.hotels;
    
    if (hotels.length > 0) {
      // Show the name of the first hotel
      const hotelName = hotels[0].property.name;
      alanBtn.playText(`The first hotel is ${hotelName}`);
    } else {
      alanBtn.playText('No hotels found for the given criteria');
    }
  } catch (error) {
    console.error(error);
  }
};