<?php
class House{
 
    // database connection and table name
    private $conn;
    private $table_name = "house";
 
    // object properties
    public $houseid;
    public $price;
    public $room;
    public $bathroom;
    public $Description;
    public $ward;
    public $region;
    public $district;
    public $firstname;
    public $phone;

 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }


// read houses with pagination
public function readhouse($from_record_num, $records_per_page){
 
    // select query
    $query = "SELECT
    houseid,
    housedetails.period,
    housedetails.description,
    housedetails.price,
    housedetails.room,
    housedetails.bathroom,
    housedetails.compound,
    housedetails.parking,
    housedetails.gatefence,
    housedetails.kitchen,
    housedetails.rating,
    housedetails.water,
    housedetails.electricity,
    housedetails.furnished,
    ward.ward,
    district.district,
    region.region,
    contact.firstname,
    contact.lastname,
    contact.phone,
    imagehouse.imagehouse1,
    imagehouse.imagehouse2,
    imagehouse.imagehouse3,
    imagehouse.imagehouse4,
    imagehouse.imagehouse5,
    pathhouse.pathhouse
FROM
    `house`

 JOIN housedetails ON housedetails.housedetailid = house.housedetailid
JOIN contact ON house.contactid = contact.contactid
JOIN pathhouse ON pathhouse.pathhouseid = house.pathhouseid
JOIN imagehouse ON house.imagehouseid = imagehouse.imagehouseid 
JOIN ward ON house.wardid = ward.wardid
JOIN district ON ward.districtid = district.districtid
JOIN region ON district.regionid = region.regionid
            LIMIT ?, ?";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind variable values
    $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
    $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);
 
    // execute query
    $stmt->execute();
 
    // return values from database
    return $stmt;
}

// used for paging houses
public function count(){
    $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";
 
    $stmt = $this->conn->prepare( $query );
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    return $row['total_rows'];
}

}


