# awesome-icons

Ícones sólidos de 24px com recortes, no mesmo estilo dos ícones do isearch. Funcionam bem em Discord, painéis e apps escuros.

**104 ícones** em 4 cores: `cinza` `#b5bac1`, `branco` `#f2f3f5`, `azul` `#4b8cf7` e `preto` `#1e1f22`, cada um em SVG e em PNG de 128px.

![folha](folha.png)

## Como usar

- SVG: `svg/<cor>/<nome>.svg`
- PNG 128px: `png/<cor>/<nome>.png`
- Emoji no Discord: suba o PNG em Configurações do servidor > Emoji.

## Como funciona

Cada ícone fica em [`icones.mjs`](icones.mjs) como `[nome, categoria, forma, máscara]`:

- `forma` é preenchida com a cor do ícone.
- `máscara` são as áreas em preto recortadas da forma. É isso que dá os furos (o check dentro do círculo, as linhas do documento).
- A grade é 24x24, desenhada com `viewBox="-1 -1 26 26"` para sobrar 1px de margem.

Para adicionar um ícone, inclua uma linha em `icones.mjs` e rode:

```bash
npm install
npm run gera
```

O script gera `svg/`, `png/` e `folha.png`, e atualiza as tabelas abaixo. Ele usa o Chrome instalado; se o Chrome estiver em outro caminho, defina a variável `CHROME`.

## Ícones

<!-- icones -->
### interface (18)

| | | | | | |
| :-: | :-: | :-: | :-: | :-: | :-: |
| <img src="svg/azul/isearch.svg" width="32"><br><sub>isearch</sub> | <img src="svg/azul/notificacao.svg" width="32"><br><sub>notificacao</sub> | <img src="svg/azul/link.svg" width="32"><br><sub>link</sub> | <img src="svg/azul/menu.svg" width="32"><br><sub>menu</sub> | <img src="svg/azul/fechar.svg" width="32"><br><sub>fechar</sub> | <img src="svg/azul/mais.svg" width="32"><br><sub>mais</sub> |
| <img src="svg/azul/confirmar.svg" width="32"><br><sub>confirmar</sub> | <img src="svg/azul/ajustes.svg" width="32"><br><sub>ajustes</sub> | <img src="svg/azul/olho.svg" width="32"><br><sub>olho</sub> | <img src="svg/azul/estrela.svg" width="32"><br><sub>estrela</sub> | <img src="svg/azul/coracao.svg" width="32"><br><sub>coracao</sub> | <img src="svg/azul/favorito.svg" width="32"><br><sub>favorito</sub> |
| <img src="svg/azul/lixeira.svg" width="32"><br><sub>lixeira</sub> | <img src="svg/azul/editar.svg" width="32"><br><sub>editar</sub> | <img src="svg/azul/filtro.svg" width="32"><br><sub>filtro</sub> | <img src="svg/azul/lampada.svg" width="32"><br><sub>lampada</sub> | <img src="svg/azul/bandeira.svg" width="32"><br><sub>bandeira</sub> | <img src="svg/azul/alvo.svg" width="32"><br><sub>alvo</sub> |

### status (11)

| | | | | | |
| :-: | :-: | :-: | :-: | :-: | :-: |
| <img src="svg/azul/aviso.svg" width="32"><br><sub>aviso</sub> | <img src="svg/azul/changelog.svg" width="32"><br><sub>changelog</sub> | <img src="svg/azul/manutencao.svg" width="32"><br><sub>manutencao</sub> | <img src="svg/azul/novidade.svg" width="32"><br><sub>novidade</sub> | <img src="svg/azul/correcao.svg" width="32"><br><sub>correcao</sub> | <img src="svg/azul/instavel.svg" width="32"><br><sub>instavel</sub> |
| <img src="svg/azul/online.svg" width="32"><br><sub>online</sub> | <img src="svg/azul/offline.svg" width="32"><br><sub>offline</sub> | <img src="svg/azul/atualizacao.svg" width="32"><br><sub>atualizacao</sub> | <img src="svg/azul/agendado.svg" width="32"><br><sub>agendado</sub> | <img src="svg/azul/lancamento.svg" width="32"><br><sub>lancamento</sub> |

