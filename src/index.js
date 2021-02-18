module.exports = function reverse (n) {
    n=Math.abs(n);
	n = String(n).split('').reverse();
	console.log(n);
	return n[0]== 0 ? n.splice(1,n.length).join('') : n.join('');  
    
}
