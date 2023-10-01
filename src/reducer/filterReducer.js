export const filterReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "PRODUCT_LIST":
            return { productList: payload.products }
        case "SORT_BY":
            return { ...state, sortBy: payload.sortBy }
        case "RATING":
            return { ...state, rating: payload.rating }
        case "BEST_SELLING":
            return { ...state, bestSelling: payload.bestSelling }
        case "IN_STOCK":
            return { ...state, onlyInStock: payload.onlyInStock }
        case "CLEAR_FILTER":
            return {
                ...state, onlyInStock: false,
                bestSelling: false,
                sortBy: null,
                rating: null
            }
        default:
            throw new Error("No found");
    }
}