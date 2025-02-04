<?php
require_once "Drink.php";

class Juice extends Drink{
    public function __construct($bottleType){
        parent::__construct($bottleType);
    }
    public function printCost(): string {
        return "Juice cost is: " . $this->getCost();
    }
}