### comercio (10)

| | | | | | |
| :-: | :-: | :-: | :-: | :-: | :-: |
| <img src="svg/azul/pagamento.svg" width="32"><br><sub>pagamento</sub> | <img src="svg/azul/cupom.svg" width="32"><br><sub>cupom</sub> | <img src="svg/azul/presente.svg" width="32"><br><sub>presente</sub> | <img src="svg/azul/transferencia.svg" width="32"><br><sub>transferencia</sub> | <img src="svg/azul/dinheiro.svg" width="32"><br><sub>dinheiro</sub> | <img src="svg/azul/carrinho.svg" width="32"><br><sub>carrinho</sub> |
| <img src="svg/azul/carteira.svg" width="32"><br><sub>carteira</sub> | <img src="svg/azul/loja.svg" width="32"><br><sub>loja</sub> | <img src="svg/azul/grafico.svg" width="32"><br><sub>grafico</sub> | <img src="svg/azul/porcentagem.svg" width="32"><br><sub>porcentagem</sub> |

### seguranca (2)

| | |
| :-: | :-: |
| <img src="svg/azul/seguranca.svg" width="32"><br><sub>seguranca</sub> | <img src="svg/azul/privado.svg" width="32"><br><sub>privado</sub> |

### comunidade (15)

| | | | | | |
| :-: | :-: | :-: | :-: | :-: | :-: |
| <img src="svg/azul/bot.svg" width="32"><br><sub>bot</sub> | <img src="svg/azul/membros.svg" width="32"><br><sub>membros</sub> | <img src="svg/azul/evento.svg" width="32"><br><sub>evento</sub> | <img src="svg/azul/ticket.svg" width="32"><br><sub>ticket</sub> | <img src="svg/azul/suporte.svg" width="32"><br><sub>suporte</sub> | <img src="svg/azul/regras.svg" width="32"><br><sub>regras</sub> |
| <img src="svg/azul/sorteio.svg" width="32"><br><sub>sorteio</sub> | <img src="svg/azul/vip.svg" width="32"><br><sub>vip</sub> | <img src="svg/azul/medalha.svg" width="32"><br><sub>medalha</sub> | <img src="svg/azul/chat.svg" width="32"><br><sub>chat</sub> | <img src="svg/azul/enviar.svg" width="32"><br><sub>enviar</sub> | <img src="svg/azul/compartilhar.svg" width="32"><br><sub>compartilhar</sub> |
| <img src="svg/azul/curtir.svg" width="32"><br><sub>curtir</sub> | <img src="svg/azul/arroba.svg" width="32"><br><sub>arroba</sub> | <img src="svg/azul/globo.svg" width="32"><br><sub>globo</sub> |

### dados (12)

| | | | | | |
| :-: | :-: | :-: | :-: | :-: | :-: |
| <img src="svg/azul/veiculo.svg" width="32"><br><sub>veiculo</sub> | <img src="svg/azul/saude.svg" width="32"><br><sub>saude</sub> | <img src="svg/azul/cpf.svg" width="32"><br><sub>cpf</sub> | <img src="svg/azul/pessoa.svg" width="32"><br><sub>pessoa</sub> | <img src="svg/azul/telefone.svg" width="32"><br><sub>telefone</sub> | <img src="svg/azul/email.svg" width="32"><br><sub>email</sub> |
| <img src="svg/azul/endereco.svg" width="32"><br><sub>endereco</sub> | <img src="svg/azul/casa.svg" width="32"><br><sub>casa</sub> | <img src="svg/azul/empresa.svg" width="32"><br><sub>empresa</sub> | <img src="svg/azul/justica.svg" width="32"><br><sub>justica</sub> | <img src="svg/azul/documento.svg" width="32"><br><sub>documento</sub> | <img src="svg/azul/frota.svg" width="32"><br><sub>frota</sub> |

