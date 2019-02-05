function Chronometer() {
    this.currentTime = 0;
    this.milli = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.intervalId = 0;
    this.status = false;
    this.startClick = function () {
        this.intervalId = setInterval(function () {
            this.currentTime++;
            this.setTime();
        }.bind(this), 10);
        this.status = true;
        $("#btnLeft").text("stop");
        $("#btnLeft").attr("class", "btn stop")
        $("#btnRight").text("split");
        $("#btnRight").attr("class", "btn split");
    }
    this.stopClick = function () {
        clearInterval(this.intervalId);
        $("#btnLeft").text("start");
        $("#btnLeft").attr("class", "btn start")
        $("#btnRight").text("reset");
        $("#btnRight").attr("class", "btn reset");
        this.status = false;
    }
    this.setMinutes = function () {
        this.minutes = Math.floor(this.currentTime / 6000)
        $("#minUni.number").text(Math.floor(this.minutes % 10));
        $("#minDec.number").text(Math.floor(this.minutes / 10));
    }
    this.setSeconds = function () {
        this.seconds = Math.floor((this.currentTime / 100) % 60);
        $("#secUni.number").text(Math.floor(this.seconds % 10));
        $("#secDec.number").text(Math.floor(this.seconds / 10));
    }
    this.setMilli = function () {
        this.milli = Math.floor((this.currentTime) % 100);
        $("#milUni").text(Math.floor(this.milli % 10));
        $("#milDec").text(Math.floor(this.milli / 10));
    }
    this.setTime = function () {
        this.setSeconds();
        this.setMinutes();
        this.setMilli();
    }
    this.resetClick = function () {
        this.currentTime = 0;
        this.setSeconds();
        this.setMinutes();
        this.setMilli();
        $("#splits li").remove();
    }
}
var chrono = new Chronometer();
$("#btnLeft").click(function () {
    if (!chrono.status) {
        chrono.startClick();
    } else {
        chrono.stopClick();
    }
})
$("#btnRight").click(function () {
    if (!chrono.status) {
        chrono.resetClick();
    } else {
        $("#splits").append(`<li>${$("#minDec").text()}${$("#minUni").text()}:${$("#secDec").text()}${$("#secUni").text()}:${$("#milDec").text()}${$("#milUni").text()}</li>`);
    }
})