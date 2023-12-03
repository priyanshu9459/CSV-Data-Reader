var input = document.getElementById("inputtext"),
    output = document.getElementById("outputtext");
  rows = document.getElementById("rowss");
 function split(){
         
   
 var lines = input.value.split(/\r?\n/)
       .reverse()
        output.value = lines.join('\n');
         
        }
function splitlikealpha(){
         
   
 var lines = input.value.split(/\r?\n/)
       .sort()
        output.value = lines.join('\n');
         
        }
function removeduplicatelines()
{
    var l = input.value.split(/\r?\n/);
   
   var uniqueLines = Array.from(new Set(l));
    output.value = uniqueLines.join("\n")

}
function csvdataread() {
   
 
const parseResult = Papa.parse(input.value, { header: true });

console.log(parseResult);
const c = [];

for (let row of parseResult.data) {
    c.push(row[rows.value]);
}

   
    output.value = c.join("\n");
}
