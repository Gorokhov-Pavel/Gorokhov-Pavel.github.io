//console.log("hwww");
let numberOfTeams;
const teamNumber = document.querySelector("h1").getAttribute("id");
iframe.onload = function () {
    
    let k = 1; // team-1
    let tempResultsTable = iframe.contentDocument.querySelector("#team-" + k);
    while (tempResultsTable !== null) {
	k += 1;
	tempResultsTable = iframe.contentDocument.querySelector("#team-" + k);
    }
    numberOfTeams = k - 1;
    
    for (let i = 1; i <= 5; i++) {
	for (let j = 1; j <= 5; j++) {
	    const coordX = j;
	    const coordY = i;
	    //console.log("hw2");
	    //console.log(iframe.contentDocument.getElementById("cell"+coordY+"-"+coordX).innerText);
	    const resultsCell = iframe.contentDocument.querySelector("#"+teamNumber+" #cell"+coordY+"-"+coordX);
	    const teamOutputCell = document.querySelector("#output-table #cell"+coordY+"-"+coordX);
	    //console.log(teamOutputCell);
	    const teamInputCell = document.querySelector("#input-table #cell"+coordY+"-"+coordX);
	    
	    const resultsCellClass = resultsCell.getAttribute("class");
	    teamOutputCell.setAttribute("class", resultsCellClass);
	    //console.log(resultsCell);
	    //console.log(resultsCell.getAttribute("class"));
	    teamInputCell.setAttribute("class", resultsCellClass);
	    
	    if (resultsCellClass == "first-try") {
		teamOutputCell.innerText = "Можно получить " + (coordX*10) + " баллов";
		//console.log(teamInputCell.innerHTML);
		teamInputCell.innerHTML = `<form>
		Первая 
    		<br>
		попытка
		<br>
		<input type="text" name="lengthNum" size="3">
		<br>
		<button type="submit">
		  Отправить
		</button>
	      </form>`
	    }
	    if (resultsCellClass == "second-try") {
		teamOutputCell.innerText = "Можно получить " + (coordX*5) + " баллов";
		teamInputCell.innerHTML = `<form>
		Вторая 
    		<br>
		попытка
		<br>
		<input type="text" name="lengthNum" size="3">
		<br>
		<button type="submit">
		  Отправить
		</button>
	      </form>`
	    }
	    if (resultsCellClass == "right-from-first-try") {
		teamOutputCell.innerHTML = resultsCell.innerHTML;
		teamInputCell.innerHTML = "Задача <br>решена <br>с первой <br>попытки!"
	    }
	    if (resultsCellClass == "right-from-second-try") {
		teamOutputCell.innerHTML = resultsCell.innerHTML;
		teamInputCell.innerHTML = "Задача <br>решена <br>со второй <br>попытки!"
	    }
	    if (resultsCellClass == "fail") {
		teamOutputCell.innerHTML = resultsCell.innerHTML;
		teamInputCell.innerHTML = "Попыток <br>нет, <br>задача <br>не решена"
	    }
	}
    }
    for (let i = 1; i <= 5; i++) {
	const coordX = 6;
	const coordY = i;
	const resultsCell = iframe.contentDocument.querySelector("#"+teamNumber+" #cell"+coordY+"-"+coordX);
	const teamOutputCell = document.querySelector("#output-table #cell"+coordY+"-"+coordX);

	const resultsCellClass = resultsCell.getAttribute("class");
	teamOutputCell.setAttribute("class", resultsCellClass);

	if (resultsCellClass == "bonus-can") {
	    let sum = 0;
	    for (let j = 1; j <= 5; j++) {
		const tempTeamOutputCell = document.querySelector("#output-table #cell"+coordY+"-"+j);
		const tempTeamOutputCellClass = tempTeamOutputCell.getAttribute("class");
		const symbols = tempTeamOutputCell.innerText;
		if (tempTeamOutputCellClass == "first-try") {
		    sum += Number(symbols[15])*10 + Number(symbols[16]); //Можно получить 50 баллов 
		} else if (tempTeamOutputCellClass == "second-try") {
		    if (symbols[16] !== " ") { //Можно получить 5_баллов 
			sum += Number(symbols[15])*10 + Number(symbols[16]);
		    } else {
			sum += Number(symbols[15]);
			//console.log(symbols[15]);
		    }
		} else {
		    if (symbols[1] !== undefined) { //5_ может null?
			sum += Number(symbols[0])*10 + Number(symbols[1]);
			//console.log(symbols[1]);
		    } else {
			sum += Number(symbols[0]);
			//console.log(symbols[0]);
		    }
		}
		//console.log(symbols[16]);
	    }
	    let flag = 0;
	    let k = 1; // team-1
	    let tempResultsTable = iframe.contentDocument.querySelector("#team-" + k);
	    while ((flag == 0) && (tempResultsTable !== null)) {
		const tempResultsCell = iframe.contentDocument.querySelector("#team-"+k + " #cell"+coordY+"-"+coordX);
		if (tempResultsCell.getAttribute("class") == "bonus-have") {
		    flag = 1;
		}
		k += 1;
		tempResultsTable = iframe.contentDocument.querySelector("#team-" + k);
	    }
	    if (flag == 0) {
		teamOutputCell.innerText = "Можно получить бонус " + sum + " баллов";
	    } else {
		teamOutputCell.innerText = "Можно получить бонус " + (sum/2) + " баллов";
	    }
	}
	if (resultsCellClass == "bonus-have") {
	    teamOutputCell.innerHTML = resultsCell.innerHTML;
	}
	if (resultsCellClass == "bonus-fail") {
	    teamOutputCell.innerHTML = resultsCell.innerHTML;
	}
    }
    for (let j = 1; j <= 5; j++) {
	const coordX = j;
	const coordY = 6;
	const resultsCell = iframe.contentDocument.querySelector("#"+teamNumber+" #cell"+coordY+"-"+coordX);
	const teamOutputCell = document.querySelector("#output-table #cell"+coordY+"-"+coordX);

	const resultsCellClass = resultsCell.getAttribute("class");
	teamOutputCell.setAttribute("class", resultsCellClass);

	if (resultsCellClass == "bonus-can") {
	    let sum = 0;
	    for (let i = 1; i <= 5; i++) {
		const tempTeamOutputCell = document.querySelector("#output-table #cell"+i+"-"+coordX);
		const tempTeamOutputCellClass = tempTeamOutputCell.getAttribute("class");
		const symbols = tempTeamOutputCell.innerText;
		if (tempTeamOutputCellClass == "first-try") {
		    sum += Number(symbols[15])*10 + Number(symbols[16]); //Можно получить 50 баллов 
		} else if (tempTeamOutputCellClass == "second-try") {
		    if (symbols[16] !== " ") { //Можно получить 5_баллов 
			sum += Number(symbols[15])*10 + Number(symbols[16]);
		    } else {
			sum += Number(symbols[15]);
			//console.log(symbols[15]);
		    }
		} else {
		    if (symbols[1] !== undefined) { //5_ может null?
			sum += Number(symbols[0])*10 + Number(symbols[1]);
			//console.log(symbols[1]);
		    } else {
			sum += Number(symbols[0]);
			//console.log(symbols[0]);
		    }
		}
		//console.log(symbols[16]);
	    }
	    let flag = 0;
	    let k = 1; // team-1
	    let tempResultsTable = iframe.contentDocument.querySelector("#team-" + k);
	    while ((flag == 0) && (tempResultsTable !== null)) {
		const tempResultsCell = iframe.contentDocument.querySelector("#team-"+k + " #cell"+coordY+"-"+coordX);
		if (tempResultsCell.getAttribute("class") == "bonus-have") {
		    flag = 1;
		}
		k += 1;
		tempResultsTable = iframe.contentDocument.querySelector("#team-" + k);
	    }
	    if (flag == 0) {
		teamOutputCell.innerText = "Можно получить бонус " + sum + " баллов";
	    } else {
		teamOutputCell.innerText = "Можно получить бонус " + (sum/2) + " баллов";
	    }
	}
	if (resultsCellClass == "bonus-have") {
	    teamOutputCell.innerHTML = resultsCell.innerHTML;
	}
	if (resultsCellClass == "bonus-fail") {
	    teamOutputCell.innerHTML = resultsCell.innerHTML;
	}
    }

    for (let i = 1; i <= 5; i++) {
	const coordX = 0;
	const coordY = i;
	const resultsCell = iframe.contentDocument.querySelector("#team-1 #cell"+coordY+"-"+coordX);
	const teamOutputCell = document.querySelector("#output-table #cell"+coordY+"-"+coordX);
	const teamInputCell = document.querySelector("#input-table #cell"+coordY+"-"+coordX);

	teamOutputCell.innerText = resultsCell.innerText;
	teamInputCell.innerText = resultsCell.innerText;
    }

    const firstSumTeam = document.querySelector(".sum span:first-child");
    const firstSumResultsTable = iframe.contentDocument.querySelector("#" + teamNumber + " .sum span:first-child");
    firstSumTeam.innerText = firstSumResultsTable.innerText;

    const secondSumTeam = document.querySelector(".sum span:first-child + span");
    const secondSumResultsTable = iframe.contentDocument.querySelector("#" + teamNumber + " .sum span:first-child + span");
    secondSumTeam.innerText = secondSumResultsTable.innerText;

    const thirdSumTeam = document.querySelector(".sum span:first-child + span + span");
    const thirdSumResultsTable = iframe.contentDocument.querySelector("#" + teamNumber + " .sum span:first-child + span + span");
    thirdSumTeam.innerText = thirdSumResultsTable.innerText;

    const shtrafSumTeam = document.querySelector(".sum span:first-child + span + span + span");
    const shtrafSumResultsTable = iframe.contentDocument.querySelector("#" + teamNumber + " .sum span:first-child + span + span + span");
    shtrafSumTeam.innerText = shtrafSumResultsTable.innerText;

    const sumTeam = document.querySelector(".sum span:first-child + span + span + span + span");
    const sumResultsTable = iframe.contentDocument.querySelector("#" + teamNumber + " .sum span:first-child + span + span + span + span");
    sumTeam.innerText = sumResultsTable.innerText;
};

