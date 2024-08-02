
document.addEventListener('DOMContentLoaded', (event) => {
    const audio1 = document.getElementById('audio1');
    const audio2 = document.getElementById('audio2');
    const audio3 = document.getElementById('audio3');
    const audio4 = document.getElementById('audio4');

    audio1.addEventListener('play', () => {
        console.log('Audio 1 is playing');
        if ((!audio2.paused)||(!audio3.paused)||(!audio4.paused)) {
            audio2.pause();
            audio3.pause();
            audio4.pause();
        }
    });

    audio2.addEventListener('play', () => {
        console.log('Audio 2 is playing');
        if ((!audio1.paused)||(!audio3.paused)||(!audio4.paused)) {
            audio1.pause();
            audio3.pause();
            audio4.pause();
        }
    });
    
    audio3.addEventListener('play', () => {
        console.log('Audio 2 is playing');
        if ((!audio1.paused)||(!audio2.paused)||(!audio4.paused)) {
            audio1.pause();
            audio2.pause();
            audio4.pause();
        }
    });

    audio4.addEventListener('play', () => {
        console.log('Audio 2 is playing');
        if ((!audio1.paused)||(!audio2.paused)||(!audio3.paused)) {
            audio1.pause();
            audio2.pause();
            audio3.pause();
        }
    });
});

// home.js
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navbar = document.getElementById('navbar');
    var closeIcon = document.getElementById('close-icon');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });

    closeIcon.addEventListener('click', function() {
        navbar.classList.remove('show');
    });
});

document.getElementById('getWeather').addEventListener('click', function() {
    var city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    } else {
        document.getElementById('weather').textContent = "Please enter a city name.";
    }
});

function getWeather(city) {
    const apiKey = 'd14a944671284d4abdf124056242907'
    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(weatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weather = data.current.condition.text;
            const temp = data.current.temp_c;
            document.getElementById('weather').innerHTML = `Weather: ${weather}, Temperature: ${temp}°C`;
        })
        .catch(error => {
            document.getElementById('weather').textContent = "Unable to fetch weather data.";
            console.error('Error fetching data:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 

        successMessage.style.display = 'block';

        contactForm.reset();

        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
    });
});

function SubForm(event){
    event.preventDefault();
    $.ajax({
        url:'https://api.apispreadsheets.com/data/PR5bpx6FzNjUqavg/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
            document.querySelector("#myForm").reset();
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}

document.querySelector(".btn").addEventListener("click", function(e){
    e.preventDefault();
    var emailInput= document.querySelector(".contact-input");
    var success= document.querySelector(".successEmail");
    var emailValue = emailInput.value;

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(emailPattern.test(emailValue)){
    emailInput.value="";
    emailInput.placeholder="Thanks For Subscribing";
    emailInput.classList.add('green-placeholder');
}
    else
    {
        alert("Please enter valid email");
    }
});