### setas (7)

| | | | | | |
| :-: | :-: | :-: | :-: | :-: | :-: |
| <img src="svg/azul/seta-direita.svg" width="32"><br><sub>seta-direita</sub> | <img src="svg/azul/seta-esquerda.svg" width="32"><br><sub>seta-esquerda</sub> | <img src="svg/azul/seta-cima.svg" width="32"><br><sub>seta-cima</sub> | <img src="svg/azul/seta-baixo.svg" width="32"><br><sub>seta-baixo</sub> | <img src="svg/azul/externo.svg" width="32"><br><sub>externo</sub> | <img src="svg/azul/download.svg" width="32"><br><sub>download</sub> |
| <img src="svg/azul/upload.svg" width="32"><br><sub>upload</sub> |

### midia (8)

| | | | | | |
| :-: | :-: | :-: | :-: | :-: | :-: |
| <img src="svg/azul/play.svg" width="32"><br><sub>play</sub> | <img src="svg/azul/pausa.svg" width="32"><br><sub>pausa</sub> | <img src="svg/azul/musica.svg" width="32"><br><sub>musica</sub> | <img src="svg/azul/camera.svg" width="32"><br><sub>camera</sub> | <img src="svg/azul/imagem.svg" width="32"><br><sub>imagem</sub> | <img src="svg/azul/video.svg" width="32"><br><sub>video</sub> |
| <img src="svg/azul/volume.svg" width="32"><br><sub>volume</sub> | <img src="svg/azul/microfone.svg" width="32"><br><sub>microfone</sub> |

### arquivos (4)

| | | | |
| :-: | :-: | :-: | :-: |
| <img src="svg/azul/pasta.svg" width="32"><br><sub>pasta</sub> | <img src="svg/azul/salvar.svg" width="32"><br><sub>salvar</sub> | <img src="svg/azul/anexo.svg" width="32"><br><sub>anexo</sub> | <img src="svg/azul/copiar.svg" width="32"><br><sub>copiar</sub> |

### dev (10)

| | | | | | |
| :-: | :-: | :-: | :-: | :-: | :-: |
| <img src="svg/azul/codigo.svg" width="32"><br><sub>codigo</sub> | <img src="svg/azul/terminal.svg" width="32"><br><sub>terminal</sub> | <img src="svg/azul/git.svg" width="32"><br><sub>git</sub> | <img src="svg/azul/banco-de-dados.svg" width="32"><br><sub>banco-de-dados</sub> | <img src="svg/azul/cpu.svg" width="32"><br><sub>cpu</sub> | <img src="svg/azul/servidor.svg" width="32"><br><sub>servidor</sub> |
| <img src="svg/azul/chave.svg" width="32"><br><sub>chave</sub> | <img src="svg/azul/wifi.svg" width="32"><br><sub>wifi</sub> | <img src="svg/azul/bateria.svg" width="32"><br><sub>bateria</sub> | <img src="svg/azul/controle.svg" width="32"><br><sub>controle</sub> |

### clima (7)

| | | | | | |
| :-: | :-: | :-: | :-: | :-: | :-: |
| <img src="svg/azul/sol.svg" width="32"><br><sub>sol</sub> | <img src="svg/azul/lua.svg" width="32"><br><sub>lua</sub> | <img src="svg/azul/nuvem.svg" width="32"><br><sub>nuvem</sub> | <img src="svg/azul/chuva.svg" width="32"><br><sub>chuva</sub> | <img src="svg/azul/raio.svg" width="32"><br><sub>raio</sub> | <img src="svg/azul/fogo.svg" width="32"><br><sub>fogo</sub> |
| <img src="svg/azul/folha.svg" width="32"><br><sub>folha</sub> |
<!-- /icones -->

## Licença

MIT
