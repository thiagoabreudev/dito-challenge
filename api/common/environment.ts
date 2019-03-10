export const environment = {
    server: { port: process.env.SERVER_PORT || 3000 }, 
    db: { url: process.env.DB_URL || 'mongodb://mongodb/dit-challenge' }, 
    ditoApi: { url: 'https://storage.googleapis.com/dito-questions/events.json'}    
}