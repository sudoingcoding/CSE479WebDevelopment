<?php
require_once 'Burger.php';

class VegBurger extends Burger{
    public function __construct($filling){
        parent::__construct($filling);
    }
    public function printCost(): string {
        return "VegBurger cost is: " . $this->getCost();
    }
}