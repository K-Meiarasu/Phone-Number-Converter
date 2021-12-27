import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(number:number,code:number){
    var result=""
    var ccode=code.toString()
    var phone=number.toString()
    if(code==7){
      var num1="", num2=""
      if(phone.length!=9){
        result="Invalid number"
        return [result]
      }
      num1=phone.substring(0,3)
      num2=phone.substring(3,9)
      result="+"
      result=result.concat(ccode)
      result=result.concat(num1)
      result+=" "
      result=result.concat(num2)
    }
    else if(code==27){
      var num1="", num2="", num3=""
      if(phone.length!=9){
        result="Invalid number"
        return [result]
      }
      num1=phone.substring(0,3)
      num2=phone.substring(3,7)
      num3=phone.substring(7,9)
      result="+"
      result=result.concat(ccode)
      result+=" "
      result=result.concat(num1)
      result+=" "
      result=result.concat(num2)
      result+=" "
      result=result.concat(num3)
    }
    else if(code==32){
      var num1="", num2="", num3="", num4=""
      if(phone.length!=8){
        result="Invalid number"
        return [result]
      }
      num1=phone.substring(0,2)
      num2=phone.substring(2,4)
      num3=phone.substring(4,6)
      num4=phone.substring(6,8)
      result="+"
      result=result.concat(ccode)
      result+=" "
      result=result.concat(num1)
      result+=" "
      result=result.concat(num2)
      result+=" "
      result=result.concat(num3)
      result+=" "
      result=result.concat(num4)
    }
    else if(code==54){
      var num1="", num2=""
      if(phone.length!=8){
        result="Invalid number"
        return [result]
      }
      num1=phone.substring(0,4)
      num2=phone.substring(4,8)
      result="+"
      result=result.concat(ccode)
      result+=" "
      result=result.concat(num1)
      result+=" "
      result=result.concat(num2)
    }
    else if(code==65){
      var num1="", num2=""
      if(phone.length!=8){
        result="Invalid number"
        return [result]
      }
      num1=phone.substring(0,4)
      num2=phone.substring(4,8)
      result="+"
      result=result.concat(ccode)
      result+=" "
      result=result.concat(num1)
      result+=" "
      result=result.concat(num2)
    }
    else if(code==91){
      var num1="", num2=""
      if(phone.length!=10){
        result="Invalid number"
        return [result]
      }
      num1=phone.substring(0,5)
      num2=phone.substring(5,10)
      result="+"
      result=result.concat(ccode)
      result+=" "
      result=result.concat(num1)
      result+=" "
      result=result.concat(num2)
    }
    else if(code==351){
      var num1="", num2="", num3=""
      if(phone.length!=9){
        result="Invalid number"
        return [result]
      }
      num1=phone.substring(0,3)
      num2=phone.substring(3,6)
      num3=phone.substring(6,9)
      result="+"
      result=result.concat(ccode)
      result+=" "
      result=result.concat(num1)
      result+=" "
      result=result.concat(num2)
      result+=" "
      result=result.concat(num3)
    }
    else{
        result="Code not found. Click 'info' for details."
    }
    return [result]
  }
}
