const arr = [
  new Promise(resolve => {
    setTimeout(resolve, 3000, 'one')
  }),
  new Promise(resolve => {
    setTimeout(resolve, 1000, 'two')
  }),
  new Promise(resolve => {
    setTimeout(resolve, 2000, 'three')
  })
]

const test = async () => {
  for await (let i of arr) {
    console.log(`📢 ~ i`, i);
    }
}

test();
