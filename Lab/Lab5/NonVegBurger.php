<?php
require_once 'Burger.php';

class NonVegBurger extends Burger{
    
    public function __construct($filling){
        parent::__construct($filling);
    }
    public function printCost(): string {
        return "NonVegBurger cost is: " . $this->getCost();
    }
}
?>