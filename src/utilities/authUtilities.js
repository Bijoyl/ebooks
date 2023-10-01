export async function login(loginDetails, regDetails) {
    const loginCredentials = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(loginDetails)
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, loginCredentials);
    if(!response.ok){
        throw{ message: response.statusText, ststus: response.ststus }; // eslint-disable-line
    }
    const data = await response.json();

    //console.log(data)
    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("ebid", JSON.stringify(data.user.id));
        sessionStorage.setItem("username", JSON.stringify(data.user.name))
    }
    return data;
}

export async function register(regDetail) {
    const requestOptions = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(regDetail)
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);
    if(!response.ok){
        throw{ message: response.statusText, ststus: response.ststus }; // eslint-disable-line
    }
    const data = await response.json();

    console.log(data);
    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("ebid", JSON.stringify(data.user.id));
    }
    return data;
}

export function logOut() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("ebid");
}