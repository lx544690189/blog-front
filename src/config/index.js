const development = {
  api: 'http://127.0.0.1:7001',
}

const production = {
  api: 'http://47.99.159.40:7001',
}

const config = process.env === 'production' ? production : development
export default config
