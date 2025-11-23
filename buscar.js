import * as fs from 'fs/promises';
import * as path from 'path';

// Define o caminho para o arquivo de dados.
const DATA_FILE = path.join(path.dirname(import.meta.url.replace('file:///', '')), 'data.json');

/**
 * Função principal para buscar termos no arquivo JSON.
 * @param {string} termoBusca - O termo a ser procurado.
 */
async function buscar(termoBusca) {
    // Verifica se um termo de busca foi fornecido.
    if (!termoBusca) {
        console.error('❌ Por favor, forneça um termo para buscar.');
        console.log('Exemplo de uso: node buscar.js "Scrum"');
        return;
    }

    console.log(`🔎 Buscando por "${termoBusca}"...`);

    try {
        // Lê o arquivo data.json.
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        const jsonData = JSON.parse(data);

        // Converte o termo de busca para minúsculas para uma busca case-insensitive.
        const termoLowerCase = termoBusca.toLowerCase();

        // Filtra os itens do JSON cujo título ou descrição contenham o termo de busca.
        const resultados = jsonData.filter(item =>
            item.titulo.toLowerCase().includes(termoLowerCase) ||
            item.descricao.toLowerCase().includes(termoLowerCase)
        );

        // Verifica se encontrou resultados.
        if (resultados.length > 0) {
            console.log(`\n✅ Resultados encontrados (${resultados.length}):`);
            // Exibe os resultados formatados.
            resultados.forEach(item => {
                console.log('------------------------------');
                console.log(`Título: ${item.titulo}`);
                console.log(`Descrição: ${item.descricao}`);
                console.log(`Uso: ${item.uso}`);
                console.log(`Link: ${item.link}`);
            });
            console.log('------------------------------');
        } else {
            console.log('\n❌ Nenhum resultado encontrado para o termo informado.');
        }

    } catch (error) {
        console.error('❌ Ocorreu um erro ao processar a busca:', error.message);
    }
}

// Pega o termo de busca dos argumentos da linha de comando.
const termo = process.argv[2];

buscar(termo);