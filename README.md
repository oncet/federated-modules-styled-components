# federated-modules-styled-components

Start `foo` first and then `shell`. You might need to adjust ports, see:

* [`foo/webpack.config.js`](https://github.com/oncet/federated-modules-styled-components/blob/master/foo/webpack.config.js#L9)
* [`shell/public/index.html`](https://github.com/oncet/federated-modules-styled-components/blob/master/shell/public/index.html#L5)

If you navigate to `/foo` you should see an `Invalid hook call` error on the console.

If you render a `div` instead on [`foo/src/App.js`](https://github.com/oncet/federated-modules-styled-components/blob/master/foo/src/App.js#L9), everything should work fine.
