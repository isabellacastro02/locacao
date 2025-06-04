const mongoose = require('mongoose');
require('dotenv').config();

requiset mongoose.connect(process.env.MONGO_URI, {   
})

const conectaMongoDB = async () => {
    useNewUrlParser: true,
    userUnifieldTopology: true
});
    console.log('MongoDB conectado com sucesso');
} catch (error) {}