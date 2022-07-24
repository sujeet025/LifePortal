<!DOCTYPE html>
<html lang="en">
  <link href="css/style.css" type="text/css" rel="stylesheet" media="all">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script lang="javascript" type="text/javascript" src="js/portal.js">       
    </script>
    <script lang="javascript" type="text/javascript">
      var totalFaq=2;      
      </script>
</head>
<body>
  <h1>Welcome to HTML</h1>
  <div id="content" >
    <p>Here is some HTML Content</p>
  </div>
  <div>
  <div id="d1">
    <p class="faqQuestion" id="question2"  onclick="showAnswer('2')" onkeypress="showAnswer('2')" role="button" tabindex="0" area-expanded="false" aria-controls="answer2">What is the bservice request?</p>
  </div>
  <div id="answer2" class="whiteBoxMiddle hidden">
    <p class="faqAnswer">Everything working fine</p>
  </div>
</div>
  <input type="button" value="Change Content" onclick="changeContent()" />
</body>
</html>