
const dev = {
    app: {
        port: process.env.DEV_APP_PORT || 8080
    },
    db: {
        host : process.env.DEV_DB_HOST, 
        port : process.env.DEV_DB_PORT,
        name : process.env.DEV_DB_NAME, 
        url : process.env.DEV_DB_URL 
    }
}

// môi trường product tính sau
const pro = {
    app: {
        port: process.env.PRO_APP_PORT || 8080
    },
    db: {
        host : process.env.PRO_DB_HOST || 'localhost',
        port : process.env.PRO_DB_PORT || 27017,
        name : process.env.PRO_DB_NAME || 'Instagram'
    }
}

const environment = {dev, pro}
export const env = process.env.NODE_ENV || 'dev'

export default environment[env] 