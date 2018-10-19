<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate room object
include_once '../objects/room.php';
 
$database = new Database();
$db = $database->getConnection();
 
$room = new Room($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
   // !empty($data->roomid) &&
    !empty($data->gatefence) &&
    !empty($data->furnished) &&
    !empty($data->electricity) &&
    !empty($data->water) &&
    !empty($data->parking) &&
    !empty($data->roomsize) &&
    !empty($data->selfcontain) &&
    !empty($data->kitchen) &&
    !empty($data->rating) &&
    !empty($data->price) &&
    !empty($data->pepo) &&
    !empty($data->desdo) &&
    !empty($data->region) &&
    !empty($data->kata) &&
    !empty($data->maarufu) 
){
 
    // set room property values
   // $room->roomid = $data->roomid;
    $room->gatefence = $data->gatefence;
    $room->furnished = $data->furnished;
    $room->electricity = $data->electricity;
    $room->water = $data->water;
    $room->parking = $data->parking;
    $room->roomsize = $data->roomsize;
    $room->selfcontain = $data->selfcontain;
    $room->kitchen = $data->kitchen;
    $room->rating = $data->rating;
    $room->price = $data->price;
    $room->pepo = $data->pepo;
    $room->desdo = $data->desdo;
    $room->region = $data->region;
    $room->kata = $data->kata;
    $room->maarufu = $data->maarufu;
 
    // create the room
    if($room->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(array("message" => "room was created."));
    }
 
    // if unable to create the room, tell the user
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the user
        echo json_encode(array("message" => "Unable to create room."));
    }
}
 
// tell the user data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the user
    echo json_encode(array("message" => "Unable to create room. Data is incomplete."));
}
?>