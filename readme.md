# 🎨 tailwindcss-styled

Uma biblioteca para construir componentes estilizados com Tailwind CSS no React, inspirada no styled-components.

[![npm version](https://img.shields.io/npm/v/tailwindcss-styled.svg)](https://www.npmjs.com/package/tailwindcss-styled)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 💡 Motivação

Esta biblioteca existe para aproveitar todas as praticidades do **Tailwind CSS** sem sofrer com seus principais problemas:

### O Problema com Tailwind Puro

- **Poluição do HTML**: Componentes com dezenas de classes Tailwind tornam o código difícil de ler e manter
- **Reutilização limitada**: Copiar e colar as mesmas classes em múltiplos lugares
- **Extensão complexa**: Criar variações de estilos é trabalhoso e repetitivo

```tsx
// ❌ Código poluído e difícil de manter
<button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200">
  Click me
</button>

// Reutilizar? Copiar e colar tudo novamente 😔
<button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200">
  Another button
</button>
```

### A Inspiração do styled-components

A sintaxe foi inspirada no **styled-components** por seus benefícios:

- ✅ **Centralização de estilos**: Componentes com estilos bem definidos
- ✅ **Reutilização fácil**: Crie uma vez, use em qualquer lugar
- ✅ **Customização simples**: Props dinâmicas para variações
- ✅ **Composição**: Estenda componentes facilmente

```tsx
// ✅ Limpo, reutilizável e fácil de customizar
const Button = tw.button`
  px-4 py-2
  bg-blue-500 hover:bg-blue-600
  text-white font-semibold
  rounded-lg shadow-md
  transition-colors duration-200
`;
```

### Por que não usar styled-components?

Apesar do nome similar, esta biblioteca **NÃO** é CSS-in-JS:

- ❌ **styled-components** = CSS-in-JS = Mais peso no bundle final
- ✅ **tailwindcss-styled** = Apenas classes Tailwind = Leve e performático

Esta lib combina o melhor dos dois mundos: **a sintaxe elegante do styled-components com a leveza e performance do Tailwind CSS**.

> 💡 **Nota**: Apesar do nome, esta biblioteca aceita **apenas classes Tailwind**, não CSS arbitrário. Isso mantém o bundle leve e aproveita o sistema de purge do Tailwind.

## ✨ Características

- 🚀 **Sintaxe familiar**: Use template literals como no styled-components
- 🎯 **TypeScript**: Tipagem completa para todos os elementos HTML e componentes React
- 🔄 **Mesclagem inteligente**: Combina classes Tailwind automaticamente usando `tailwind-merge`
- 💪 **Props dinâmicas**: Suporte para funções que recebem props
- 🔗 **Forward refs**: Suporte completo para refs
- 🆔 **IDs únicos**: Cada componente recebe automaticamente um ID único para seletores CSS
- 🎨 **Referência de componentes**: Estilize componentes baseado em hierarquia (similar ao styled-components)
- 🔧 **Variantes arbitrárias**: Aplique variantes personalizadas do Tailwind com `withVariant`
- 📦 **Leve**: Dependências mínimas (clsx + tailwind-merge)

## 📦 Instalação

```bash
npm install tailwindcss-styled
```

ou

```bash
yarn add tailwindcss-styled
```

ou

```bash
pnpm add tailwindcss-styled
```

### Importações Disponíveis

```tsx
// Import principal
import tw from "tailwindcss-styled";

// Funções utilitárias (v1.0.3+)
import { withComponent, withVariant } from "tailwindcss-styled";
```

## ⚙️ Configuração do Editor (VS Code)

Para ter **autocomplete** e **IntelliSense** do Tailwind dentro dos template literals, configure a extensão [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss):

### 1. Instale a extensão

```bash
# Via VS Code
code --install-extension bradlc.vscode-tailwindcss
```

Ou busque por "Tailwind CSS IntelliSense" na aba de extensões do VS Code.

### 2. Configure o `.vscode/settings.json`

Crie/edite o arquivo `.vscode/settings.json` na raiz do seu projeto:

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["tw`([^`]*)", "([\"'`][^\"'`]*[\"'`])"],
    ["tw\\.[^`]+`([^`]*)", "([\"'`][^\"'`]*[\"'`])"],
    ["tw\\(.*?\\).*?`([^`]*)", "([\"'`][^\"'`]*[\"'`])"]
  ],
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

### 3. Resultado

Agora você terá:

- ✅ **Autocomplete** de classes Tailwind
- ✅ **Preview de cores** ao passar o mouse
- ✅ **Avisos** de classes inválidas
- ✅ **Documentação** inline das classes

```tsx
const Button = tw.button`
  px-4 py-2           // ← Autocomplete funcionando!
  bg-blue-500         // ← Preview da cor #3B82F6
  hover:bg-blue-600   // ← Sugestões de variantes
  text-white
`;
```

**Dica:** Comece a digitar dentro do template literal e pressione `Ctrl + Space` para ativar o autocomplete manualmente.

### Como Testar

Crie um arquivo de teste e comece a digitar:

```tsx
import tw from "tailwindcss-styled";

const Test = tw.div`
  bg-  // ← Pressione Ctrl+Space aqui para ver as sugestões
`;
```

Se o autocomplete aparecer, está funcionando! 🎉

### Configuração Global (Opcional)

Para aplicar em todos os projetos, adicione no **User Settings** do VS Code:

1. Pressione `Ctrl/Cmd + Shift + P`
2. Digite "Preferences: Open User Settings (JSON)"
3. Adicione as mesmas configurações acima

### Outros Editores

**WebStorm / IntelliJ IDEA:**

A extensão oficial do Tailwind CSS já suporta template literals automaticamente. Basta ter o plugin Tailwind CSS instalado.

**Neovim:**

Use o [tailwindcss-language-server](https://github.com/tailwindlabs/tailwindcss-intellisense) com a seguinte configuração:

```lua
require('lspconfig').tailwindcss.setup({
  settings = {
    tailwindCSS = {
      experimental = {
        classRegex = {
          { "tw`([^`]*)", "([\"'`][^\"'`]*[\"'`])" },
          { "tw\\.[^`]+`([^`]*)", "([\"'`][^\"'`]*[\"'`])" },
          { "tw\\(.*?\\).*?`([^`]*)", "([\"'`][^\"'`]*[\"'`])" },
        },
      },
    },
  },
})
```

---

## 🚀 Uso Básico

```tsx
import tw from "tailwindcss-styled";

