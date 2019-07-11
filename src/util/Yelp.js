const apiKey = '5JxY0AJqijpA1uC9XiuOkwlR3OP7zZq0RC71SvUtEyDN2g5VkvlZePvawK79WznDnU1KUs3mK-mHZZq7gYgP77l71jbJ7-mkttzF35vOx4rMU9Iw38sauRm1oVcWXXYx';

 export const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then( response => {
      return response.json();
    })
    .then( jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map( (business)  => {
            return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.address,
                city: business.city,
                state: business.state,
                zipCode: business.zip_code,
                category: business.category,
                rating: business.rating,
                reviewCount: business.review_count
            }
          });
        }
      console.log(jsonResponse);
    })

    .catch( error => console.error(error));
  }
};