document.querySelector(".sum span:first-child").onmouseenter = function() {
    const onsum = document.querySelector("#on-sum-1");
    onsum.style.visibility = "visible";
    onsum.style.position = "fixed";
    const coords = this.getBoundingClientRect();
    onsum.style.left = coords.left - 25 + "px";
    onsum.style.top = coords.top - 100 + "px";

    let mystr = "";
    for (let i = 1; i <= 5; i++) {
	for (let j = 1; j <= 5; j++) {
	    if (j !== 1) {
		mystr += " + span";
	    }
	    const firstCellResultsTable = iframe.contentDocument.querySelector("#" + teamNumber + " #cell" + i + "-" + j);
	    const firstCell = document.querySelector("#on-sum-1 span:first-child" + mystr);
	    firstCell.innerText = firstCellResultsTable.innerText;
	}
	//console.log(mystr);
	mystr += " + br + span";
    }
};
document.querySelector(".sum span:first-child").onmouseleave = function() {
    const onsum = document.querySelector("#on-sum-1");
    onsum.style.visibility = "hidden";
};

document.querySelector(".sum span:first-child + span").onmouseenter = function() {
    const onsum = document.querySelector("#on-sum-2");
    onsum.style.visibility = "visible";
    onsum.style.position = "fixed";
    const coords = this.getBoundingClientRect();
    onsum.style.left = coords.left + 5 + "px";
    onsum.style.top = coords.top - 100 + "px";

    let mystr = "";
    for (let i = 1; i <= 5; i++) {
	const firstCellResultsTable = iframe.contentDocument.querySelector("#" + teamNumber + " #cell" + i + "-6");
	const firstCell = document.querySelector("#on-sum-2 span:first-child" + mystr);
	firstCell.innerText = firstCellResultsTable.innerText;
	//console.log(mystr);
	mystr += " + br + span";
    }
};
document.querySelector(".sum span:first-child + span").onmouseleave = function() {
    const onsum = document.querySelector("#on-sum-2");
    onsum.style.visibility = "hidden";
};