// Criar um componente estilizado
const Button = tw.button`
  px-4 py-2
  bg-blue-500 hover:bg-blue-600
  text-white font-semibold
  rounded-lg shadow-md
  transition-colors duration-200
`;

// Usar no seu componente
function App() {
  return <Button onClick={() => console.log("Clicked!")}>Click me</Button>;
}
```

## 📖 Exemplos

### Componentes HTML Básicos

```tsx
import tw from "tailwindcss-styled";

const Container = tw.div`
  max-w-7xl mx-auto
  px-4 sm:px-6 lg:px-8
`;

const Title = tw.h1`
  text-4xl font-bold
  text-gray-900 dark:text-white
`;

const Card = tw.article`
  bg-white dark:bg-gray-800
  rounded-lg shadow-lg
  p-6
`;
```

### Props Dinâmicas

Use funções para acessar props e aplicar classes condicionalmente:

```tsx
import tw from "tailwindcss-styled";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button = tw.button<ButtonProps>`
  font-semibold rounded-lg
  transition-colors duration-200
  
  ${(props) => {
    switch (props.variant) {
      case "danger":
        return "bg-red-500 hover:bg-red-600 text-white";
      case "secondary":
        return "bg-gray-500 hover:bg-gray-600 text-white";
      default:
        return "bg-blue-500 hover:bg-blue-600 text-white";
    }
  }}
  
  ${(props) => {
    switch (props.size) {
      case "sm":
        return "px-3 py-1 text-sm";
      case "lg":
        return "px-6 py-3 text-lg";
      default:
        return "px-4 py-2";
    }
  }}
`;

// Uso
<Button variant="danger" size="lg">
  Delete
</Button>;
```

### Extendendo Componentes Customizados

Você também pode estilizar componentes React existentes:

```tsx
import tw from "tailwindcss-styled";
import { Link } from "react-router-dom";

const StyledLink = tw(Link)`
  text-blue-600 hover:text-blue-800
  underline underline-offset-2
  transition-colors
`;

// Uso
<StyledLink to="/home">Go Home</StyledLink>;
```

### Sobrescrevendo Classes

Classes podem ser sobrescritas através da prop `className`:

```tsx
const Button = tw.button`
  bg-blue-500 text-white
  px-4 py-2
`;

