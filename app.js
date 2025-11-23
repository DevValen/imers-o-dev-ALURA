// Elementos da página
const resultadosPesquisa = document.getElementById('resultados-pesquisa');
const campoPesquisa = document.getElementById('campo-pesquisa');
let data = [];

// Carrega os dados do JSON quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
      mostrarResultados(data);
    });
});

// Renderiza os cards na página
function mostrarResultados(resultados) {
  resultadosPesquisa.innerHTML = '';

  if (resultados.length === 0) {
    resultadosPesquisa.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    return;
  }

  const container = document.createElement('section');
  container.className = 'card-container';

  // Cria um card para cada item dos resultados
  resultados.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';

    const titulo = document.createElement('h2');
    titulo.textContent = item.titulo;

    const descricao = document.createElement('p');
    descricao.textContent = item.descricao;

    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = 'Saiba mais';
    link.target = '_blank';

    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(document.createElement('br'));
    card.appendChild(link);

    container.appendChild(card);
    container.appendChild(document.createElement('br'));
  });

  resultadosPesquisa.appendChild(container);
}

// Filtra os dados com base no termo de pesquisa
function iniciarBusca(event) {
  event.preventDefault();
  const termo = campoPesquisa.value.toLowerCase();
  const resultados = data.filter(item => 
    item.titulo.toLowerCase().includes(termo) ||
    item.descricao.toLowerCase().includes(termo) ||
    item.uso.toLowerCase().includes(termo) // Corrigido para buscar no campo "uso"
  );
  mostrarResultados(resultados);
}