document.querySelector(".sum span:first-child + span + span").onmouseenter = function() {
    const onsum = document.querySelector("#on-sum-3");
    onsum.style.visibility = "visible";
    onsum.style.position = "fixed";
    const coords = this.getBoundingClientRect();
    onsum.style.left = coords.left - 25 + "px";
    onsum.style.top = coords.top - 20 + "px";

    let mystr = "";
    for (let j = 1; j <= 5; j++) {
	const firstCellResultsTable = iframe.contentDocument.querySelector("#" + teamNumber + " #cell6-" + j);
	const firstCell = document.querySelector("#on-sum-3 span:first-child" + mystr);
	firstCell.innerText = firstCellResultsTable.innerText;
	//console.log(mystr);
	mystr += " + span";
    }
};
document.querySelector(".sum span:first-child + span + span").onmouseleave = function() {
    const onsum = document.querySelector("#on-sum-3");
    onsum.style.visibility = "hidden";
};

document.querySelector(".sum span:first-child + span + span + span").onmouseenter = function() {
    const onsum = document.querySelector("#on-shtraf");
    onsum.style.visibility = "visible";
    onsum.style.position = "fixed";
    const coords = this.getBoundingClientRect();
    onsum.style.left = coords.left - 25 + "px";
    onsum.style.top = coords.top - 20 + "px";
    if (Number(this.innerText) === 0) {
	onsum.innerText = "Вы пока не оштрафованны";
    } else {
	onsum.innerText = "Вы были оштрафованны"; //причина?
    }
};
document.querySelector(".sum span:first-child + span + span + span").onmouseleave = function() {
    const onsum = document.querySelector("#on-shtraf");
    onsum.style.visibility = "hidden";
};

