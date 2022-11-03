export async function main() {
    // call quotes API
    const quoteRes = await fetch('https://api.quotable.io/random')
    const quoteJson = await quoteRes.json()
    const quote = quoteJson.content
  
    return {
      data: `Here is a quote: ${quote}`
    }
  }