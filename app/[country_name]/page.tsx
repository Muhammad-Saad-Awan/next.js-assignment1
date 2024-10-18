const countryData = {
    Usa: {
        name: "United States of America",
        capital: "Washington, D.C.",
        population: "331 million",
        language: "English",
        currency: "US Dollar",
    },
    Canada: {
        name: "Canada",
        capital: "Ottawa",
        population: "38 million",
        language: "English, French",
        currency: "Canadian Dollar",
    },
    Australia: {
        name: "Australia",
        capital: "Canberra",
        population: "26 million",
        language: "English",
        currency: "Australian Dollar",
    },
    Germany: {
        name: "Germany",
        capital: "Berlin",
        population: "83 million",
        language: "German",
        currency: "Euro",
    },
    
};


function CountryDetails({ params }: { params: { country_name: string } }) {
    
    const country_name = countryData[params.country_name as keyof typeof countryData];


    if (!country_name) {
        return (
            <div>
                <h1>Country Not Found</h1>
                <p>The country you are looking for does not exist in our database.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Country Details for {country_name.name}</h1>
            <p><strong>Capital:</strong> {country_name.capital}</p>
            <p><strong>Population:</strong> {country_name.population}</p>
            <p><strong>Language:</strong> {country_name.language}</p>
            <p><strong>Currency:</strong> {country_name.currency}</p>
        </div>
    );
}

export default CountryDetails;
