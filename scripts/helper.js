class Helper {

    playPauseAndUpdate(song) {
        //console.log('hello');
        const duration = player.getDuration();
        $('#time-control .total-time').text(duration);
        player.playPause(song);
    }
}

const helper = new Helper();
