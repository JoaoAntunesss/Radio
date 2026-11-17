# 📻 Rádio da Secretaria

Rádio online da **Subunidade Orgânica da Conservação — Secretaria** (Câmara Municipal de Matosinhos).

Um rádio antigo no navegador: mostrador FM com agulha, botão de sintonia que roda ao mudar de rádio, favoritas e pesquisa.

## Como usar
- Abrir o `index.html` no navegador, ou o link do GitHub Pages.
- Clicar numa rádio, ou arrastar o botão **SINTONIA**.
- Teclado: `←` / `→` mudam de rádio, `espaço` toca/pausa.
- ☆ marca uma rádio como favorita (fica guardada no navegador).

## Música a tocar e histórico
Quando a rádio divulga essa informação, aparece a música que está a tocar (com capa do álbum) e a lista do que **já tocou**:
- rádios servidas pela Triton / StreamTheWorld (ex.: RFM, Renascença, Mega Hits) — histórico vindo da própria rádio;
- rádios Icecast/Shoutcast que enviam o título com a emissão;
- rádios HLS com etiquetas ID3 (ex.: RTP).

As músicas apanhadas enquanto se ouve também ficam guardadas no navegador. As capas vêm da pesquisa pública do iTunes.
As rádios não divulgam publicamente a **próxima** música, por isso essa informação não existe.

## De onde vêm as rádios
As rádios e os endereços de emissão vêm em direto da API pública e gratuita [Radio Browser](https://api.radio-browser.info) — sem chave nem conta.
As frequências no mostrador são ilustrativas (posição de cada rádio na lista), não as frequências FM reais.

## Tecnologia
Um único ficheiro HTML (HTML + CSS + JavaScript), sem instalação, mais a fotografia de fundo `fundo.jpg` (pôr do sol na praia de Matosinhos, junto ao Terminal de Cruzeiros).
Usa [hls.js](https://github.com/video-dev/hls.js) para rádios em formato HLS.
