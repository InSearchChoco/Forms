<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<section class="container">
    <pre id="usercard">
      <?php 
      echo "Hello";
        if(isset($_POST)){
          print_r($_POST);
        }else{
          print_r($_GET);
        }
      ?>
    </pre>
  </section>
</body>
</html>