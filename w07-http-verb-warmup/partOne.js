// 🐾🐾🐾 PART ONE 🐾🐾🐾

var parseRequest = function (inputString) {
  var inputArr = inputString.split('\n');
  var requestObj ={
    headers: {},
    verb: null,
    path: null,
    protocol: null,
  };
  var mainArr = [];
  inputArr.forEach((ele)=>{
    mainArr.push(ele.split(':'));
  });
  for (var i = 0; i < mainArr.length; i++) {
    if(mainArr[i][0].indexOf("GET") !== -1){
      var verbArr = mainArr[i][0].split(' ');
      requestObj.verb = verbArr[0];
      requestObj.path = verbArr[1];
      requestObj.protocol =verbArr[2];
    }else{
      var keys = mainArr[i][0];
      var value = mainArr[i][1];
      requestObj.headers[keys] = value;
    }
  }
  return requestObj;
};
 // END FUNCTION

module.exports = {
  parseRequest: parseRequest,
  attendance: "wordy wordy"
}
