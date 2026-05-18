# Inventário de Imagens — Caminho 2 (Encruzilhada)

São **4 imagens** necessárias para a página completa. Coloque os arquivos nesta pasta com os nomes exatos da tabela.

> Enquanto não estiverem aqui, a página renderiza placeholders com hachura — não quebra o layout.

| # | Arquivo | Dobra | Origem | Status |
|---|---|---|---|---|
| 1 | `img-01-hero-bifurcacao.jpg` | 1 — Hero | Unsplash | ☐ |
| 2 | `img-04-relogio-areia.jpg` | 4 — Oportunidade | Unsplash | ☐ |
| 3 | `img-08-mock-matriz.jpg` | 8 — Entregáveis | Mock produzido OU Unsplash fallback | ☐ |
| 4 | `img-13-juliana-autoridade.png` | 13 — Autoridade (verde) | Foto 02 PNG sem fundo (já existe) | ☐ |

---

## Briefings detalhados

### 1. `img-01-hero-bifurcacao.jpg`
**Função:** primeiro contrato visual — gerar identificação imediata com o estado de encruzilhada, sem priorizar "saiu por escolha" ou "foi cortado".

**Dimensões sugeridas:** 1200×1500 (proporção 4:5, vertical) · WebP ou JPG · máximo 200KB

**Direção principal:** caderno aberto sobre mesa nobre, com 2 anotações lado a lado (metáfora visual da bifurcação recolocar/empreender). Café preto próximo, caneta tinteiro, atmosfera contemplativa de manhã. Tons quentes (areia, mogno, dourado discreto).

**Direção alternativa:** pessoa de costas/silhueta olhando pela janela de casa em manhã de dia de semana (não-escritório), café na mão, luz natural lateral. NÃO mostrar rosto.

**Keywords Unsplash:**
- `journal notebook two pages decision`
- `morning coffee window contemplation`
- `crossroads decision metaphor minimal`
- `home office quiet morning warm`
- `executive notebook fountain pen warm`

**Evitar:** ambientes corporate-frio, neon, pessoa sorrindo "ganhou na loteria", clichê motivacional.

---

### 2. `img-04-relogio-areia.jpg`
**Função:** simbolizar a janela de tempo — urgência lógica, sem fabricar pressa.

**Dimensões sugeridas:** 1280×720 (proporção 16:9, horizontal) · WebP ou JPG · máximo 180KB

**Direção principal:** ampulheta de vidro sobre mesa de madeira nobre, luz lateral suave puxando os tons quentes da areia e do dourado, fundo desfocado.

**Direção alternativa:** relógio analógico vintage com agulha próxima das 12, mesa elegante, livro fechado próximo.

**Keywords Unsplash:**
- `hourglass warm wood`
- `vintage clock minimal desk`
- `time passing concept warm`
- `sand timer mahogany desk`

---

### 3. `img-08-mock-matriz.jpg`
**Função:** concretizar a "Matriz Recolocar vs. Empreender" — mostrar que existe um material físico/digital que o aluno recebe.

**Dimensões sugeridas:** 1000×1250 (proporção 4:5, vertical) · WebP ou JPG · máximo 200KB

**Direção principal (mock produzido):** folha A4 com layout de 2 colunas — coluna esquerda "Recolocar" / coluna direita "Empreender", com sub-itens (janela financeira, janela emocional, janela de mercado, próximo movimento). Fontes da marca (Merriweather + Inter). Sobre mesa elegante com caneta dourada e café.

**Direção alternativa (Unsplash fallback):** flat lay de planejamento — apostila aberta, caneta, post-its discretos, café, sobre mesa de madeira escura.

**Keywords Unsplash:**
- `decision matrix paper minimal desk`
- `comparison sheet wood table`
- `business planning notebook flat lay warm`
- `executive desk planner pen coffee`

---

### 4. `img-13-juliana-autoridade.png`
**Função:** dar rosto à autoridade — aparecer no bloco em verde musgo, criando contraste e protagonismo.

**Dimensões sugeridas:** 800×1000 (proporção 4:5) · **PNG com fundo transparente** · máximo 250KB

**Origem:** **Foto 02 já existente** (Juliana solo, palco principal, blazer bege, microfone, PNG sem fundo recortado). Listada em `dados-fornecidos.md` seção 4.

**Tratamento:** o CSS já aplica `filter: brightness(1.02) contrast(0.95) saturate(0.9)` automaticamente — não precisa pré-processar.

**Alternativa:** se preferir foto retangular sólida, salve como `img-13-juliana-autoridade.jpg` (e troque a extensão no `index.html`, linha do `<img>` da Dobra 13).

---

## Curadoria geral — princípios para qualquer imagem extra

1. **Tons quentes** sempre — paleta areia/mogno/dourado discreto. Evitar azul corporativo frio.
2. **Sem rostos identificáveis em imagens de ambiente** — quem aparece é só a Juliana e os mentorados em depoimentos.
3. **Tratamento global:** brightness 1.02, contrast 0.95, saturação 0.9 (CSS aplica via classe `.img-treated`).
4. **Nunca:** stock photo óbvio (executivos sorrindo apertando mão), gradientes neon, emojis grandes, "antes/depois".
5. **Sempre:** elegância contida, atmosfera, objeto > pessoa, luz natural > luz artificial.

---

## Dica prática para Unsplash

1. Acesse https://unsplash.com
2. Cole as keywords da tabela acima
3. Filtre por: **Orientação** (horizontal/vertical conforme a tabela) e **Cor** (laranja/marrom para combinar com a paleta)
4. Baixe na maior resolução
5. Comprima em https://squoosh.app (WebP, qualidade ~80, alvo 200KB)
6. Renomeie com o nome exato da tabela e coloque nesta pasta

---

## Como adicionar imagens depois (sem mexer no código)

Basta colocar o arquivo aqui com o nome correto. O HTML já está apontando — o `onerror` no `<img>` desliga o placeholder automaticamente quando a imagem real carrega.

Para imagens com nomes diferentes, edite `../../index.html` e troque o `src=` da tag `<img>` correspondente.
