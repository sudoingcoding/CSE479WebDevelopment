<?php
include_once 'Meal.php';

class Drink extends Meal {
    public $BottleType;

    public function __construct($BottleType) {
        $this->BottleType = $BottleType;
    }

    public function getCost(): int {
        switch ($this->BottleType) {
            case "2L": return 130;
            case "1.5L": return 100;
            case "1L": return 70;
            case "500ML": return 50;
            case "250ML": return 30;
            default: return 0;
        }
    }

    public function printCost(): string {
        return "Cost is: " . $this->getCost();
    }

    public function printBottleType() {
        echo "Your bottle type is " . $this->BottleType . "<br>";
    }
}
?>
