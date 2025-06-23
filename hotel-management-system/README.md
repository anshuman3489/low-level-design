# Hotel Management System
- Hotel rooms (different kinds of rooms) -> Factory pattern to create rooms
- Reservations (confimed, cancelled)
- Check-in and Check-out are handled by room
- Payments for reservations -> Strategy pattern for different payment methods
- Guests
- Hotel / HotelManagementSystem -> entry point for users (tracks rooms and reservations) (singleton pattern)
- Observer pattern can be used if users are to be sent notifications for booking, check-in and check-out