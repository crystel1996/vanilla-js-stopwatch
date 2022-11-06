class Watch {
    
    _INTERVAL;
    _HOUR = document.getElementById('hour-time');
    _MINUTE = document.getElementById('minute-time');
    _SECOND = document.getElementById('second-time');
    _MILLISECOND = document.getElementById('millisecond-time');

    constructor({
        hour,
        minute,
        second,
        millisecond,
        isStarted,
        isBreak,
        isStopped,
    }) {
        this._hour = hour;
        this._minute = minute;
        this._second = second;
        this._millisecond = millisecond;
        this._isBreak = isBreak;
        this._isStarted = isStarted;
        this._isStopped = isStopped;
    }

    start() {
        this._isStarted = true;
        this._isBreak = false;
        this.watch();
    }

    break() {
        this._isStarted = false;
        this._isBreak = true;
        clearInterval(this._INTERVAL);
    }

    watch () {

            if (this._isStopped) {
                this._minute = 0;
                this._hour = 0;
                this._millisecond = 0;
                this._second = 0;    
            }

            this._isStarted = true;
            this._isStopped = false;
            this._isBreak = false;

            this._INTERVAL = setInterval(() => {
                
                this._millisecond = this._millisecond + 1;
                if (this._millisecond === 90) {
                    this._millisecond = 0;
                    this._second = this._second + 1;
                }
                if (this._second === 60) {
                    this._second = 0;
                    this._minute = this._minute + 1;
                }
                if (this._minute === 60) {
                    this._minute = 0;
                    this._hour = this._hour + 1;
                }
                if (this._hour === 24) {
                    this._hour = 0;
                    this._minute = 0;
                    this._seconde = 0;
                }
                

                this._HOUR.textContent = this._hour > 9 ? this._hour : `0${this._hour}`;
                this._MINUTE.textContent = this._minute > 9 ? this._minute : `0${this._minute}`;
                this._SECOND.textContent = this._second > 9 ? this._second : `0${this._second}`;
                this._MILLISECOND.textContent = this._millisecond > 9 ? this._millisecond : `0${this._millisecond}`;
            }, 10);
    }

    stop() {
        this._isStarted = false;
        this._isBreak = false;
        this._isStopped = true;
        clearInterval(this._INTERVAL);
    }

    reset() {
        this._isStarted = false;
        this._isBreak = false;
        this._isStopped = false;
        clearInterval(this._INTERVAL);
        
        this._millisecond = 0;
        this._second = 0;
        this._minute = 0;
        this._hour = 0;
        
        this._MILLISECOND.textContent = this._millisecond;
        this._SECOND.textContent = this._second;
        this._MINUTE.textContent = this._minute;
        this._HOUR.textContent = this._hour;
        
    }

}

window.addEventListener('DOMContentLoaded', (event) => {
    
    /**
     * Instance of Watch
     */
    const watch = new Watch({
        hour: 00,
        minute: 00,
        second: 00,
        millisecond: 00,
        isBreak: false,
        isStarted: false,
        isStopped: false,
    });

    /**
     * Button action
     */
    const startBtn = document.getElementById('start-watch');
    const breakBtn = document.getElementById('break-watch');
    const stopBtn = document.getElementById('stop-watch');
    const resetBtn = document.getElementById('reset-watch');

    /**
     * Start the watch
     * @param {*} event 
     */
    startBtn.onclick = (event) => {
        event.stopPropagation();
        watch.start();
        startBtn.classList.add('selected');
        breakBtn.classList.remove('selected');
        stopBtn.classList.remove('selected');
    };

    /**
     * Take a Break with the watch
     * @param {*} event 
     */
    breakBtn.onclick = (event) => {
        event.stopPropagation();
        watch.break();
        breakBtn.classList.add('selected');
        startBtn.classList.remove('selected');
        stopBtn.classList.remove('selected');
    };

    /**
     * Stop the watch
     * @param {*} event 
     */
    stopBtn.onclick = (event) => {
        event.stopPropagation();
        watch.stop();
        breakBtn.classList.remove('selected');
        startBtn.classList.remove('selected');
        stopBtn.classList.add('selected');
    };

    /**
     * Reset the watch
     * @param {*} event 
     */
    resetBtn.onclick = (event) => {
        event.stopPropagation();
        watch.reset();
        breakBtn.classList.remove('selected');
        startBtn.classList.remove('selected');
        stopBtn.classList.remove('selected');
    };

});



