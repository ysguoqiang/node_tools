
var tools = {}

tools.ipToInt = function(IP){
    var xH = "",result = REG.exec(IP);
    if(!result) return -1;
    return (parseInt(result[1]) << 24 
        | parseInt(result[2]) << 16
        | parseInt(result[3]) << 8
        | parseInt(result[4]))>>>0;
};

tools.intToIp = function(INT){
    if(INT < 0 || INT > 0xFFFFFFFF){
        throw ("The number is not normal!");
    }
    return (INT>>>24) + "." + (INT>>16 & 0xFF) + "." + (INT>>8 & 0xFF) + "." + (INT & 0xFF);
}


module.exports = tools