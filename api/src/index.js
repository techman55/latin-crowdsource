

export default {
  async fetch(request, env) {

    const { TOKENS, DATA } = env

    let { pathname, searchParams } = new URL(request.url)
    const params = Object.fromEntries(searchParams)

    pathname = pathname.replace("/credofile", "")


    switch (pathname) {

      case "/submit":

        try {

          const { latin, english, notes, chapterId } = params

          console.log(JSON.stringify(await DATA.get('practice.json')))
          let sentences = await DATA.get('practice.json')
          sentences = await sentences.json()

          console.log(sentences)

          if (!(sentences[decodeURIComponent(chapterId)])) {
            sentences[decodeURIComponent(chapterId)] = {}
          }

          sentences[decodeURIComponent(chapterId)][decodeURIComponent(latin)] = {
            answer: decodeURIComponent(english),
            grammar_notes: decodeURIComponent(notes).split("\n")
          }

          await DATA.put('practice.json', JSON.stringify(sentences))

          return new Response(JSON.stringify({
            status: true
          }))


        } catch (err) {
          console.log(err.stack)
          return new Response(JSON.stringify({
            status: false,
            message: "Some data invalid",
            stack: err.stack
          }))
        }

        break

      case "/get":

        return new Response((await DATA.get('practice.json')).body || "{}")

        break

      default:

        return new Response("Unknown method")

        break

    }


  },
};
