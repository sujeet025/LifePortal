function changeContent()
        {
            var theDiv=document.getElementById("content");

            theDiv.innerHTML="<p>Look Conetnt got changed !!!!</p>";
        }
        function showAnswer(num)
        {
          var shAnswer=true;
         // var totalFaq=1;
            if(isShwoing(document.getElementById("answer"+num)))
            {
              shAnswer=false;
            }
            for(var i=1;i<=totalFaq;i++)
            {
                 //console.log(document.getElementById("answer"+i));
                  hide(document.getElementById("answer"+i));
                  if(document.getElementById("question"+i))
                  {
                    //document.getElementById("question"+i).setAttribute('area-expanded','false')
                  }
            }
            console.log(totalFaq);
           if(shAnswer)
           {
               console.log(show(document.getElementById("answer"+num)));
               //show(document.getElementById("answer"+num));
               //document.getElementById("question"+ num).setAttribute('area-expanded', 'true');
               
           }
           console.log(document.getElementById("question"+ num).getAttribute('area-expanded'));
        }
        function show(element)
        {
          if(! element) {return false;}
          if(isHidden(element))
          {
            return (element.className=element.className.
            slice(0,element.className.indexOf("hidden")) 
            + element.className.
            slice(element.className.indexOf("hidden")+6));
          }
          return false;
        }

        function isShwoing(element)
        {
            return (!isHidden(element));
            
        }

        function isHidden(element)
        {
            return (element.className.indexOf("hidden") !=-1);
        }

        function hide(element)
        {
            if(! element) {return false;}
            if(isShwoing(element))
            {
                if(element.className=="") {return (element.className="hidden"); }
                else { return (element.className=element.className + " hidden");}
            }
            return false;
        }