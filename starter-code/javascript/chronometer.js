function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;

    this.startClick = function () {
        this.intervalId = setInterval(function () {
            this.currentTime++;
            return this.currentTime;
            this.setTime();
        }.bind(this), 100);
    }

    this.setMinutes = function (currentTime) {
        this.minutes = 0;
        if (this.startClick() % 60 === 0) {
            this.minutes++;
            console.log(this.minutes);
        }
    }

    this.setSeconds = function () {
        this.seconds = this.startClick();
        console.log(this.seconds + "seconds")
    }

    this.setTime = function () {
        this.setSeconds();
        this.setMinutes();
    }
}



$("#btnLeft").click(function() {
    var chrono = new Chronometer ();
    chrono.startClick();
})


// Nothing now...
Chronometer.prototype.startClick = function () {

};

Chronometer.prototype.setMinutes = function () {

};

Chronometer.prototype.setSeconds = function () {

};

Chronometer.prototype.twoDigitsNumber = function () {

};

Chronometer.prototype.setTime = function () {

};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {

};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};