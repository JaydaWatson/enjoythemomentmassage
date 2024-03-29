const BookingModel = require('./schema/bookings')

const express = require('express');

const bodyparser = require('body-parser');

const PORT = process.env.PORT || 3001;

require('./schema/index');

app = express();

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())



app.post('/api', (req, res) => {

  const newBooking = req.body

  // console.log("XXXXXXXXXXXXXXXXXX")
  // console.log(newBooking)
 
  try {
    const booking = new BookingModel(newBooking).save()

    if (booking) {

      res.status(200).json({ status: 'success', data: booking })
    }

  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 'Error Occured' })
  }

})

app.get('/api', async  (req, res) => {
console.log('hello')
  
  try {

    const bookinginfo = await BookingModel.find()

    if (bookinginfo) {

      res.status(200).json({ status: 'success', data: bookinginfo })
    }


  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 'Error Occured' })
  }

})

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('Enjoy-Frontend/build'));
}

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })