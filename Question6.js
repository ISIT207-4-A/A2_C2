let memorizingMap = new Map();
memorizingMap['input1']  = 'returnedval1';
memorizingMap['input2'] = 'returnedval2';
const computeExpensiveResult = (parm)=>{
	if(memorizingMap[parm]){
	console.log("Fetching from cache")
		return memorizingMap[parm]
	}else{
    let result = 'returndval3'
		console.log("Loading...")
		memorizingMap[parm] = result;
		return result;
	}
}
console.log(computeExpensiveResult('inp2'))
console.log('It has been memorizing in memory')
console.log(computeExpensiveResult('inp2'))