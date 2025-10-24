let login = () => {
    let username = prompt("Enter Username")
    let password = prompt("Enter Password")

    if (username == 'admin' && password == 'admin') {
        console.log("Loading...");
        let meraLoginKarnekaPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Login Done...")
            }, 5000);
        })

        return meraLoginKarnekaPromise
    } else {
        throw new Error("Incorrect Username or Password")
    }
}

let reelsScroll = () => {
    console.log("Reels Scrolling...");
    let meraReelsScrollingKaPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Reels DOne...")
        }, 5000);
    })

    return meraReelsScrollingKaPromise
}

let logout = () => {
    console.log("Loading...");
    let meraLogoutKarnekaPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Logout Done...")
        }, 11000);
    })

    return meraLogoutKarnekaPromise
}

async function openInstagram() {
    try {
        let res = await login();
        console.log(res);
        res = await reelsScroll()
        console.log(res);
        res = await logout();
        console.log(res);
    } catch (error) {
        console.log("💥" + error);
    }
}