// A classe bg-red-500 substituirá bg-blue-500
<Button className="bg-red-500">Red Button</Button>;
```

### Props Complexas

```tsx
interface AlertProps {
  type: "info" | "success" | "warning" | "error";
  dismissible?: boolean;
}

const Alert = tw.div<AlertProps>`
  p-4 rounded-lg border
  
  ${(props) => {
    const colors = {
      info: "bg-blue-50 border-blue-200 text-blue-800",
      success: "bg-green-50 border-green-200 text-green-800",
      warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
      error: "bg-red-50 border-red-200 text-red-800",
    };
    return colors[props.type];
  }}
  
  ${(props) => props.dismissible && "flex items-center justify-between"}
`;

// Uso
<Alert type="success" dismissible>
  Operation completed successfully!
</Alert>;
```

### Composição

```tsx
const BaseButton = tw.button`
  px-4 py-2 rounded-lg
  font-semibold
  transition-all duration-200
`;

const PrimaryButton = tw(BaseButton)`
  bg-blue-500 hover:bg-blue-600
  text-white
`;

const OutlineButton = tw(BaseButton)`
  bg-transparent border-2 border-blue-500
  text-blue-500 hover:bg-blue-50
`;
```

### Referência de Componentes

Similar ao styled-components, você pode referenciar componentes estilizados para criar estilos condicionais baseados em hierarquia:

```tsx
import tw from "tailwindcss-styled";
import { withComponent, withVariant } from "tailwindcss-styled";

// Criar componente filho
const Icon = tw.span`
  inline-block w-4 h-4
  text-gray-500
`;

const Button = tw.button`
  px-4 py-2
  bg-blue-500 text-white
  rounded-lg
`;

// Estilizar componente baseado em onde o Icon está
const MenuItem = tw.li`
  px-4 py-2 cursor-pointer
  hover:bg-gray-100
  
  ${withComponent(Icon, "text-blue-500")}
  
  ${withVariant("&:hover", withComponent(Icon, "text-blue-700"))}
`;

// Uso
function Menu() {
  return (
    <ul>
      <MenuItem>
        <Icon>🏠</Icon> Home
        {/* Icon será azul quando MenuItem estiver em hover */}
      </MenuItem>
    </ul>
  );
}
```

### Variantes Arbitrárias

Use `withVariant` para aplicar variantes personalizadas do Tailwind:

```tsx
import { withVariant } from "tailwindcss-styled";

const Card = tw.div`
  p-6 bg-white rounded-lg
  
  ${withVariant("&:has(> img)", "p-0")}
  ${withVariant("@media (min-width: 768px)", "p-8")}
  ${withVariant("&[data-active='true']", "bg-blue-50 border-2 border-blue-500")}
`;

// Uso
<Card data-active="true">
  <img src="..." alt="..." />
  <p>Conteúdo</p>
</Card>;
```

### Componentes Aninhados

Estilize componentes filhos quando dentro de containers específicos:

```tsx
const Button = tw.button`
  bg-blue-500 text-white
  px-4 py-2 rounded
`;

const Title = tw.h2`
  text-2xl font-bold
  text-gray-900
`;

const Card = tw.div`
  p-6 bg-white rounded-lg shadow
  
  ${withComponent(Title, "text-blue-600 mb-4")}
  ${withComponent(Button, "bg-green-500 hover:bg-green-600")}
`;

// Uso
function ProductCard() {
  return (
    <Card>
      <Title>Produto</Title> {/* Será azul */}
      <p>Descrição</p>
      <Button>Comprar</Button> {/* Será verde ao invés de azul */}
    </Card>
  );
}
```

### IDs Únicos Automáticos

Cada componente criado com `tw` recebe automaticamente um ID de classe único (ex: `tw-abc123`). Isso permite que você:

- Crie seletores CSS específicos sem conflitos
- Referencie componentes de forma segura
- Mantenha estilos isolados e previsíveis

```tsx
const Button = tw.button`bg-blue-500`;
// Automaticamente recebe uma classe como "tw-1j2k3l4m5n6o7p8q"

