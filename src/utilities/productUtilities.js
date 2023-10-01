export async function productListing(bookSearchTerm) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/products?name_like=${bookSearchTerm ? bookSearchTerm : ""}`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status};
    }
    const data = await response.json();
    return data;
}

export async function productItem(id) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status};
    }
    const data = await response.json();
    return data;
}

export async function productFeatured() {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status};
    }
    const data = await response.json();
    return data;
}