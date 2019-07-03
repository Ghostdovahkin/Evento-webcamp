
<?php include_once 'includes/templates/header.php'; ?>
<section class="seccion contenedor">
    <h2>Resumen Registro</h2>
    <?php
              $resultado = (bool) $_GET['exito'];
              $paymentId= $_GET['paymentId'];
              $id_pago = $_GET (int) ['id_pago'];

          if($resultado == "true"){
              echo "el pago se realizo correctamente </br>";
              echo "el ID es {$paymentId}";
              require_once('includes/funciones/bd_conexion.php');
              $stmt = $conn->prepare("UPDATE registrados SET pagado = ? WHERE ID_registrado = ? " );
              $pagado = 1;
              $stmt->bind_param("ii", $pagado, $id_pago );
              $stmt->execute();
              $ID_registro = $stmt->insert_id;
              $stmt->close();
              $conn->close();
          }else {
              echo " el pago no se realizo";
          }
              ?>

<?php if(isset($_GET['exitoso'])):
        if($_GET['exitoso'] == "1"):
                echo" Registro Exitoso";
        endif;
    endif;?>
       

       
        
        
        

</section>
<?php include_once 'includes/templates/footer.php'; ?>
