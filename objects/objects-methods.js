let restaurant = {
    name: 'A2B',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {


        return (this.guestCapacity - this.guestCount) >= partySize
    },
    seatParty(partySize) {
        this.guestCount += partySize;
    },
    removeParty(partySize) {
        this.guestCount -= partySize;
    }




}

restaurant.seatParty(72)


console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)

console.log(restaurant.checkAvailability(4))


