const filmes = document.getElementById('movie')
const cadeiras = document.querySelectorAll('.row .seat')
const quantidade = document.querySelector('#count')
const total = document.querySelector('#total')
const botao = document.querySelector('.btn')
let cadeirasSelecionadas = 0
let quantidadeSelecionada = 0

cadeiras.forEach((e) => {
  e.addEventListener('click', () => {
    if(!e.classList.contains('occupied')){
      e.classList.toggle('selected')
      if(e.matches('.selected')){
      cadeirasSelecionadas += 1
      quantidade.innerText = cadeirasSelecionadas
      }else{
      cadeirasSelecionadas -= 1
      quantidade.innerText = cadeirasSelecionadas
      }
      let valor = filmes.options[filmes.selectedIndex].value;
      total.innerText = valor * quantidade.innerText
    }  
  })
})
filmes.addEventListener('change', () => {
  valor = filmes.options[filmes.selectedIndex].value;
  total.innerText = valor * quantidade.innerText
})

botao.addEventListener('click', () => {
  cadeiras.forEach((e) => {
    if(e.matches('.selected')){
      e.classList.remove('selected')
      e.classList.add('occupied')
      cadeirasSelecionadas = 0
      quantidadeSelecionada = 0
      quantidade.innerText = 0
      total.innerText = 0
    }
  })
})

