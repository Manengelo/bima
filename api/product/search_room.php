<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/core.php';
include_once '../shared/utilities.php';
include_once '../config/database.php';
include_once '../objects/room.php';
 
// instantiate database and room object
$database = new Database();
$db = $database->getConnection();

// utilities
$utilities = new Utilities();
 
// initialize object
$room = new Room($db);
 
// get keywords
$keywords=isset($_GET["search"]) ? $_GET["search"] : "";
 
// query rooms
$stmt = $room->search($keywords,$from_record_num, $records_per_page);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0 && $keywords){
 
    // rooms array
    $rooms_arr=array();
    $rooms_arr["records"]=array();
    $rooms_arr["paging"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $room_item=array(
            'roomid' =>$roomid,
            'description' =>$description,
            'period'=>$period,
            'price' =>$price,
            'roomsize'=> $roomsize,
            'selfcontain'=>(boolean) $selfcontain,
            'gatefence'=>  (boolean)$gatefence,
            'furnished'=> (boolean) $furnished,
            'electricity'=> $electricity,
            'water'=> $water,
            'parking'=> $parking,
            'parking'=> $parking,
            'kitchen'=> (boolean) $kitchen,
            'rating'=> (integer)$rating,
           'ward'=> $ward,
           'region'=> $region,
           'district' => $district,
           'firstname'=>  $firstname,
           'lastname'=>  $lastname,
           'phone' => $phone,
           'imageroom1' => $imageroom1,
           'imageroom2' => $imageroom2,
           'imageroom3' => $imageroom3,
           'imageroom4' => $imageroom4,
           'imageroom5' => $imageroom5,
           'pathroom'=>$pathroom,
        );
 
        array_push($rooms_arr["records"], $room_item);
    }
   // include paging
   $total_rows=$room->count();
   $page_url="{$home_url}room/search_room.php?";
   $paging=$utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
   $rooms_arr["paging"]=$paging;

    echo json_encode($rooms_arr);
}
 
else{

    $messege_arr["messege"]=array();
   $messege_item= array("messege" => "rooms found.");
   array_push($messege_arr["messege"], $messege_item);

    echo json_encode($messege_arr );
}
?>