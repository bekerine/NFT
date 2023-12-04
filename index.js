var count = 59*60*60 + 59*60 + 59; // Set your counter time here in seconds
        var intervalId;

        function start() {
            intervalId = setInterval(function() {
                count--;
                var hours = Math.floor(count / 3600);
                var minutes = Math.floor((count % 3600) / 60);
                var seconds = count % 60;
                document.getElementById('time').innerText = 
                    (hours < 10 ? "0" + hours : hours) + ":" +
                    (minutes < 10 ? "0" + minutes : minutes) + ":" +
                    (seconds < 10 ? "0" + seconds : seconds);
                if (count === 0) {
                    clearInterval(intervalId);
                }
            }, 1000);
        }

        // Start the counter automatically when the page loads
        window.onload = start;