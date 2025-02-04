<?php
require_once 'VegBurger.php';
require_once 'NonVegBurger.php';
require_once 'Juice.php';
require_once 'SoftDrink.php';

class Customer {
    private $orders = [];

    public function orderVegBurger($filling) {
        $vegBurger = new VegBurger($filling);
        $this->orders[] = $vegBurger;
        echo $vegBurger->printCost() . "<br>";
    }

    public function orderNonVegBurger($filling) {
        $nonVegBurger = new NonVegBurger($filling);
        $this->orders[] = $nonVegBurger;
        echo $nonVegBurger->printCost() . "<br>";
    }

    public function orderJuice($bottleType) {
        $juice = new Juice($bottleType);
        $this->orders[] = $juice;
        echo $juice->printBottleType() . "<br>";
        echo $juice->printCost() . "<br>";
    }

    public function orderSoftDrink($bottleType) {
        $softDrink = new SoftDrink($bottleType);
        $this->orders[] = $softDrink;
        echo $softDrink->printBottleType() . "<br>";
        echo $softDrink->printCost() . "<br>";
    }

    public function displayOrders() {
        echo "<h2>Your Orders:</h2>";
        if (empty($this->orders)) {
            echo "No items ordered yet!<br>";
            return;
        }

        foreach ($this->orders as $index => $order) {
            echo "Order #" . ($index + 1) . ":<br>";
            if ($order instanceof Burger) {
                $order->printFilling();
                echo "<br>";
            } elseif ($order instanceof Drink) {
                $order->printBottleType();
                echo "<br>";
            }
            echo "Cost: " . $order->getCost() . "<br><br>";
        }
    }

    public function calculateTotal() {
        $total = 0;
        foreach ($this->orders as $order) {
            $total += $order->getCost();
        }
        echo "Total Cost: " . $total . "<br>";
    }
}
?>
