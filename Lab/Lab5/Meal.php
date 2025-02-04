<?php

abstract class Meal {
    abstract public function getCost(): int;

    abstract public function printCost(): string;

    public function printMenu() {
        echo "Welcome to the Menu!<br>";
        echo "Drink Items:<br>";
        echo "- SoftDrink<br>";
        echo "- Juice<br>";
        echo "Burger Items:<br>";
        echo "- VegBurger<br>";
        echo "- NonVegBurger<br>";
    }
}
?>
