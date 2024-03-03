const express = require('express');
const bodyParser = require('body-parser');
const reservationService = require('./reservationService');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Рута за създаване на нова резервация
app.post('/api/reservations', (req, res) => {
    try {
        const newReservation = reservationService.createReservation(req.body);
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Рута за получаване на всички резервации
app.get('/api/reservations', (req, res) => {
    const reservations = reservationService.getAllReservations();
    res.status(200).json(reservations);
});

// Рута за получаване на резервация по идентификационен номер
app.get('/api/reservations/:id', (req, res) => {
    const reservation = reservationService.getReservationById(req.params.id);
    if (reservation) {
        res.status(200).json(reservation);
    } else {
        res.status(404).json({ error: 'Резервацията не е намерена.' });
    }
});

app.listen(port, () => {
    console.log(`Сървърът е стартиран на порт ${port}`);
});