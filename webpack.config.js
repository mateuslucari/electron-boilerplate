module.exports = (env, args) => {

    const ENVIRONMENT = process.env.ENVIRONMENT
    const TARGET = process.env.TARGET

    if (ENVIRONMENT == 'development') {
        if(TARGET == 'electron'){
            return require('./webpack/electron/webpack.development')
        } else if (TARGET == 'react') {
            return require('./webpack/react/webpack.development')
        }
    } else if (ENVIRONMENT == 'production') {
        if (TARGET == 'electron') {
            return require('./webpack/electron/webpack.production')

        } else if (TARGET == 'react') {
            return require('./webpack/react/webpack.production')
        }
    } else {
        console.log('Ambiente desconhecido', ENVIRONMENT, TARGET)
    }
};