document.querySelector("#output-table #cell2-6").onmouseenter = function() {
    const underCell = document.querySelector("#under-cell2-6");
    underCell.style.visibility = "visible";
    underCell.style.position = "fixed";
    const coords = this.getBoundingClientRect();
    underCell.style.left = coords.left + 5 + "px";
    underCell.style.top = coords.top + 90 + "px";
    const myclass = this.getAttribute("class");
    if (myclass === "bonus-fail") {
	underCell.innerText = "Одна из задач провалена";
    } else if (myclass === "bonus-have") {
	underCell.innerText = "Вы заимели бонус";
    } else if (myclass === "bonus-can") {
	underCell.innerText = "Вы ещё можете получить бонус";
    }
};
document.querySelector("#output-table #cell2-6").onmouseleave = function() {
    const underCell = document.querySelector("#under-cell2-6");
    underCell.style.visibility = "hidden";
};


// function forUnderBonusCells (underCell, coords, myclass) {
//     underCell.style.visibility = "visible";
//     underCell.style.position = "fixed";
    
//     underCell.style.left = coords.left + 5 + "px";
//     underCell.style.top = coords.top + 90 + "px";

//     if (myclass === "bonus-fail") {
// 	underCell.innerText = "Одна из задач для бонуса провалена";
//     } else if (myclass === "bonus-have") {
// 	underCell.innerText = "Вы заимели бонус";
//     } else if (myclass === "bonus-can") {
// 	underCell.innerText = "Вы ещё можете получить бонус";
//     }
// }

