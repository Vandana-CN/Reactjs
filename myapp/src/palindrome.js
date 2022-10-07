

const palindrome=(number)=>{
        let reverse=0;let temp=number;
        let remainder;
        while(number!=0){
          remainder=number%10;
          number=parseInt(number/10);
          reverse=reverse*10+remainder;
          
        }
        if(temp==reverse)
        return temp+" is a Palindrome";
        else
        return temp+" is not a Palindrome";
      }

  function Findpalindrome() {
    const number1=101;
    const number2=46789;
    return (
      <>
      <div className="App">
        
        <h2>{palindrome(number1)}</h2>
      <h2>{palindrome(number2)}</h2>
      </div></>
    );
  }
  
  export default Findpalindrome;

