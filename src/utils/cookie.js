const cookie = {
    set (name, value, date) {
        // date为过期秒数
        document.cookie = `${name}=${value}; max-age=${date}`;
    },
    remove (name) {
        this.set(name, '', 0)
    },
    get (name) {
        const allCookies = document.cookie.split(";");
        for (let i = 0; i < allCookies.length; i++) {
            const item = allCookies[i].split("=");
            if (item[0] === name) {
                return item[1];
            }
        }
    }
}

export default cookie
