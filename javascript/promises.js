let login = () => {
    let meraLoginKarnekaPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bah Promise Resolved...")
        }, 3000);
    })

    return meraLoginKarnekaPromise
}


async function openinsta() {
    let res = await login()
    console.log(res);
}

openinsta()
