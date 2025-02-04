<?php
include_once 'Meal.php';

class Burger extends Meal {
    public $filling;

    public function __construct($filling) {
        $this->filling = $filling;
    }

    public function getCost(): int {
        switch ($this->filling) {
            case "Cheese": return 50;
            case "Chicken": return 50;
            case "Bacon": return 100;
            default: return 0;
        }
    }

    public function printCost(): string {
        return "Cost is: " . $this->getCost();
    }

    public function printFilling() {
        echo "Your filling is " . $this->filling . "<br>";
    }
}