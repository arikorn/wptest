Trying to get import.meta to be "ignored" correctly.

(Bigger picture: in Bitfocus Companion, with default webpack settings,
   `import.meta.url` is converted to a hardcoded string with the full dev environment path in:
    @sentry/node-core/build/esm/sdk/esmLoader.js -- since the goal is distribute the code, this is an error.
    
    In an attempt to prevent this behavior, setting module.parser.javascript.importMeta: false in webpackconfig fixes that problem but causes others including a variation on this simplified one...)


To run (assuming corepack is enabled?, etc.):
~~~
yarn
node FixImports.mts  
or: node FixImport.ts

npx webpack
node dist/main.mjs
~~~

This results in an error:

~~~
$ node dist/main.mjs
<anonymous_script>:20
        const testPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(import.meta.dirname, 'node_modules/bufferutil')
                                                                                 ^^^^

SyntaxError: Cannot use 'import.meta' outside a module
~~~

I have tried numerous variations in the config file but with no effect.
