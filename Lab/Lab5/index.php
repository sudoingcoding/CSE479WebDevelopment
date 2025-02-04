<?php
require_once 'Customer.php';


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Orders</title>
</head>
<body>
    <h1>Welcome to Our Restaurant</h1>
    <?php
    $customer = new Customer();

    $customer->orderVegBurger("Cheese");
    $customer->orderNonVegBurger("Chicken");
    $customer->orderJuice("1L");
    $customer->orderSoftDrink("500ML");
    
    $customer->displayOrders();
    
    $customer->calculateTotal();
    ?>
</body>
</html>
