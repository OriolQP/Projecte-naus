<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>admin</title>
    <style>

      *{
        margin:0;
        padding:0;
      }
      body{
        background: #f5f5dc;
      }
      #login{
        display: flex;
        position: absolute;
        width: 400px;
        height: 400px;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        background-color: white;
        border-radius: 30px;
        align-items: center;
        justify-content: center;
      }

    </style>
  </head>
  <body>
    <?php
    include("Config.php");
      if(isset($_POST['Username'])){
        $uname=$_POST['Username'];
        $password=$_POST['Password'];

        $sql="select * from server where Username='".$uname."'AND Password='".$password."'limit 1";

        $result=$conn->query($sql);
        if($result && $result -> num_rows > 0){
          header("location:Joc");
        }
        else{
          echo "Error. try again. Verify that you have enter the right username and password";
          exit();
        }
      }
    ?>
    <div id="login">
      <form method="POST" action="#" >
        <label>Nom d'usuari</label>
        <input type="text" name="Username" placeholder="Usuari"/>
        <br/>
        <label>Contrasenya</label>
        <input type="password"name="Password" placeholder="Contrasenya"/>
        <br/>
        <input type="submit" value="Entra"/>
      </form>
    </div>
  </body>
</html>
