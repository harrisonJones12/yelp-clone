const apiKey = '5JxY0AJqijpA1uC9XiuOkwlR3OP7zZq0RC71SvUtEyDN2g5VkvlZePvawK79WznDnU1KUs3mK-mHZZq7gYgP77l71jbJ7-mkttzF35vOx4rMU9Iw38sauRm1oVcWXXYx';

 const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then((response) => {
      response.json();
    })
    .then((jsonResponse) => {
      if (jsonResponse.businesses) {
      return jsonResponse.businesses.map( (business) => {
        return {
          id:business,
          imageSrc:business,
          name:business,
          address:business,
          city:business,
          state:business,
          zipCode:,
          category:business,
          rating:business,
          reviewCount:business
        }
      })
      }
    })
    .catch( => console.error(error));
  }
};

export default Yelp;
