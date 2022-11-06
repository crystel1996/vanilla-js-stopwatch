class Watch {
    
    constructor({
        hour,
        minute,
        second,
        millisecond,
        isStarted,
        isBreak,
    }) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond;
        this.isBreak = isBreak;
        this.isStarted = isStarted;
    }

    start() {
        this.isStarted = true;
        this.isBreak = false;
        this.watch();
    }

    break() {
        this.isStarted = false;
        this.isBreak = true;
    }

    watch () {
        if (this.isStarted) {
            setInterval(() => {
                
                this.millisecond = this.millisecond + 1;
                this.millisecond = this.realMilliSecond(this.millisecond);
                this.second = this.realSecond(this.millisecond);
                
                console.log(this.millisecond)

            }, 0.001)
        }
    }

    realMilliSecond(millisecond) {
        return millisecond > 1000 ? 0 : millisecond
    }

}

window.addEventListener('DOMContentLoaded', (event) => {
    const watch = new Watch({
        hour: 00,
        minute: 00,
        second: 00,
        millisecond: 00,
        isBreak: false,
        isStarted: true,
    });
    watch.start();
});



