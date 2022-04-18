# markr-brand-tool

## Project setup
```
git clone https://github.com/danielvaswani/markr-brand-tool.git
cd markr-brand-tool
npm install
```
### Start server
```
npm run serve
```

### File structure 
> src 
> > router
> > views
> > components

### Adding a new page 
1. Add your file ending in .vue to src/views/
2. Import it into the top of src/router/index.js
3. Add it to const routes in src/router/index.js
4. Add new <router-link> to src/App.vue