const Container = tw.div`
  ${withComponent(Button, "bg-red-500")}
  // Usa o ID único do Button para aplicar estilos
`;
```

## 🔧 API

### `tw.element`

Cria um componente estilizado para qualquer elemento HTML:

```tsx
tw.div`classes`;
tw.button`classes`;
tw.input`classes`;
// ... todos os elementos HTML
```

### `tw(Component)`

Estiliza um componente React personalizado:

```tsx
const StyledCustom = tw(MyComponent)`classes`;
```

### Template Literals

Aceita:

- **Strings**: Classes Tailwind diretas
- **Funções**: Recebem props e retornam classes

```tsx
tw.div`
  static-classes
  ${(props) => (props.active ? "active-classes" : "inactive-classes")}
  ${(props) => props.size === "lg" && "large-classes"}
`;
```

### Funções Utilitárias

#### `withVariant(variant, className)`

Aplica uma variante arbitrária do Tailwind a classes.

**Parâmetros:**

- `variant` (string): O seletor da variante (ex: `"&:hover"`, `"@media (min-width: 768px)"`)
- `className` (ClassValue): As classes a serem aplicadas

**Retorna:** String com classes prefixadas pela variante

```tsx
import { withVariant } from "tailwindcss-styled";

const Button = tw.button`
  px-4 py-2
  ${withVariant("&:hover", "bg-blue-600 scale-105")}
  ${withVariant("&[disabled]", "opacity-50 cursor-not-allowed")}
  ${withVariant("@media (min-width: 768px)", "px-6 py-3")}
`;
```

#### `withComponent(component, className)`

Aplica classes quando um componente específico está dentro do contexto.

**Parâmetros:**

- `component` (ElementType): O componente a referenciar
- `className` (ClassValue): As classes a serem aplicadas

**Retorna:** String com classes prefixadas pelo seletor do componente

```tsx
import { withComponent } from "tailwindcss-styled";

const Icon = tw.span`w-4 h-4`;
const Button = tw.button`
  flex items-center gap-2
  ${withComponent(Icon, "text-white")}
`;

// Uso
<Button>
  <Icon>🏠</Icon> Home
</Button>;
```

### Exemplos Avançados

#### Combinando `withVariant` e `withComponent`

```tsx
const Badge = tw.span`
  px-2 py-1 rounded
  bg-gray-200 text-gray-800
`;

const Card = tw.div`
  p-6 bg-white rounded-lg
  
  ${withComponent(Badge, "bg-blue-100 text-blue-800")}
  ${withVariant("&:hover", withComponent(Badge, "bg-blue-200"))}
`;
```

#### Estados Complexos

```tsx
const Input = tw.input`
  px-4 py-2 border rounded
  ${withVariant("&:focus", "border-blue-500 ring-2 ring-blue-200")}
  ${withVariant("&:invalid", "border-red-500")}
  ${withVariant("&:disabled", "bg-gray-100 cursor-not-allowed")}
`;
```

#### Media Queries

```tsx
const Container = tw.div`
  px-4
  ${withVariant("@media (min-width: 640px)", "px-6")}
  ${withVariant("@media (min-width: 1024px)", "px-8")}
  ${withVariant("@media (min-width: 1280px)", "px-12")}
`;
```

## 🛠️ Como Funciona

A biblioteca combina três funcionalidades principais:

1. **clsx**: Para concatenar classes condicionalmente
2. **tailwind-merge**: Para mesclar classes Tailwind de forma inteligente, evitando conflitos
3. **React.forwardRef**: Para suporte completo a refs

Todas as classes são processadas e mescladas automaticamente, garantindo que classes conflitantes sejam resolvidas corretamente (por exemplo, `bg-blue-500` e `bg-red-500` não conflitam).

## 📝 TypeScript

A biblioteca é totalmente tipada e oferece:

- Autocompletar para todos os elementos HTML
- Tipagem de props para componentes estilizados
- Inferência de tipos para props dinâmicas
- Suporte completo para refs tipadas

```tsx
import tw from "tailwindcss-styled";
import type { ComponentPropsWithoutRef } from "react";

interface CustomProps extends ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "secondary";
}

const Button = tw.button<CustomProps>`
  ${(props) => (props.variant === "primary" ? "bg-blue-500" : "bg-gray-500")}
`;
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

MIT © [Thalison Eduardo](https://github.com/tedu14)

## 🔗 Links

- [GitHub](https://github.com/tedu14/tailwind-styled)
- [npm](https://www.npmjs.com/package/tailwindcss-styled)
- [CHANGELOG](./CHANGELOG.md) - Histórico de versões e mudanças

## ⚡ Requisitos

- React 18+
- Tailwind CSS (configurado no seu projeto)

---

Feito com ❤️ por [Thalison Eduardo](https://github.com/tedu14)
