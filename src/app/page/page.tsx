 

interface Country {
    name: string;
    population: string;
    capital: string;
  }
  
  export const countries: { [key: string]: Country } = {
    canada: {
      name: 'Canada',
      population: '38 million',
      capital: 'Ottawa',
    },
    usa: {
      name: 'United States of America',
      population: '331 million',
      capital: 'Washington D.C.',
    },
    germany: {
      name: 'Germany',
      population: '83 million',
      capital: 'Berlin',
    },
  };
  
  const Page = () => {
    return <div>This is the main page.</div>;
  };
  
  export default Page;
  