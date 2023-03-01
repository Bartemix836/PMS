<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    
    include 'DbConnect.php';
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    
    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case "GET":
            $sql = "SELECT * FROM products";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && $path[3]) {
                $sql .= " WHERE Id_Order = :id_employee";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':Id_Order', $path[3]);
                $stmt->execute();
                $employees = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
    
            echo json_encode($employees);
            break;

        case "POST":
            $employee = json_decode(file_get_contents('php://input'));
            $sql ="INSERT INTO employees (id_employee, name, surname, shift, `create_at`) VALUES (null, :name, :surname, :shift, :create_at)";
            $stmt = $conn->prepare($sql);
            // echo('Hello world!');
            $create_at = date('Y-m-d');
            $stmt ->bindParam(':name',$employee->name);
            $stmt ->bindParam(':surname',$employee->surname);
            $stmt ->bindParam(':shift',$employee->shift);
            $stmt->bindParam(':create_at', $create_at);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;

            case "PUT":
                $employee = json_decode(file_get_contents('php://input'));
                $sql ="UPDATE employees SET name =:name, surname = :surname, shift =:shift,  update_at =:updated_at WHERE id_employee = :id_employee";
                $stmt = $conn->prepare($sql);
                // echo('Hello world!');
                $updated_at = date('Y-m-d');
                $stmt ->bindParam(':id_employee',$employee->id_employee);
                $stmt ->bindParam(':name',$employee->name);
                $stmt ->bindParam(':surname',$employee->surname);
                $stmt ->bindParam(':shift',$employee->shift);
                $stmt->bindParam(':updated_at', $updated_at);
    
                if($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record updated successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to update record.'];
                }
                echo json_encode($response);
                break;

            case "DELETE":
                $sql = "DELETE FROM employees WHERE id_employee = :id_employee ";
                $path = explode('/', $_SERVER['REQUEST_URI']);
              
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id_employee', $path[3]);
                
                if($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                }
                echo json_encode($response);
                break;
    }
?>