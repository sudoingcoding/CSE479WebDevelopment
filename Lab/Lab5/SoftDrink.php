<?php
require_once "Drink.php";

class SoftDrink extends Drink{
    public function __construct($bottleType){
        parent::__construct($bottleType);
    }
    public function printCost(): string {
        return "SoftDrink cost is: " . $this->getCost();
    }
}