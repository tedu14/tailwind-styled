# 🎨 tailwind-styled

Uma biblioteca para construir componentes estilizados com Tailwind CSS no React, inspirada no styled-components.

[![npm version](https://img.shields.io/npm/v/tailwind-styled.svg)](https://www.npmjs.com/package/tailwind-styled)
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
- ✅ **tailwind-styled** = Apenas classes Tailwind = Leve e performático

Esta lib combina o melhor dos dois mundos: **a sintaxe elegante do styled-components com a leveza e performance do Tailwind CSS**.

> 💡 **Nota**: Apesar do nome, esta biblioteca aceita **apenas classes Tailwind**, não CSS arbitrário. Isso mantém o bundle leve e aproveita o sistema de purge do Tailwind.

## ✨ Características

- 🚀 **Sintaxe familiar**: Use template literals como no styled-components
- 🎯 **TypeScript**: Tipagem completa para todos os elementos HTML e componentes React
- 🔄 **Mesclagem inteligente**: Combina classes Tailwind automaticamente usando `tailwind-merge`
- 💪 **Props dinâmicas**: Suporte para funções que recebem props
- 🔗 **Forward refs**: Suporte completo para refs
- 📦 **Leve**: Dependências mínimas (clsx + tailwind-merge)

## 📦 Instalação

```bash
npm install tailwind-styled
```

ou

```bash
yarn add tailwind-styled
```

ou

```bash
pnpm add tailwind-styled
```

## 🚀 Uso Básico

```tsx
import tw from "tailwind-styled";

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
import tw from "tailwind-styled";

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
import tw from "tailwind-styled";

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
import tw from "tailwind-styled";
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
import tw from "tailwind-styled";
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
- [npm](https://www.npmjs.com/package/tailwind-styled)

## ⚡ Requisitos

- React 18+
- Tailwind CSS (configurado no seu projeto)

---

Feito com ❤️ por [Thalison Eduardo](https://github.com/tedu14)
