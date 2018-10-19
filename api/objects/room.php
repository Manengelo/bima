<?php
class Room{
 
    // database connection and table name
    private $conn;
    private $table_name = "room";
 
    // object properties
    public $roomid;
    public $price;
    public $desdo;
    public $ward;
    public $region;
    public $district;
    public $firstname;
    public $phone;

 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }


// read products with pagination
public function readroom($from_record_num, $records_per_page){
 
    // select query
    $query = "SELECT
        roomid,
    roomdetails.pepo,
    roomdetails.desdo,
    roomdetails.price,
    roomdetails.roomsize,
    roomdetails.selfcontain,
    roomdetails.parking,
    roomdetails.gatefence,
    roomdetails.kitchen,
    roomdetails.rating,
    roomdetails.water,
    roomdetails.electricity,
    roomdetails.furnished,
    ward.ward,
    district.district,
    region.region,
    contact.firstname,
    contact.lastname,
    contact.phone,
    imageroom.imageroom1,
    imageroom.imageroom2,
    imageroom.imageroom3,
    imageroom.imageroom4,
    imageroom.imageroom5,
    pathroom.pathroom
FROM
    `room`

 JOIN roomdetails ON roomdetails.roomdetailid = room.roomdetailid
JOIN contact ON room.contactid = contact.contactid
JOIN pathroom ON pathroom.pathroomid = room.pathroomid
JOIN imageroom ON room.imageroomid = imageroom.imageroomid 
JOIN ward ON room.wardid = ward.wardid
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

// used for paging products
public function count(){
    $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";
 
    $stmt = $this->conn->prepare( $query );
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    return $row['total_rows'];
}

// search products
function search($keywords,$from_record_num, $records_per_page){
 
    // select all query
    $query = "SELECT
              roomid,
    pepo,
    desdo,
    price,
    roomsize,
    selfcontain,
    parking,
    gatefence,
    kitchen,
    rating,
    water,
    electricity,
    furnished,
    kata,
    maarufu,
    region,
FROM
    `room`
            WHERE
            region LIKE ? LIMIT ?, ?";



 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $keywords=htmlspecialchars(strip_tags($keywords));
    $keywords = "%{$keywords}%";
 
    // bind
    $stmt->bindParam(1, $keywords);
    //$stmt->bindParam(2, $keywords);
    //$stmt->bindParam(3, $keywords);
    $stmt->bindParam(2, $from_record_num, PDO::PARAM_INT);
    $stmt->bindParam(3, $records_per_page, PDO::PARAM_INT);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
// create product
function create(){
 
    // query to insert record
    $query = "INSERT INTO
            `room`
            SET
    roomid=:roomid,
    pepo=:pepo,
    desdo=:desdo,
    price=:price,
    roomsize=:roomsize,
    selfcontain=:selfcontain,
    parking=:parking,
    gatefence=:gatefence,
    kitchen=:kitchen,
    rating=:rating,
    water=:water,
    electricity=:electricity,
    furnished=:furnished,
    kata=:kata,
    maarufu=:maarufu,
    region=:region";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->roomid=htmlspecialchars(strip_tags($this->roomid));
    $this->pepo=htmlspecialchars(strip_tags($this->pepo));
    $this->desdo=htmlspecialchars(strip_tags($this->desdo));
    $this->price=htmlspecialchars(strip_tags($this->price));
    $this->roomsize=htmlspecialchars(strip_tags($this->roomsize));
    $this->selfcontain=htmlspecialchars(strip_tags($this->selfcontain));
    $this->parking=htmlspecialchars(strip_tags($this->parking));
    $this->gatefence=htmlspecialchars(strip_tags($this->gatefence));
    $this->kitchen=htmlspecialchars(strip_tags($this->kitchen));
    $this->rating=htmlspecialchars(strip_tags($this->rating));
    $this->water=htmlspecialchars(strip_tags($this->water));
    $this->electricity=htmlspecialchars(strip_tags($this->electricity));
    $this->furnished=htmlspecialchars(strip_tags($this->furnished));
    $this->kata=htmlspecialchars(strip_tags($this->kata));
    $this->maarufu=htmlspecialchars(strip_tags($this->maarufu));
    $this->region=htmlspecialchars(strip_tags($this->region));


    // bind values
    $stmt->bindParam(":roomid", $this->roomid);
    $stmt->bindParam(":pepo", $this->pepo);
    $stmt->bindParam(":desdo", $this->desdo);
    $stmt->bindParam(":price", $this->price);
    $stmt->bindParam(":roomsize", $this->roomsize);
    $stmt->bindParam(":selfcontain", $this->selfcontain);
    $stmt->bindParam(":parking", $this->parking);
    $stmt->bindParam(":gatefence", $this->gatefence);
    $stmt->bindParam(":kitchen", $this->kitchen);
    $stmt->bindParam(":rating", $this->rating);
    $stmt->bindParam(":water", $this->water);
    $stmt->bindParam(":electricity", $this->electricity);
    $stmt->bindParam(":furnished", $this->furnished);
    $stmt->bindParam(":kata", $this->kata);
    $stmt->bindParam(":maarufu", $this->maarufu);
    $stmt->bindParam(":region", $this->region);
   
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}

}


