const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://EnjoyTheMomentMassage:EnjoyTheMomentMassage@enjoythemomentmassage.rmwndch.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
},
    (err) =>
        err ? console.log(err) : console.log('Connected to database')
)

