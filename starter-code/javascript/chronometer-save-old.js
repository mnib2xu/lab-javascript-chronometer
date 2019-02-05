function Chronometer() {
    this.currentMili = 0;
    this.currentTime = 0;
    
    this.currentSecUni = 0;
    this.currentSecDec = 0;
    this.currentMinUni = 0;
    this.currentMinDec = 0;

    this.resetClick = function () {
        this.currentTime = 0;
    }

    this.startClick = function () {
        this.intervalId = setInterval(function () {
            this.currentMili += 1;

            // SECONDS
            if (this.currentMili % 10 === 0) {
                this.currentSecUni++;
                if (this.currentSecUni <= 9) {
                    // console.log("Sec: " + this.currentSecUni);
                    $("#secUni.number").text(this.currentSecUni);
                } else {
                    this.currentSecUni = 0;
                    $("#secUni.number").text(this.currentSecUni);
                    // console.log("Sec: " + this.currentSecUni);
                }
            }

            // DECA SECONDS
            if (this.currentMili % 100 === 0) {
                this.currentSecUni = 0;
                this.currentSecDec++;
                $("#secUni.number").text(this.currentSecUni);
                $("#secDec.number").text(this.currentSecDec);
                // console.log("Dec: " + this.currentSecDec)
            } 

            // MINUTES
            if (this.currentMili % 600 === 0) {
                this.currentSecUni = 0;
                this.currentSecDec = 0;
                this.currentMinUni++;
                $("#secUni.number").text(this.currentSecUni);
                $("#secDec.number").text(this.currentSecDec);
                $("#minUni.number").text(this.currentMinUni);
                // console.log("Min: " + this.currentMinUni)
            }

            // DECA MINUTES
            if (this.currentMili % 6000 === 0) {
                this.currentSecUni = 0;
                this.currentSecDec = 0;
                this.currentMinUni = 0;
                this.currentMinDec++;
                $("#secUni.number").text(this.currentSecUni);
                $("#secDec.number").text(this.currentSecDec);
                $("#minUni.number").text(this.currentMinUni);
                $("#minDec.number").text(this.currentMinDec);                
            }

            // this.currentMinUni = this.currentTime / 60
            // console.log(this.currentMinUni) 
        }.bind(this), 1);
    }
}



$("#btnLeft").click(function() {
    var chrono = new Chronometer ();
    chrono.startClick();
})

$("#btnRight").click(function() {
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