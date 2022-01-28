class LocalFetch {

    constructor() {
        console.log("LocalFetch");
    }

    async get(url) {
        const response = await fetch(url)
        return await response.json()
    }

}

export default new LocalFetch()