# 📦 Guia de Publicação no NPM

## ✅ Nome do Pacote: `tailwindcss-styled`

Este guia ajudará você a publicar a biblioteca `tailwindcss-styled` no NPM.

---

## 🚀 Processo de Publicação

### Passo 1: Fazer Login no NPM

```bash
npm login
```

Forneça suas credenciais:

- Username
- Password
- Email
- OTP (se tiver 2FA)

Para verificar se está logado:

```bash
npm whoami
```

---

### Passo 2: Nome do Pacote

✅ O nome `tailwindcss-styled` já foi configurado no `package.json` e está disponível!

---

### Passo 3: Fazer o Build

```bash
pnpm build
```

Isso irá:

- Compilar TypeScript → `dist/*.d.ts`
- Gerar bundle ESM → `dist/tailwind-styled.es.js`
- Gerar bundle CJS → `dist/tailwind-styled.cjs.js`
- Criar sourcemaps

---

### Passo 4: Validar o Build

Verifique se os arquivos foram gerados:

```bash
ls -lh dist/
```

Você deve ver:

```
dist/
├── tailwind-styled.es.js
├── tailwind-styled.es.js.map
├── tailwind-styled.cjs.js
├── tailwind-styled.cjs.js.map
├── index.d.ts
└── index.d.ts.map
```

---

### Passo 5: Testar o Pacote (Dry Run)

```bash
npm pack --dry-run
```

Isso mostrará quais arquivos serão incluídos no pacote sem realmente criar o arquivo.

Para criar o arquivo .tgz localmente (para testar):

```bash
npm pack
```

---

### Passo 6: Publicar! 🎉

```bash
npm publish
```

Se for um scoped package e a primeira vez:

```bash
npm publish --access public
```

---

## ✅ Checklist Final Antes de Publicar

- [x] Nome do pacote está disponível (`tailwindcss-styled`)
- [x] Versão está correta (1.0.0 é boa para primeira publicação)
- [ ] Build executado com sucesso
- [ ] Todos os arquivos em `dist/` foram gerados
- [ ] README.md está completo
- [ ] LICENSE está incluído
- [ ] `.npmignore` está configurado
- [ ] Logado no npm (`npm whoami` funciona)
- [ ] Repository URL está correto no package.json

---

## 🔄 Publicando Atualizações Futuras

Para publicar novas versões:

```bash
# 1. Incrementar versão
npm version patch  # 1.0.0 → 1.0.1
npm version minor  # 1.0.0 → 1.1.0
npm version major  # 1.0.0 → 2.0.0

# 2. Build
pnpm build

# 3. Publicar
npm publish
```

---

## 📊 Após Publicar

Seu pacote estará disponível em:

- npm: `https://www.npmjs.com/package/tailwindcss-styled`
- Instalação: `npm install tailwindcss-styled`

---

## 🐛 Problemas Comuns

### Erro: "You must verify your email"

- Acesse npmjs.com e verifique seu email

### Erro: "You cannot publish over the previously published versions"

- Incremente a versão no package.json

### Erro: "402 Payment Required"

- Você está tentando publicar um scoped package privado
- Use: `npm publish --access public`

### Erro: "403 Forbidden"

- Verifique se está logado: `npm whoami`
- Verifique se o nome já existe: `npm view tailwindcss-styled`

---

## 💡 Dicas

1. **Use Git Tags**: Após publicar, crie uma tag:

   ```bash
   git tag v1.0.0
   git push --tags
   ```

2. **Mantenha um CHANGELOG**: Documente mudanças entre versões

3. **Configure GitHub Actions**: Automatize testes e publicação

4. **Use npm-check-updates**: Mantenha dependências atualizadas
   ```bash
   npx npm-check-updates -u
   ```

---

## 🎯 Próximos Passos Recomendados

1. ✅ Nome escolhido: `tailwindcss-styled`
2. ✅ `package.json` atualizado
3. Execute `pnpm build`
4. Execute `npm publish`
5. Teste instalando em outro projeto:
   ```bash
   npm install tailwindcss-styled
   ```

---

**Boa sorte com sua publicação! 🚀**
