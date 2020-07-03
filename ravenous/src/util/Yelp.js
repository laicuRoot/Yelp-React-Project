const apiKey = 'VKBV-z1BQ2NLLdnzrFo8zFb8GeaazmHXn8qLcTHJe9ZbRd9ahUth66RrKRRQ6mJfqbfk2Atj0crwuNJVSsy3zbbeMxMDEdkvJidlxdLtsxsKFmAU9j66za7VNxX_XnYx';

export const Yelp = {
  search(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: { 
      Authorization: `Bearer ${apiKey}`
    }}).then((response)=> {
      return response.json();
    }).then((jsonResponse)=>{
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map((business)=>{
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city:business.location.city,
            state:business.location.state,
            zipCode:business.location.zip_code,
            category:business.categories,
            rating:business.rating,
            reviewCount:business.review_count,
          }
        })
      }
    })
  }
};

