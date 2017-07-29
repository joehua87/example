// @flow

export function add(a: number, b: number, c: number): number {
  return a + b + c
}

export function addAsync(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b)
    }, 200)
  })
}
//test change 2
//YYYYYYYYY
//CCCCCC