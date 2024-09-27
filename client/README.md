# React + TypeScript + Tailwind CSS Web Projesi

## Proje Hakkında
Bu proje, modern web geliştirme araçları olan **React**, **TypeScript** ve **Tailwind CSS** kullanılarak oluşturulmuş bir web sitesi projesidir. Proje, hızlı geliştirme süreci ve esnek yapı için **Vite** ile desteklenmiştir.

## Özellikler
- **React**: Komponent bazlı yapı ile hızlı kullanıcı arayüzü geliştirme.
- **TypeScript**: Tip güvenli JavaScript.
- **Tailwind CSS**: Düşük seviyeli, yardımcı sınıflar ile stil tanımlama.
- **Vite**: Hızlı geliştirme ortamı ve üretim için optimizasyonlar.

## Gereksinimler
Bu projeyi çalıştırmadan önce bilgisayarınızda şu yazılımların kurulu olduğundan emin olun:
- **Node.js** (v14 veya daha yeni bir sürüm)
- **npm** veya **yarn** paket yöneticisi

## Kurulum
Projeyi bilgisayarınıza klonlayıp çalıştırmak için aşağıdaki adımları izleyin:

### 1. Repository'yi klonlayın:
  ```bash
  git clone https://github.com/cembeceriklier/BoostWebsite.git
  cd BoostWebsite```

### 2. Bağımlılıkları Yükleyin:
  ```bash
  npm install```

### 3. Geliştirme sunucusunu başlatın:
  ```bash
  npm run dev```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


