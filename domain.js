var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];


 let htmlContent = '';

for(var i=0;i<pronoun.length;i++){
    
    for(var j=0;j<adj.length;j++){
        
        for(var k=0;k<noun.length;k++){
            htmlContent = htmlContent + "<p>" +(pronoun[i]+adj[j]+noun[k]) + ".com</p>";
        }
    }
}
console.log(htmlContent);
document.getElementById("domains").innerHTML=htmlContent;
