/*TMODJS:{"version":1,"md5":"dacdf71d3244f75441f0872a022573cb"}*/
var template=require('./template');module.exports=template('demo3',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<ul> ';
$each($data,function(data,$index){
$out+=' <li id="';
$out+=$escape(data.id);
$out+='">';
$out+=$escape(data.title);
$out+='</li> ';
});
$out+=' </ul>';
return new String($out);
});