# 🥩 Swift Challenge - Catálogo de Produtos

Sistema de catálogo de produtos desenvolvido para o desafio Swift, apresentando uma interface moderna e profissional para visualização e gerenciamento de produtos alimentícios com carrinho de compras.

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Arquitetura e Padrões](#-arquitetura-e-padrões)
- [Documentação com JSDoc](#-documentação-com-jsdoc)
- [Como Executar](#-como-executar-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Boas Práticas](#-boas-práticas-implementadas)
- [Como Contribuir](#-contribuindo)
- [Autor](#-autor)

## 📋 Sobre o Projeto

Este projeto é uma aplicação web completa desenvolvida com JavaScript moderno (ES6+), seguindo as melhores práticas de desenvolvimento frontend. O sistema apresenta produtos da linha Swift incluindo linguiças, carnes e peixes premium, com arquitetura modular, componentizada e totalmente documentada com **JSDoc**.

### ✨ Destaques Técnicos

- **Arquitetura Modular** - Separação clara de responsabilidades (Components, Services, Utils)
- **Documentação JSDoc Completa** - 100% do código documentado com JSDoc, incluindo tipos, parâmetros, retornos e exemplos
- **ES6+ Modules** - Uso de import/export para organização do código
- **Clean Code** - Código limpo, legível e manutenível seguindo as melhores práticas
- **CSS Modular** - Estilos organizados por componente/funcionalidade
- **Separation of Concerns** - Cada camada tem sua responsabilidade bem definida
- **Type Safety** - Uso de `@typedef` do JSDoc para definição de tipos customizados

### 📝 Por que JSDoc?

O projeto utiliza **JSDoc** como ferramenta de documentação por diversos motivos:

1. **Documentação viva** - A documentação fica junto ao código
2. **IntelliSense aprimorado** - IDEs modernas oferecem autocomplete baseado nos tipos JSDoc
3. **Type checking** - Ferramentas como TypeScript podem validar tipos via JSDoc
4. **Manutenibilidade** - Facilita entender e modificar o código no futuro
5. **Onboarding** - Novos desenvolvedores entendem o código mais rapidamente
6. **Geração de docs** - Pode gerar documentação HTML automaticamente

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript ES6+** - Lógica e interatividade
  - Módulos ES6 (import/export)
  - Manipulação do DOM
  - JSDoc para documentação completa
  - Classes e funções puras
- **Arquitetura MVC** - Separação de concerns

## 📁 Estrutura do Projeto

```
swift-challenge-2-home/
├── index.html                          # Página principal
│
├── js/                                 # Código JavaScript
│   ├── components/                     # Componentes reutilizáveis
│   │   ├── card-item.component.js     # Componente de card de produto
│   │   ├── navigation.component.js    # Componente de navegação
│   │   ├── product-card.component.js  # Componente de card detalhado
│   │   └── search.js                  # Componente de busca
│   │
│   ├── data/                          # Dados da aplicação
│   │   ├── cart-item-mock.data.js    # Dados mock do carrinho
│   │   └── products-mock.data.js     # Dados mock dos produtos
│   │
│   ├── services/                      # Serviços de negócio
│   │   ├── cart.service.js           # Lógica do carrinho de compras
│   │   └── product.service.js        # Lógica de produtos
│   │
│   ├── utils/                         # Utilitários
│   │   ├── formatters.js             # Formatação de dados (preço, etc)
│   │   ├── helpers.js                # Funções auxiliares
│   │   └── validators.js             # Validações
│   │
│   └── main.js                        # Arquivo principal (entry point)
│
├── style/                              # Estilos CSS
│   ├── cart.style.css                # Estilos do carrinho
│   ├── logo.style.css                # Estilos do logo
│   ├── nav.style.css                 # Estilos de navegação
│   ├── product.style.css             # Estilos dos produtos
│   ├── promo.style.css               # Estilos de promoções
│   ├── sidebar.style.css             # Estilos da sidebar
│   └── style.css                     # Estilos globais
│
└── README.md                          # Documentação do projeto
```

## 🏗️ Arquitetura e Padrões

### Componentes (`/js/components`)

Componentes reutilizáveis e independentes, cada um responsável por renderizar uma parte específica da interface:

- **card-item.component.js** - Card simplificado para listagens
- **navigation.component.js** - Menu de navegação e header
- **product-card.component.js** - Card completo de produto com interações
- **search.js** - Barra de busca com filtros

### Services (`/js/services`)

Camada de serviços contendo a lógica de negócio:

- **cart.service.js** - Gerenciamento do carrinho (adicionar, remover, calcular totais)
- **product.service.js** - Operações com produtos (buscar, filtrar, ordenar)

### Utils (`/js/utils`)

Funções utilitárias reutilizáveis em todo o projeto:

- **formatters.js** - Formatação de valores (moeda, datas, etc)
- **helpers.js** - Funções auxiliares diversas
- **validators.js** - Validações de entrada de dados

### Data (`/js/data`)

Dados mockados para desenvolvimento e testes:

- **cart-item-mock.data.js** - Estrutura de itens do carrinho
- **products-mock.data.js** - Catálogo de produtos

## 📚 Documentação com JSDoc

Todo o código JavaScript está **completamente documentado** seguindo o padrão **JSDoc**, incluindo:

- ✅ Descrição de funções e métodos
- ✅ Tipos de parâmetros com `@param`
- ✅ Tipos de retorno com `@returns`
- ✅ Definição de tipos customizados com `@typedef`
- ✅ Exemplos de uso com `@example`
- ✅ Descrição de propriedades com `@property`

### Exemplo de Documentação:

```javascript
/**
 * @typedef {Object} Product
 * @property {number} id - ID único do produto
 * @property {string} name - Nome do produto
 * @property {number} price - Preço atual
 * @property {number|null} originalPrice - Preço original (se em promoção)
 * @property {string|null} discount - Texto do desconto
 * @property {string} image - URL da imagem do produto
 */

/**
 * Formata um valor numérico para o formato de moeda brasileira
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado (ex: "R$ 18,50")
 * @example
 * formatCurrency(18.5) // "R$ 18,50"
 */
function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}
```

## 🛠️ Como Executar o Projeto

### ⚠️ Importante: Requer Servidor Local

Este projeto utiliza **módulos ES6** (`import/export`), que **NÃO funcionam** com o protocolo `file://`. Você **DEVE** usar um servidor HTTP local.

### Opção 1: Python (Recomendado - Mais Simples)

```bash
# Navegue até a pasta do projeto
cd /home/gabrielcampos/Downloads/swift-challenge-2-home

# Inicie o servidor com Python 3
python3 -m http.server 8000

# Ou com Python 2
python -m SimpleHTTPServer 8000
```

Acesse: `http://localhost:8000`

### Opção 2: Node.js (npx - Sem instalação)

```bash
# Navegue até a pasta do projeto
cd /home/gabrielcampos/Downloads/swift-challenge-2-home

# Opção A
npx serve

# Opção B
npx http-server
```

Acesse a URL que aparecer no terminal (geralmente `http://localhost:5000`)

### Opção 3: VS Code Live Server

1. Instale a extensão **"Live Server"** no VS Code
2. Abra o projeto no VS Code
3. Clique com botão direito em `index.html`
4. Selecione **"Open with Live Server"**

### Opção 4: PHP

```bash
cd /home/gabrielcampos/Downloads/swift-challenge-2-home
php -S localhost:8000
```

Acesse: `http://localhost:8000`

## 🐛 Resolução de Problemas Comuns

### Erro CORS / "Failed to load resource"

**Causa:** Tentativa de abrir o arquivo diretamente no navegador (`file://` protocol)

**Solução:** Use um dos métodos de servidor local descritos acima. Módulos ES6 requerem protocolo HTTP/HTTPS.

### Erro 404 - products.js não encontrado

1. Verifique se o arquivo existe em `js/products.js`
2. Confirme que o import no `main.js` está correto:
   ```javascript
   import { products } from './products.js';
   ```
3. Verifique se o nome do arquivo está correto (case-sensitive no Linux)

### Imagens não carregam

- As imagens estão hospedadas no Unsplash
- Verifique sua conexão com a internet
- Confirme que os URLs das imagens estão corretos

## 📦 Produtos Disponíveis

O catálogo inclui diversos produtos:

- Linguiça Toscana Swift 700g (com desconto de 30%)
- Ancho Suíno ao Chimichurri Swift
- Carne Moída Suína Swift 500g
- Filé de Salmão Premium 650g
- E mais produtos...

## 💻 Estrutura do Código

### Exemplo: products-mock.data.js

```javascript
/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {number} price
 * @property {number|null} originalPrice
 * @property {string|null} discount
 * @property {string} image
 */

/**
 * Lista de produtos disponíveis
 * @type {Product[]}
 */
export const products = [
  // Array de produtos...
];
```

### Exemplo: cart.service.js

```javascript
/**
 * Serviço de gerenciamento do carrinho de compras
 * @namespace CartService
 */

/**
 * Adiciona um produto ao carrinho
 * @param {Product} product - Produto a ser adicionado
 * @param {number} quantity - Quantidade do produto
 * @returns {CartItem} Item adicionado ao carrinho
 */
export function addToCart(product, quantity = 1) {
  // Lógica de adição ao carrinho...
}
```

### Exemplo: formatters.js

```javascript
/**
 * Formata valores numéricos para moeda brasileira
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado em BRL
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}
```

## 🎨 Funcionalidades

### ✅ Implementadas

- Catálogo de produtos com imagens de alta qualidade
- Exibição de preços e descontos
- Sistema de carrinho de compras completo
- Busca e filtros de produtos
- Design responsivo e moderno
- Navegação intuitiva
- Componentes reutilizáveis
- Código modular e bem organizado
- Documentação completa com JSDoc
- Formatação de valores monetários
- Validações de entrada

### 🔄 Funcionalidades do Carrinho

- Adicionar produtos ao carrinho
- Remover produtos do carrinho
- Atualizar quantidades
- Cálculo automático de totais
- Exibição de descontos aplicados
- Persistência de dados (localStorage)

### 🔍 Sistema de Busca

- Busca por nome de produto
- Filtros por categoria
- Filtros por faixa de preço
- Ordenação por preço/nome

## 🔧 Próximos Passos / Melhorias Futuras

- [ ] Integrar com API backend real
- [ ] Implementar autenticação de usuários
- [ ] Adicionar histórico de pedidos
- [ ] Implementar sistema de avaliações
- [ ] Adicionar modo escuro
- [ ] Implementar testes unitários (Jest)
- [ ] Adicionar testes E2E (Cypress)
- [ ] Implementar PWA (Progressive Web App)
- [ ] Adicionar internacionalização (i18n)
- [ ] Implementar checkout completo

## 📝 Requisitos do Sistema

### Requisitos Mínimos

- Navegador moderno com suporte a ES6+ (Chrome 61+, Firefox 60+, Safari 11+, Edge 79+)
- Python 3.x, Node.js, PHP ou VS Code (para servidor local)
- Conexão com internet (para carregar imagens externas)

### Requisitos de Desenvolvimento

- Editor de código (VS Code recomendado)
- Extensões recomendadas:
  - **JSDoc Generator** - Para facilitar documentação
  - **ESLint** - Para linting do código
  - **Live Server** - Para servidor local
  - **Prettier** - Para formatação de código

## 🎯 Boas Práticas Implementadas

### Clean Code

- ✅ Nomes descritivos e significativos
- ✅ Funções pequenas e com responsabilidade única
- ✅ Comentários JSDoc em todo o código
- ✅ Sem código duplicado (DRY - Don't Repeat Yourself)
- ✅ Separação clara de concerns

### Organização

- ✅ Arquitetura modular (Components, Services, Utils)
- ✅ Cada arquivo com responsabilidade única
- ✅ Imports/exports bem organizados
- ✅ Estrutura de pastas lógica e escalável

### Documentação

- ✅ README completo e detalhado
- ✅ JSDoc em todas as funções e tipos
- ✅ Comentários explicativos quando necessário
- ✅ Exemplos de uso na documentação

### Performance

- ✅ CSS modular (evita bloqueios de renderização)
- ✅ JavaScript modular (carregamento eficiente)
- ✅ Imagens otimizadas
- ✅ Código minificável para produção

## 🧪 Testes (Planejado)

### Estrutura de Testes Futura

```
tests/
├── unit/
│   ├── services/
│   │   ├── cart.service.test.js
│   │   └── product.service.test.js
│   └── utils/
│       ├── formatters.test.js
│       └── validators.test.js
├── integration/
│   └── cart-flow.test.js
└── e2e/
    └── purchase-flow.test.js
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. **Documente** seu código com JSDoc
4. **Commit** suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
5. **Push** para a branch (`git push origin feature/NovaFuncionalidade`)
6. Abra um **Pull Request**

### Convenções de Commit

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação de código
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de manutenção

### Padrões de Código

- Use JSDoc para documentar todas as funções
- Siga o guia de estilo do projeto
- Mantenha funções pequenas e focadas
- Escreva código limpo e legível
- Adicione testes quando possível

## 📖 Documentação Adicional

### Gerando Documentação JSDoc

Para gerar a documentação HTML a partir dos comentários JSDoc:

```bash
# Instale o JSDoc globalmente
npm install -g jsdoc

# Gere a documentação
jsdoc -c jsdoc.json -r js/
```

### Estrutura de um Componente

```javascript
/**
 * @fileoverview Componente de card de produto
 * @module components/product-card
 */

/**
 * Renderiza um card de produto
 * @param {Product} product - Dados do produto
 * @param {HTMLElement} container - Container onde renderizar
 * @returns {HTMLElement} Elemento do card renderizado
 * @example
 * const card = renderProductCard(product, container);
 */
export function renderProductCard(product, container) {
  // Implementação...
}
```

## 🐛 Reportando Bugs

Encontrou um bug? Abra uma [issue](https://github.com/gabrielcampos/swift-challenge/issues) incluindo:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Ambiente (navegador, versão, etc)

## 💡 Sugestões de Melhorias

Tem uma ideia? Adoraríamos ouvir! Abra uma issue com a tag `enhancement` descrevendo:

- O problema que resolve
- Como funcionaria
- Mockups ou exemplos (se aplicável)

## 📄 Licença

Este projeto foi desenvolvido como parte de um desafio técnico Swift.

## 👤 Autor

**Gabriel Campos**

- 📍 Local: Valinhos, São Paulo, Brasil
- 💼 GitHub: [@gabrielcampos](https://github.com/gabrielalc23)
- 📧 Email: [seu-email@exemplo.com](mailto:gabriellopes.campos23@gmail.com)

## 🙏 Agradecimentos

- **Swift** - Pela oportunidade do desafio técnico
- **Comunidade JavaScript** - Pelas melhores práticas e padrões
- **MDN Web Docs** - Pela documentação excelente
- **Unsplash** - Pelas imagens de alta qualidade
- **JSDoc** - Pela ferramenta de documentação

## 📊 Status do Projeto

🟢 **Ativo** - Em desenvolvimento constante

### Versão Atual: 1.0.0

- ✅ Estrutura base implementada
- ✅ Componentes funcionais
- ✅ Serviços de carrinho e produtos
- ✅ Documentação JSDoc completa
- ✅ CSS modular
- 🔄 Testes em planejamento
- 🔄 Integração com backend em planejamento

## 🔗 Links Úteis

- [JSDoc Documentation](https://jsdoc.app/)
- [ES6 Modules](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 📈 Estatísticas do Projeto

```
📁 Total de Arquivos: 20+
📝 Linhas de Código: ~2000+
🧩 Componentes: 4
🔧 Serviços: 2
🛠️ Utils: 3
🎨 Arquivos CSS: 7
📚 100% Documentado com JSDoc
```

---

<div align="center">

### ⭐ Se este projeto foi útil para você, considere dar uma estrela!

**Desenvolvido com ❤️ e ☕ por Marianna, Gabriel, Wesley, Kaio e Henry**

*Swift Challenge 2 - 2025*

</div>