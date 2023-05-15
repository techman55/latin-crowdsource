import authHandler from "./authHandler.js";

export async function submitSentence({ latin, english, chapterId, notes }) {

    const data = (await fetch(`https://api.techman.dev/credofile/submit?english=${english}&latin=${latin}&chapterId=${chapterId}&notes=${notes}`)).json()

    if (authHandler(data)) {
        return true
    }


}



