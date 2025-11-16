import { DB_URL } from "../env";

const deleteData = async() => {
    return fetch(DB_URL, {method: 'DELETE'}).then((res) => resp.json());
}

export default deleteData;