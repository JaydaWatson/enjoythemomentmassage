const BookingModel = require('./schema/bookings')

const express = require('express');

const bodyparser = require('body-parser');

require('./Schema/index');

app = express();

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())



app.post('/api', (req, res) => {

  const newBooking = req.body.bookinginfo
 
  console.log(req.body)

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


app.listen(3001, () => { console.log('Server started on port 3001') })