import { DB_URL } from "../env";

const getData = async () => {
    return fetch(DB_URL).then((response) => response.json());
}

export default getData;