<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/core.php';
include_once '../shared/utilities.php';
include_once '../config/database.php';
include_once '../objects/house.php';
 
// utilities
$utilities = new Utilities();
 
// instantiate database and house object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$house = new House($db);
 
// query houses
$stmt = $house->readhouse($from_record_num, $records_per_page);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // houses array
    $houses_arr=array();
    $houses_arr["records"]=array();
    $houses_arr["paging"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
        $house_item=array(
            'houseid' =>$houseid,
            'description' =>$description,
            'period'=>$period,
            'price' =>$price,
            'room'=> $room,
            'bathroom'=> $bathroom,
            'gatefence'=>  (boolean)$gatefence,
            'furnished'=> (boolean) $furnished,
            'electricity'=> $electricity,
            'water'=> $water,
            'parking'=> $parking,
            'compound'=> $compound,
            'parking'=> $parking,
            'kitchen'=> (boolean) $kitchen,
            'rating'=> (integer)$rating,
           'ward'=> $ward,
           'region'=> $region,
           'district' => $district,
           'firstname'=>  $firstname,
           'lastname'=>  $lastname,
           'phone' => $phone,
           'imagehouse1' => $imagehouse1,
           'imagehouse2' => $imagehouse2,
           'imagehouse3' => $imagehouse3,
           'imagehouse4' => $imagehouse4,
           'imagehouse5' => $imagehouse5,
           'pathhouse'=>$pathhouse,
        );
 
        array_push($houses_arr["records"], $house_item);
    }
 
 
    // include paging
    $total_rows=$house->count();
    $page_url="{$home_url}house/read_house.php?";
    $paging=$utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $houses_arr["paging"]=$paging;
    
     echo json_encode($houses_arr);
}
 
else{
    echo json_encode(
        array("message" => "No houses found.")
    );
}
?>