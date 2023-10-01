export const ProductRating = ({rating}) => {
    let productRatingArray = Array(5).fill(false);
    for (let i=0; i<rating; i++){
        productRatingArray[i]= true;

    }

  return (
    <>
        { productRatingArray.map((value, index) => (
            value ? (<i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>) : 
                    (<i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>)
        ))}
    </>
  )
}
