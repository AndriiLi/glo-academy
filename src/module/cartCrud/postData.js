import { DB_URL } from "../env";

const postData = async (data) => {
    return fetch(DB_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((res) => res.json());
}

export default postData;