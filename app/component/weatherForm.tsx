
export default function WeatherForm({ city, setCity, fetchWeather }) {
      function handleChange(e) {
        setCity(e.target.value);
   };

   function handleSubmit(e) {
        e.preventDefault();
        fetchWeather();
        setCity("");
   }



    return(
        <form  onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white rounded-lg border-2 border-gray-500">
             <input 
                type="text" 
                placeholder="Enter city name"
                onChange={handleChange}
                value={city} 
            />
                <button>Get weather</button>
        </form>
    )
}

