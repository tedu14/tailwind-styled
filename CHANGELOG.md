# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.5] - 2025-11-05

### Adicionado

- ✨ **Sistema de referência de componentes**: Similar ao styled-components, agora é possível referenciar componentes estilizados
- 🆔 **IDs únicos automáticos**: Cada componente recebe automaticamente um ID único para seletores CSS
- 🔧 **Função `withVariant`**: Aplica variantes arbitrárias do Tailwind a classes
- 🎯 **Função `withComponent`**: Permite estilizar componentes baseado em ancestrais

### Melhorado

- 🎨 Componentes agora possuem classes únicas que permitem seletores CSS avançados
- 🔄 Sistema de registro de componentes para rastreamento e identificação
- 💪 Suporte aprimorado para composição de estilos baseada em hierarquia

### Técnico

- Criado `src/components.ts` com sistema de registro de componentes
- Adicionada função `generateId()` para geração de IDs únicos criptograficamente seguros
- Adicionada função `getClasses()` para processar valores de classe
- Adicionada função `getComponentName()` para identificação consistente de componentes
- Implementado sistema de Map para cache de componentes registrados

### Exemplos de uso

```tsx
// Referência de componentes
const Button = tw.button`bg-blue-500`;
const Container = tw.div`${withComponent(Button, "bg-red-500")}`;

// Variantes arbitrárias
const Text = tw.p`${withVariant("&:hover", "text-blue-500")}`;
```

## [1.0.2] - 2025-11-05

### Adicionado

- 📦 Exportação automática de tipos TypeScript
- 🔧 Plugin `vite-plugin-dts` para geração de arquivos `.d.ts`

### Melhorado

- 🎯 Suporte completo ao TypeScript sem necessidade de instalar `@types/tailwindcss-styled`
- 💡 IntelliSense e autocomplete aprimorados para usuários TypeScript
- 📝 Tipos sempre sincronizados com a versão instalada da biblioteca

### Técnico

- Adicionado `vite-plugin-dts@^4.5.4` como dependência de desenvolvimento
- Configurado plugin DTS no `vite.config.ts` para gerar definições de tipos automaticamente
- Atualizado `src/index.ts` para importar explicitamente todos os tipos públicos

## [1.0.1] - 2025-11-03

### Corrigido

- 🔧 URL do repositório corrigida no package.json
- 📝 Configuração de publicação otimizada

## [1.0.0] - 2025-11-03

### Adicionado

- ✨ Função principal `tw` para criar componentes estilizados
- 🎯 Suporte completo para TypeScript com tipagem automática
- 🔄 Mesclagem inteligente de classes Tailwind usando `tailwind-merge`
- 💪 Suporte para props dinâmicas com funções
- 🔗 Suporte completo para `forwardRef` e refs
- 📦 Suporte para ESM e CommonJS
- 🎨 Suporte para todos os elementos HTML via `tw.element`
- 🧩 Suporte para componentes React customizados via `tw(Component)`
- 📝 Documentação completa em português
- 🧪 Source maps para debugging

### Características

- Zero runtime CSS-in-JS (apenas classes Tailwind)
- Bundle otimizado e leve
- Tree-shaking habilitado
- Compatibilidade com React 18+
- Sintaxe inspirada em styled-components

[1.0.0]: https://github.com/tedu14/tailwind-styled/releases/tag/v1.0.0
