import { LightningElement,track } from 'lwc';

export default class LwcBasics extends LightningElement {

    displayInformation = false;
    hideDrivers = true;
    selectedDriver = {};

    @track
    drivers = [{
        Id: 1,
        Name: 'Lewis Hamilton',
        Team: 'Mercedes',
        Age: 30,
        RaceWins: 103,
        IsRaceWinner: true
    },
    {
        Id: 2,
        Name: 'Lando Norris',
        Team: 'McLaren',
        Age: 21,
        RaceWins: 1,
        IsRaceWinner: true
    },
    {
        Id: 3,
        Name: 'Max Verstappen',
        Team: 'Red Bull',
        Age: 22,
        RaceWins: 58,
        IsRaceWinner: true
    },
    {
        Id: 4,
        Name: 'Charles Leclerc',
        Team: 'Ferrari',
        Age: 23,
        RaceWins: 5,
        IsRaceWinner: true
    },
    {
        Id: 5,
        Name: 'Oscar Piastri',
        Team: 'McLaren',
        Age: 20,
        RaceWins: 0,
        IsRaceWinner: false
    },
    {
        Id: 6,
        Name: 'Yuki Tsunoda',
        Team: 'RB VCard',
        Age: 21,
        RaceWins: 0,
        IsRaceWinner: false
    }
    ];

    handleClick(evt) {
        const driverId = evt.target.dataset.id;
        this.selectedDriver = this.drivers.find(driver => driver.Id == driverId);
        this.selectedDriver ? this.displayInformation = true : this.displayInformation = false;
        this.selectedDriver ? this.hideDrivers = false : this.hideDrivers = true;
        setTimeout(() => {
            this.displayInformation = false;
            this.hideDrivers = true;
        }, 2000);

    }
}