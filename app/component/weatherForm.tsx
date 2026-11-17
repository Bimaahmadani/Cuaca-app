 interface WeatherFormProps {
        city: string;
        setCity: (city: string)=> void
        fetchWeather: () => Promise<void>;
    };

export default function WeatherForm({ city, setCity, fetchWeather }: WeatherFormProps ) {

    function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
        setCity(e.target.value);
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            fetchWeather();
            setCity("");
    }



    return(
        <form  onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white rounded-lg border-4 text-black border-gray-500">
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

