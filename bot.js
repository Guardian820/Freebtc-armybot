var test = 0.00000000, count = 0, stop = 0, stop1 = 0;
var myplay, myplay2;

function second () {count = count + 10;}

function action() {
	if (stop > 0) {clearInterval(myplay);}
  else {myplay = setInterval(play, 1000);}
}
function action1() {
	if (stop1 > 0) {clearInterval(myplay2);}
	else {myplay2 = setInterval(countdown, 1000);}
}

function play () {
	if (test >= "0.00000000") {
		console.log("continuando os testes");
	}
	else if (test == "-0.00000001") {
		console.log("parando os testes");
    stop = stop + 1; action(); second(); action1();
	}
}

function countdown() {
	count = count - 1; console.log(count);
  if (count == 0) {stop1 = stop1 + 1; action1(); startengine();}
}


function change() {test = "-0.00000001";}
function killJSexec() {
	change(); stop = stop + 1; stop1 = stop + 1;
  alert('you had killed the JVM process');
 }
function startengine() {
	test = test * 0.00000000; count = count * 0; stop = stop * 0; stop1 = stop * 0;
	action();
}
startengine();
