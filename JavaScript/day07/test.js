function fib(n){
        let i, temp0, temp1, temp2;        
        if(n<=1) 
        {
          return n; 
        }
       
        temp1 = 0;  
        temp2 = 1;  
        for(i = 2; i <= n; i++){  
            temp0 = temp1 + temp2;  
            temp2 = temp1;  
            temp1 = temp0;  
        }

        return temp0;  
};
console.log(fib(11));