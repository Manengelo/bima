<?php 
  class Ward {
    // DB stuff
    private $conn;
    private $table = 'ward';

    // Post Properties
    public $wardID;
    public $districtID;
    public $district;
    public $region;
    public $ward;  

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get Posts
    public function read() {
      // Create query
      
      $query =' SELECT ward.ward,district.district,region.region  FROM ward JOIN district ON ward.districtID=district.districtsID
                               JOIN region ON district.regionID=region.regionID 
                                ';
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }
}

  //  SELECT ward.ward,district.district,region.region  FROM ward JOIN district ON ward.districtID=district.districtsID
//JOIN region ON district.regionID=region.regionID