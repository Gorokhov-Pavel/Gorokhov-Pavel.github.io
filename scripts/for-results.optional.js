
var k = 1; // team-1
var resultsTable = document.querySelector("#team-" + k);
while (resultsTable !== null) {
    var sum1 = 0;
    for (var i = 1; i <= 5; i++) {
	for (var j = 1; j <= 5; j++) {
	    var coordX = j;
	    var coordY = i;
	    var resultsCell = document.querySelector("#team-"+k + " #cell"+coordY+"-"+coordX);
	    sum1 += Number(resultsCell.innerText);
	}
    }
    var firstSumResultsTable = document.querySelector("#team-" + k + " .sum span:first-child");
    firstSumResultsTable.innerText = sum1;

    var sum2 = 0;
    for (var i = 1; i <= 5; i++) {
	var coordX = 6;
	var coordY = i;
	var resultsCell = document.querySelector("#team-"+k + " #cell"+coordY+"-"+coordX);
	sum2 += Number(resultsCell.innerText);
    }
    var secondSumResultsTable = document.querySelector("#team-" + k + " .sum span:first-child + span");
    secondSumResultsTable.innerText = sum2;

    var sum3 = 0;
    for (var j = 1; j <= 5; j++) {
	var coordX = j;
	var coordY = 6;
	var resultsCell = document.querySelector("#team-"+k + " #cell"+coordY+"-"+coordX);
	sum3 += Number(resultsCell.innerText);
    }
    var thirdSumResultsTable = document.querySelector("#team-" + k + " .sum span:first-child + span + span");
    thirdSumResultsTable.innerText = sum3;

    var sum = Number(firstSumResultsTable.innerText) + Number(secondSumResultsTable.innerText) + Number(thirdSumResultsTable.innerText);
    var shtraf = document.querySelector("#team-" + k + " .sum span:first-child + span + span + span");
    var sumResultsTable = document.querySelector("#team-" + k + " .sum span:first-child + span + span + span + span");
    sum -= Number(shtraf.innerText);
    sumResultsTable.innerText = sum; 
    
    k += 1;
    resultsTable = document.querySelector("#team-" + k);
}

var teamsres = [];
for (var p = 1; p < k; p++) {
    teamsres[p] = document.querySelector("#team-" + p + " .sum span:first-child + span + span + span + span").innerText;
}
var n = k;
var arr = [];
for (var p = 1; p < k; p++) {
    for (var r = 1; r < k; r++) {
	if (Number(teamsres[p]) >= Number(teamsres[r])) {
	    n -= 1;
	}
    }
    while (arr[n] !== undefined) {
	n += 1;
    }
    arr[n] = p;
    n = k;
}
var tr = [];
for (var p = 1; p < k; p++) {
    tr[p] = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = p;
    var td2 = document.createElement("td");
    var mya = document.createElement("a");
    //console.log(arr[p]);
    mya.setAttribute("href", "#team-" + arr[p]);
    mya.innerText = document.querySelector("#team-" + arr[p] + " .name").innerText;
    td2.appendChild(mya);
    var td3 = document.createElement("td");
    td3.innerText = teamsres[arr[p]];
    tr[p].appendChild(td1);
    tr[p].appendChild(td2);
    tr[p].appendChild(td3);
    document.querySelector("#all-results table").appendChild(tr[p]);
}
