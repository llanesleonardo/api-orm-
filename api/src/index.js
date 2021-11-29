import '@babel/polyfill'
import http from 'http'
import app from './app'
import chalk from 'chalk'

const PORT = process.env.PORT || 3005

http.Server(app).listen(PORT, async () => {
  try {
    console.log(chalk.green(`Api started at : http://localhost:${PORT}/api`))
  } catch (error) {
    console.error(error)
  }
})