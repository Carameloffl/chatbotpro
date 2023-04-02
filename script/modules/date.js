const date=new Date();
var datt;
var timee;
function Day(){
	var day=date.getDay();
	switch(day){
		case 0:
		return "sunday"
		break;
		case 1:
		return "monday"
		break;
		case 2:
		return "tuesday"
		break;
		case 3:
		return "wednesday"
		break;
		case 4:
		return "thursday"
		break;
		case 5:
		return "friday"
		break;
		case 6:
		return "saturday"
		break;
		default:
		return "invalid"
	}
}
function Month(){
	var month=date.getMonth();
	switch(month){
		case 0:
		return "January"
		break;
		case 1:
		return "February"
		break;
		case 2:
		return "March"
		break;
		case 3:
		return "April"
		break;
		case 4:
		return "May"
		break;
		case 5:
		return "June"
		break;
		case 6:
		return "July"
		break;
		case 7:
		return "August"
		break;
		case 8:
		return "September"
		break;		
		case 9:
		return "October"
		break;
		case 10:
		return "November"
		break;
		case 11:
		return "December"
		break;
	}
}
function Dyear(){
	datt=date.getDate()+" "+ Month()+" "+date.getFullYear()+" "+Day()
}
function Time(){
	var Hours=date.getHours();
	if(Hours<12){
		var time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" "+"AM";
		timee=time;
	}
	else{
		switch(Hours){
			case 13:
			timee=1+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"
			break;
			case 14:
			timee=2+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"
			break;
			case 15:
			timee=3+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"
			break;
			case 16:
			timee=4+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"
			break;
			case 17:
			timee=5+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"
			break;
			case 18:
			timee=6+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"
			break;
			case 19:
			timee=7+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"
			break;
			case 20:
			timee=8+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"
			break;
			case 21:
			timee=9+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"
			break;
			case 22:
			timee=10+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"
			break;
			case 23:
			timee=11+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"
			break;
			default:
			timee=12+":"+date.getMinutes()+":"+date.getSeconds()+" "+"PM"

		}
	}
}
window.setInterval(()=>{
	Dyear();
	Time();
},1000);
export {datt,timee};