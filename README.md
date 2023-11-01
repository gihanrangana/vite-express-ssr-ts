# Express JS + Typescript + Vite Server Side Rendering (SSR)


Vite SSR is a powerful combination of technologies that can help you build fast, scalable, and SEO-friendly web applications.

Vite is a modern build tool that can significantly improve the performance of your development workflow. It is also well-suited for server-side rendering (SSR), which allows you to generate HTML pages on the server, resulting in faster page load times and better SEO.

Typescript is a superset of JavaScript that adds type safety to your code. This can help you catch errors early and prevent bugs from making it into your production application.

When combined, Vite SSR gives you a powerful stack for building high-performance, scalable, and SEO-friendly web applications.

**SEO benefits of Vite SSR**

* **Faster page load times**: SSR-generated pages load faster than client-rendered pages, which is important for both user experience and SEO.
* **Improved SEO**: SSR-generated pages are more indexable and crawlable by search engines, which can lead to improved rankings.
* **Better code quality**: Typescript can help you write better code by catching errors early and preventing bugs. This can lead to a more reliable and stable application, which can also have a positive impact on SEO.

Overall, Vite SSR is a great choice for building fast, scalable, and SEO-friendly web applications.

**To create project with this template:**
1. Click `Use this template` button to create a repo with this template
2. Use `degit` to clone this repo with this command `npx degit gihanrangana/vite-express-ssr-ts <project-name>`
3. Just clone repo by url using cli or Github Desktop app

**To run this project**

Using yarn
```
yarn install
yarn dev // for development mode
yarn build // for production build
yarn serve // serve the production server
```

Using npm
```
npm install
npm run dev // for development mode
npm run build // for production build
npm run serve // serve the production server
```

After starting the application you can use the following routes:

`http://localhost:3000` - This will render the react application

`http://localhost:3000/api` - This will return your api routes, all api routes will be returned under the `/api` endpoint, to config api routes see the `server/app.ts`

Demo - https://stackblitz.com/github/gihanrangana/vite-express-ssr-ts
