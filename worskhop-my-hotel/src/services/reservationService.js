// Модел за резервация
class Reservation {
  constructor(id, guestName, checkInDate, checkOutDate) {
      this.id = id;
      this.guestName = guestName;
      this.checkInDate = checkInDate;
      this.checkOutDate = checkOutDate;
  }
}

// "База данни" за резервации
const reservations = [];

// Сервиз за резервации
const reservationService = {
  // Създаване на нова резервация
  createReservation: ({ guestName, checkInDate, checkOutDate }) => {
      const id = reservations.length + 1;
      const newReservation = new Reservation(id, guestName, checkInDate, checkOutDate);
      reservations.push(newReservation);
      return newReservation;
  },

  // Получаване на всички резервации
  getAllReservations: () => reservations,

  // Получаване на резервация по идентификационен номер
  getReservationById: (id) => reservations.find(reservation => reservation.id === parseInt(id)),
};

module.exports = reservationService;