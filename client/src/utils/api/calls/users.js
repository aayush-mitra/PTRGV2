const API_URL = 'http://localhost:5000/api'

export const userVerify = async (token) => {
    let url = `${API_URL}/users/verify?token=${token}`;

    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response.json();
}