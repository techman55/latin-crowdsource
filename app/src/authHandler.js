
export default function authHandler(requestData) {

    console.log(requestData)

    const {authenticated, redirect} = requestData

    if (authenticated === false) {

        console.log(redirect)

        document.location.href = redirect
        return false

    }

    return true

}
