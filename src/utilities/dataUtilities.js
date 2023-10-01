export async function userData() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const ebid = JSON.parse(sessionStorage.getItem("ebid"));

    const requestedData = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${ebid}`, requestedData);
    if(!response.ok){
        throw{ message: response.statusText, status: response.status }; // eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function getUserOrders() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const ebid = JSON.parse(sessionStorage.getItem("ebid"));
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${ebid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    });
    if(!response.ok){
        throw{ message: response.statusText, ststus: response.status }; // eslint-disable-line
    }
    const data = await response.json();
    return data;

}

export async function orderCreationData(cartList, total, user) {
    const token = JSON.parse(sessionStorage.getItem("token"));

    const order = {
        itemsInCart: cartList,
        total_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(order)
    });
    if(!response.ok){
        throw{ message: response.statusText, status: response.status }; // eslint-disable-line
    }
    const data = await response.json();
    return data;
}
