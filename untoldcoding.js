var i = 0;
var txt1 =
  "Hi Love.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When you came in my life < You changed my life.  <<                  As the days goes < you got closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting and priority for me...!                     << I love you is the most beautiful sentence. It begins with I, ends in you,and there's only love between us                  << You re the last person to whom I'm saying this                                  >I Love U <Chiku.....!                  <<<< Give me One chance to Prove my Love ...!   ";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
