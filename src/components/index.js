//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

function updateStructure(rec1,rec2){

	let returnVal = {...rec1};
	let childrenObj = null;
	

	if(rec2.hasOwnProperty("top")){
		if(rec1.hasOwnProperty("top")){childrenObj.top = rec2.top - rec1.top}
		else{childrenObj.top = rec2.top}
	}
	if(rec2.hasOwnProperty("bottom")){
		if(rec1.hasOwnProperty("bottom")){childrenObj.bottom = rec2.bottom - rec1.bottom}
		else{childrenObj.bottom = rec2.bottom}
	}
	if(rec2.hasOwnProperty("left")){
		if(rec1.hasOwnProperty("left")){childrenObj.left = rec2.left - rec1.left}
		else{childrenObj.left = rec2.left}
	}
	if(rec2.hasOwnProperty("right")){
		if(rec1.hasOwnProperty("right")){childrenObj.right = rec2.right - rec1.right}
		else{childrenObj.right = rec2.right
	}
	
	childrenObj.height = rec2.height;
	childrenObj.width = rec2.width;
	childrenObj.position = "absolute";
	childrenObj.children = [];

	returnVal.children.push(childrenObj);

	return returnVal;
}

module.exports = updateStructure;
