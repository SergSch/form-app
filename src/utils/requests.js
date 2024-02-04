export const fetchCountry = async (setCountries) => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) throw new Error('Somthig went wrong');
    const data = await response.json();
    setCountries(data);
    console.log(data[0].name.common);
  } catch (error) {
    console.log(error);
  }
};
fetchCountry();
