// Banco de dados simulado com as informações das práticas sustentáveis
const dadosSustentaveis = {
    ilpf: {
        titulo: "Integração Lavoura-Pecuária-Floresta (ILPF)",
        texto: "É uma estratégia que integra diferentes sistemas produtivos (agrícolas, pecuários e florestais) dentro de uma mesma área. Isso melhora a qualidade do solo, aumenta a biodiversidade e reduz a emissão de gases de efeito estufa, gerando renda o ano todo para o produtor."
    },
    plantio: {
        titulo: "Sistema de Plantio Direto",
        texto: "Técnica onde a semente é colocada na terra sem a necessidade de arar o solo antes. A palha da colheita anterior fica na superfície, protegendo a terra contra a erosão, mantendo a umidade e aumentando a matéria orgânica no solo."
    },
    agua: {
        titulo: "Uso Inteligente e Reúso da Água",
        texto: "Utilização de tecnologias como irrigação por gotejamento, que entrega a quantidade exata de água na raiz da planta, evitando desperdícios. Além disso, sistemas de captação de água da chuva e tratamento de efluentes ajudam a preservar os recursos hídricos."
    },
    energia: {
        titulo: "Uso de Energias Renováveis",
        texto: "Fazendas estão cada vez mais autossuficientes utilizando painéis solares para gerar eletricidade e biodigestores que transformam dejetos animais em biogás e biofertilizantes, criando uma economia circular perfeita."
    }
};

// Função acionada ao clicar nos botões
function mostrarInfo(pratica) {
    const painel = document.getElementById('info-display');
    
    // Efeito de transição (piscar rápido)
    painel.style.opacity = 0;
    
    setTimeout(() => {
        // Atualiza o conteúdo HTML do painel
        painel.innerHTML = `
            <h3>${dadosSustentaveis[pratica].titulo}</h3>
            <p>${dadosSustentaveis[pratica].texto}</p>
        `;
        // Retorna a visibilidade
        painel.style.opacity = 1;
    }, 300); // 300 milissegundos de delay para a animação
}