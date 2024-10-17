 

import { useRouter } from 'next/router';
import { countries } from '../page';    

const CountryPage = () => {
  const router = useRouter();
  const { country } = router.query;

   
  const countryData = countries[country as string];

  if (!countryData) {
    return <h1>Country not found.</h1>;
  }

  return (
    <div>
      <h1>{countryData.name}</h1>
      <p>Population: {countryData.population}</p>
      <p>Capital: {countryData.capital}</p>
    </div>
  );
};

export default CountryPage;