// document.querySelector("#output-table #cell3-6").onmouseenter = function() {
//     const underCell = document.querySelector("#under-cell3-6");
//     const coords = this.getBoundingClientRect();
//     const myclass = this.getAttribute("class");
//     forUnderBonusCells(underCell, coords, myclass);
// };
// document.querySelector("#output-table #cell3-6").onmouseleave = function() {
//     const underCell = document.querySelector("#under-cell3-6");
//     underCell.style.visibility = "hidden";
// };

for (let i = 1; i <= 5; i++) {
    document.querySelector("#output-table #cell" + i + "-6").onmouseenter = function() {
	const underCell = document.querySelector("#under-cell" + i + "-6");
	//console.log(underCell);
	//console.log(i);
	const coords = this.getBoundingClientRect();
	const myclass = this.getAttribute("class");
	
	underCell.style.visibility = "visible";
	underCell.style.position = "fixed";
	
	underCell.style.left = coords.left + 5 + "px";
	underCell.style.top = coords.top + 90 + "px";

	if (myclass === "bonus-fail") {
	    underCell.innerText = "Одна из задач для бонуса провалена";
	} else if (myclass === "bonus-have") {
	    underCell.innerText = "Вы заимели бонус";
	} else if (myclass === "bonus-can") {
	    underCell.innerText = "Вы ещё можете получить бонус";
	    let found = false;
	    for (let k = 1; k <= numberOfTeams && found === false; k++) {
		const tempResultsCell = iframe.contentDocument.querySelector("#team-"+k + " #cell"+i+"-6");
		const classTempResultsCell = tempResultsCell.getAttribute("class");
		if (classTempResultsCell == "bonus-have") {
		    underCell.innerHTML += "<br/>";
		    underCell.innerText += "команда " + iframe.contentDocument.querySelector("#team-"+k+" .name").innerText + " уже получила бонус";
		    found = true;
		}
	    }
	    if (found === false) {
		underCell.innerHTML += "<br/>";
		underCell.innerText += "ближайшие к бонусу команды:"
		underCell.innerHTML += "<br/>";
		let myobj = {};
		let classobj = {};
		let names = [];
		for (let k = 1; k <= numberOfTeams && found === false; k++) {
		    const tempResultsCell = iframe.contentDocument.querySelector("#team-"+k + " #cell"+i+"-6");
		    const classTempResultsCell = tempResultsCell.getAttribute("class");
		    names[k] = iframe.contentDocument.querySelector("#team-"+k+" .name").innerText;
		    let myarr = [];
		    let myclasses = [];
		    for (let j = 1; j <= 5; j++) {
			myarr[j] = iframe.contentDocument.querySelector("#team-"+k + " #cell"+i+"-"+j).innerText;
			myclasses[j] = iframe.contentDocument.querySelector("#team-"+k + " #cell"+i+"-"+j).getAttribute("class");
		    }
		    myclasses[6] = classTempResultsCell;
		    //myobj[`${k}`] = myarr;
		    //classobj[`${k}`] = myclasses;
		    myobj[k] = myarr;
		    classobj[k] = myclasses;
		}
		let withMaxProblems = [];
		let maxProblems = 0;
		for (let k = 1; k <= numberOfTeams; k++) {
		    if (classobj[k][6] !== "bonus-fail") {
			let howMuchProblems = 0;
			for (let j = 1; j <= 5; j++) {
			    if (Number(myobj[k][j]) > 0) {
				howMuchProblems += 1;
			    }
			}
			if (howMuchProblems > maxProblems) {
			    maxProblems = howMuchProblems;
			    withMaxProblems = [];
			    withMaxProblems.push(k);
			} else if (howMuchProblems === maxProblems) {
			    withMaxProblems.push(k);
			}
		    }
		}
		const points = [undefined, 10, 20, 30, 40, 50];
		let minPoints = 100500; //заведомо больше всех.
		for (let m = 0; m < withMaxProblems.length; m++) {
		    let teamMaxPoints = 0;
		    for (let j = 1; j <= 5; j++) {
			if (Number(myobj[withMaxProblems[m]][j]) > 0) {
			    teamMaxPoints += points[j];
			}
		    }
		    if (teamMaxPoints < minPoints) {
			minPoints = teamMaxPoints;
		    }
		}
		let printingTeams = [];
		for (let k = 1; k <= numberOfTeams; k++) {
		    if (classobj[k][6] !== "bonus-fail") {
			let teamMaxPoints = 0;
			for (let j = 1; j <= 5; j++) {
			    if (Number(myobj[k][j]) > 0) {
				teamMaxPoints += points[j];
			    }
			}
			if (teamMaxPoints >= minPoints) {
			    printingTeams.push(k)
			}
		    }
		}
		for (let m2 = 0; m2 < printingTeams.length; m2++) {
		    underCell.innerText += names[printingTeams[m2]];
		    underCell.innerHTML += "<br/>";
		    underCell.innerText += myobj[printingTeams[m2]].join("+");
		    underCell.innerHTML += "<br/>";
		}
	    }
	}
    };
    document.querySelector("#output-table #cell"+i+"-6").onmouseleave = function() {
	const underCell = document.querySelector("#under-cell"+i+"-6");
	underCell.style.visibility = "hidden";
    };
}
for (let j = 1; j <= 5; j++) {
    document.querySelector("#output-table #cell6-" + j).onmouseenter = function() {
	const underCell = document.querySelector("#under-cell6-" + j);
	//console.log(underCell);
	//console.log(j);
	const coords = this.getBoundingClientRect();
	const myclass = this.getAttribute("class");

	underCell.style.visibility = "visible";
	underCell.style.position = "fixed";
	
	underCell.style.left = coords.left + 5 + "px";
	underCell.style.top = coords.top + 90 + "px";

	if (myclass === "bonus-fail") {
	    underCell.innerText = "Одна из задач для бонуса провалена";
	} else if (myclass === "bonus-have") {
	    underCell.innerText = "Вы заимели бонус";
	} else if (myclass === "bonus-can") {
	    underCell.innerText = "Вы ещё можете получить бонус";
	    let found = false;
	    for (let k = 1; k <= numberOfTeams && found === false; k++) {
		const tempResultsCell = iframe.contentDocument.querySelector("#team-"+k + " #cell6-"+j);
		const classTempResultsCell = tempResultsCell.getAttribute("class");
		if (classTempResultsCell == "bonus-have") {
		    underCell.innerHTML += "<br/>";
		    underCell.innerText += "команда " + iframe.contentDocument.querySelector("#team-"+k+" .name").innerText + " уже получила бонус";
		    found = true;
		}
	    }
	    if (found === false) {
		underCell.innerHTML += "<br/>";
		underCell.innerText += "ближайшие к бонусу команды:"
		underCell.innerHTML += "<br/>";
		let myobj = {};
		let classobj = {};
		let names = [];
		for (let k = 1; k <= numberOfTeams && found === false; k++) {
		    const tempResultsCell = iframe.contentDocument.querySelector("#team-"+k + " #cell6-"+j);
		    const classTempResultsCell = tempResultsCell.getAttribute("class");
		    names[k] = iframe.contentDocument.querySelector("#team-"+k+" .name").innerText;
		    let myarr = [];
		    let myclasses = [];
		    for (let i = 1; i <= 5; i++) {
			myarr[i] = iframe.contentDocument.querySelector("#team-"+k + " #cell"+i+"-"+j).innerText;
			myclasses[i] = iframe.contentDocument.querySelector("#team-"+k + " #cell"+i+"-"+j).getAttribute("class");
		    }
		    myclasses[6] = classTempResultsCell;
		    //myobj[`${k}`] = myarr;
		    //classobj[`${k}`] = myclasses;
		    myobj[k] = myarr;
		    classobj[k] = myclasses;
		}
		let withMaxProblems = [];
		let maxProblems = 0;
		for (let k = 1; k <= numberOfTeams; k++) {
		    if (classobj[k][6] !== "bonus-fail") {
			let howMuchProblems = 0;
			for (let i = 1; i <= 5; i++) {
			    if (Number(myobj[k][i]) > 0) {
				howMuchProblems += 1;
			    }
			}
			if (howMuchProblems > maxProblems) {
			    maxProblems = howMuchProblems;
			    withMaxProblems = [];
			    withMaxProblems.push(k);
			} else if (howMuchProblems === maxProblems) {
			    withMaxProblems.push(k);
			}
		    }
		}
		for (let m = 0; m < withMaxProblems.length; m++) {
		    underCell.innerText += names[withMaxProblems[m]];
		    underCell.innerHTML += "<br/>";
		    underCell.innerText += myobj[withMaxProblems[m]].join("+");
		    underCell.innerHTML += "<br/>";
		}
	    }
	}
    };
    document.querySelector("#output-table #cell6-"+j).onmouseleave = function() {
	const underCell = document.querySelector("#under-cell6-"+j);
	underCell.style.visibility = "hidden";
    };
}
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
	//const coordX = j;
	//const coordY = i;
	document.querySelector("#output-table #cell" + i + "-" + j).onmouseenter = function() {
	    const underCell = document.querySelector("#under-cell"+i+"-" + j);
	    //console.log(underCell);
	    const coords = this.getBoundingClientRect();
	    //const myclass = this.getAttribute("class");

	    underCell.style.visibility = "visible";
	    underCell.style.position = "fixed";
	    
	    underCell.style.left = coords.left + 5 + "px";
	    underCell.style.top = coords.top + 90 + "px";

	    let reshili = [];
	    let tryed = [];
	    let nottryed = [];
	    let failed = [];
	    for (let k = 1; k <= numberOfTeams; k++) {
		const tempResultsCell = iframe.contentDocument.querySelector("#team-"+k + " #cell"+i+"-"+j);
		const classTempResultsCell = tempResultsCell.getAttribute("class");
		if (classTempResultsCell == "fail") {
		    failed.push(iframe.contentDocument.querySelector("#team-"+k+" .name").innerText);
		} else if (classTempResultsCell == "first-try") {
		    nottryed.push(iframe.contentDocument.querySelector("#team-"+k+" .name").innerText);
		} else if (classTempResultsCell == "second-try") {
		    tryed.push(iframe.contentDocument.querySelector("#team-"+k+" .name").innerText);
		} else {
		    reshili.push(iframe.contentDocument.querySelector("#team-"+k+" .name").innerText);
		}
	    }
	    underCell.innerText = "решившие команды:";
	    underCell.innerHTML += "<br/>";
	    reshili.forEach((elem) => {
		underCell.innerText += elem;
		underCell.innerHTML += "<br/>";
	    })
	    underCell.innerText += "пытавшиеся сдать:";
	    underCell.innerHTML += "<br/>";
	    tryed.forEach((elem) => {
		underCell.innerText += elem;
		underCell.innerHTML += "<br/>";
	    })
	    underCell.innerText += "не решившие:";
	    underCell.innerHTML += "<br/>";
	    nottryed.forEach((elem) => {
		underCell.innerText += elem;
		underCell.innerHTML += "<br/>";
	    })
	    underCell.innerText += "провалившие эту задачу:";
	    underCell.innerHTML += "<br/>";
	    failed.forEach((elem) => {
		underCell.innerText += elem;
		underCell.innerHTML += "<br/>";
	    })
	};
	document.querySelector("#output-table #cell"+i+"-"+j).onmouseleave = function() {
	    const underCell = document.querySelector("#under-cell"+i+"-"+j);
	    underCell.style.visibility = "hidden";
	};
    }
}
