document.querySelector('.submit').addEventListener('click', getSorted)

async function getSorted() {
  const getHouse = document.querySelector('input').value
  try {
    const res = await fetch(`http://localhost:2021/api/houses/${getHouse}`)
    const data = await res.json()
    console.log(data)
    let origin = document.querySelector('.origin')
    let cohort = document.querySelector('.cohort')
    origin.innerText = data.origin
    cohort.innerText  = data.cohort
   
    
  } catch (err) {
    console.log(err)
  }
}