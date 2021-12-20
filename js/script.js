const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
  // pega toda a url
  const url= location.href;
  // so o caminho
const href = link.href;
console.log(href)

// se dentor de url tem o heref
  if(url.includes(href)){
    // adicionando uma classe no html
    link.classList.add('ativo')
    console.log("ondfaon")
  }
}
links.forEach(ativarLink);