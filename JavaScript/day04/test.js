for(var flag = 100; flag <= 1000; flag++)
        {
            var sum = 0;
            var i = flag;
            while(i > 0)
            {
                var index = i % 10;
                sum = sum + Math.pow(index,3) ;
                i = parseInt(i / 10);
            }

            if(sum == flag)
            {
                // document.write(flag + "为水仙花数" + "<br  />");
                console.log(flag + "为水仙花数" + "<br  />");
            }
        }