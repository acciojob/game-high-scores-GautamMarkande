// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");
const tbody = document.getElementById("tbody");

// Save score to Local Sto

localStorage.setItem('arr',JSON.stringify([]))
function saveScore() {
  // complete the code here
	const obj={
		Name:nameInput.value,
		Score:scoreInput.value
	}
	
	const arr = JSON.parse(localStorage.getItem('arr'))
	arr.push(obj)
	localStorage.setItem('arr',JSON.stringify(arr))
  showScores();
}

// Show scores in div
function showScores() {
  // complete the code
	const user = JSON.parse(localStorage.getItem('arr'))
	if(user.length>0){
		while (tbody.lastChild) {
        tbody.removeChild(tbody.lastChild);
    }
		user.map((data)=>{
		const tr = document.createElement('tr');
		const tdName = document.createElement('td');
		const tdSc = document.createElement('td');
		tdName.innerText = data.Name;
		tdSc.innerText = data.Score;
		tr.appendChild(tdName)
		tr.appendChild(tdSc)
		tbody.appendChild(tr);
	})
	}else{
		scores.innerText = "No Scores yes"
	}
	
	
}
