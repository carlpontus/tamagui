const cache = new Map()

export const simpleHash = (str: string, hashMin: number | 'strict' = 10) => {
  // remove var()
  if (str[0] === 'v' && str.startsWith('var(')) {
    str = str.slice(6, str.length - 1)
  }

  if (cache.has(str)) {
    return cache.get(str)
  }

  let hash = 0
  let valids = ''
  let added = 0
  const len = str.length

  for (let i = 0; i < len; i++) {
    if (hashMin !== 'strict' && added <= hashMin) {
      const char = str.charCodeAt(i)
      if (char === 46) {
        valids += '--'
        continue
      }
      if (isValidCSSCharCode(char)) {
        added++
        valids += str[i]
        continue
      }
    }
    hash = hashChar(hash, str[i])
  }

  const res = valids + (hash ? Math.abs(hash) : '')

  if (cache.size > 10_000) {
    cache.clear()
  }
  cache.set(str, res)

  return res
}

const hashChar = (hash: number, c: string) => (Math.imul(31, hash) + c.charCodeAt(0)) | 0

function isValidCSSCharCode(code: number) {
  return (
    // A-Z
    (code >= 65 && code <= 90) ||
    // a-z
    (code >= 97 && code <= 122) ||
    // _
    code === 95 ||
    // -
    code === 45 ||
    // 0-9
    (code >= 48 && code <= 57)
  )
}
